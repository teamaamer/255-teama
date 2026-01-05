import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { AnimationMixer, LoopRepeat } from "three";
import { useFrame } from "@react-three/fiber";
import LinkObject3D from "./Models3D/LinkObject3D";

useGLTF.preload("/255.glb");

export default function Model() {
  const group = useRef(null);
  const mixer = useRef(null); // Ref to hold the AnimationMixer
  const { scene, animations } = useGLTF("/255.glb");

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(scene); // Create AnimationMixer for the scene
      animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip); // Create an action for each animation
        action.setLoop(LoopRepeat); // Set loop mode
        action.play(); // Play the animation
      });
    }

    return () => {
      // Cleanup the mixer when the component unmounts
      if (mixer.current) {
        mixer.current.stopAllAction();
        mixer.current = null;
      }
    };
  }, [scene, animations]);

  useFrame((_, delta) => {
    // Update the mixer on each frame
    if (mixer.current) mixer.current.update(delta);
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
      <LinkObject3D
        object={scene.children.find((c) => c.name === "services")}
        link="/services"
      />
      <LinkObject3D
        object={scene.children.find((c) => c.name === "about")}
        link="/about"
      />
      <LinkObject3D
        object={scene.children.find((c) => c.name === "contact")}
        link="/contact"
      />
      <LinkObject3D
        object={scene.children.find((c) => c.name === "media")}
        link="/blog"
      />
    </group>
  );
}
