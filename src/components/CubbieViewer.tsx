import { useEffect, useRef } from "react";
import type { Material, Mesh, Object3D, Texture } from "three";

type Props = {
  src: string;
  onReady?: () => void;
  className?: string;
};

export default function CubbieViewer({
  src,
  onReady,
  className = "",
}: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const readyRef = useRef(onReady);
  readyRef.current = onReady;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      try {
        const head = await fetch(src, { method: "HEAD" });
        const type = head.headers.get("content-type") ?? "";
        const bytes = Number(head.headers.get("content-length") ?? "0");

        if (
          !head.ok ||
          type.includes("text/html") ||
          (bytes > 0 && bytes < 1024)
        ) return;

        const [
          THREE,
          { GLTFLoader },
          { OrbitControls },
          { RoomEnvironment },
        ] = await Promise.all([
          import("three"),
          import("three/examples/jsm/loaders/GLTFLoader.js"),
          import("three/examples/jsm/controls/OrbitControls.js"),
          import("three/examples/jsm/environments/RoomEnvironment.js"),
        ]);

        if (disposed) return;

        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        });

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.1;
        mount.appendChild(renderer.domElement);

        const scene = new THREE.Scene();

        const pmrem = new THREE.PMREMGenerator(renderer);
        const envTex = pmrem.fromScene(
          new RoomEnvironment(),
          0.04
        ).texture;

        scene.environment = envTex;

        const key = new THREE.DirectionalLight(0xffffff, 1.6);
        key.position.set(2.5, 3, 3.5);
        scene.add(key);

        const rim = new THREE.DirectionalLight(0xc4f56a, 2.2);
        rim.position.set(-3, 2, -3);
        scene.add(rim);

        const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
        camera.position.set(0, 0.2, 4.8);

        const controls = new OrbitControls(
          camera,
          renderer.domElement
        );

        controls.target.set(0, 0, 0);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableDamping = true;
        controls.minPolarAngle = Math.PI / 2.15;
        controls.maxPolarAngle = Math.PI / 2.15;
        controls.autoRotate = !reduceMotion;
        controls.autoRotateSpeed = 1.4;

        controls.addEventListener("start", () => {
          controls.autoRotate = false;
        });

        renderer.domElement.style.cssText =
          "width:100%;height:100%;display:block;cursor:grab;touch-action:pan-y;";

        const resize = () => {
          const w = mount.clientWidth;
          const h = mount.clientHeight;

          if (!w || !h) return;

          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        };

        const ro = new ResizeObserver(resize);
        ro.observe(mount);
        resize();

        const frame = () => {
          controls.update();
          renderer.render(scene, camera);
        };

        let loaded = false;

        const io = new IntersectionObserver(([e]) => {
          if (loaded) {
            renderer.setAnimationLoop(
              e.isIntersecting ? frame : null
            );
          }
        });

        io.observe(mount);

        const disposeObject = (o: Object3D) => {
          const mesh = o as Mesh;
          if (!mesh.isMesh) return;

          mesh.geometry.dispose();

          const mats: Material[] = Array.isArray(mesh.material)
            ? mesh.material
            : [mesh.material];

          mats.forEach((m) => {
            Object.values(
              m as unknown as Record<string, unknown>
            ).forEach((v) => {
              if (v instanceof THREE.Texture) {
                (v as Texture).dispose();
              }
            });

            m.dispose();
          });
        };

        let done = false;

        const teardown = () => {
          if (done) return;
          done = true;

          renderer.setAnimationLoop(null);
          io.disconnect();
          ro.disconnect();
          controls.dispose();

          scene.traverse(disposeObject);

          envTex.dispose();
          pmrem.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };

        cleanup = teardown;

        const gltf = await new GLTFLoader().loadAsync(src);

        if (disposed) {
          teardown();
          return;
        }

        const model = gltf.scene;

        // Fit model and center it.
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const s = 2 / (size.y || 1);

        model.scale.setScalar(s);

        model.position.set(
          -center.x * s,
          -1 - box.min.y * s,
          -center.z * s
        );

        scene.add(model);

        // =====================================
        // CUBBIE SMILE - ADDED FACE DETAIL
        // =====================================

        const smileMaterial = new THREE.MeshStandardMaterial({
          color: 0x171717,
          roughness: 0.85,
          metalness: 0,
        });

        const smileGroup = new THREE.Group();

        // Two small curved sections create a simple smile.
        const smileCurve = new THREE.QuadraticBezierCurve3(
          new THREE.Vector3(-0.065, 0.025, 0),
          new THREE.Vector3(0, -0.045, 0),
          new THREE.Vector3(0.065, 0.025, 0)
        );

        const smileGeometry = new THREE.TubeGeometry(
          smileCurve,
          20,
          0.009,
          8,
          false
        );

        const smileMesh = new THREE.Mesh(
          smileGeometry,
          smileMaterial
        );

        smileGroup.add(smileMesh);

        // Initial face position.
        // These values will be adjusted after checking the model.
        smileGroup.position.set(0, 0.15, 0.35);

        model.add(smileGroup);

        // =====================================

        loaded = true;
        renderer.setAnimationLoop(frame);
        readyRef.current?.();

      } catch (err) {
        console.warn(
          "CubbieViewer: could not load the 3D model.",
          err
        );

        cleanup?.();
      }
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [src]);

  return (
    <div
      ref={mountRef}
      role="img"
      aria-label="Interactive 3D Cubbie. Drag sideways to rotate."
      className={className}
    />
  );
}
