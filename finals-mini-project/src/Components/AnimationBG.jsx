import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const AnimationBG = () => {
  const canvasRef = useRef(null);
  const colorRef = useRef("#54b2ff");
  const location = useLocation();

  const activeColor = location.pathname === "/"
    ? "#54b2ff"
    : location.pathname.startsWith('/Products')
    ? "#eb511a"
    : location.pathname === "/Feedback"
    ? "#4ddf4d":
    location.pathname === '/Mission-Vision' ? '#f4c2c2' 
    : location.pathname.startsWith('/CompanyProfile')
    ? '#ffff00'
    : location.pathname.startsWith('/Devs')
    ?'#ff00ff':"#e4000f";

  useEffect(() => {
    colorRef.current = activeColor; 
  }, [activeColor])

  useEffect(() => {
    const state = {
      fps: 60,
      charset: "0123456789ABCDEFラドクフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ",
      size: 12,
    };

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h, p;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      p = Array(Math.ceil(w / state.size)).fill(0);
    };

    const random = (items) => items[Math.floor(Math.random() * items.length)];

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,.1)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = colorRef.current; // Use the updated color from the ref
      ctx.font = `${state.size}px sans-serif`;

      for (let i = 0; i < p.length; i++) {
        let v = p[i];
        ctx.fillText(random(state.charset), i * state.size, v);
        p[i] = v >= h || v >= 10000 * Math.random() ? 0 : v + state.size;
      }
    };

    const startAnimation = () => setInterval(draw, 2000 / state.fps);

    window.addEventListener("resize", resize);
    resize();
    const interval = startAnimation();

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(interval);
    };
  }, []);

  return <canvas ref={canvasRef} className="animationBG" />;
};
