import React from "react"
import { Link } from "react-router-dom"
import { Particles } from "react-tsparticles"

const Landing = () => {
  return (
    <div>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 5,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <main className="box">
        <img
          src="https://i.imgur.com/0Ay7sqG.png"
          alt="escasuma+myntra"
          className="logo"
        />
        <h2 className="h2b">Escasuma</h2>
        <p className="p2b">
          Your personal memey stylist. <br></br>Find your style in seconds. Shop on
          Myntra. Dazzle every occasion.
        </p>

        <div className="inline">
          <div className="containz">
            <Link to="/gen" className="a">
              FIND YOUR STYLE NOW
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Landing
