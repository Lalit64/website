<script lang="ts">
  import Saos from "saos";
</script>

<div class="flex flex-col items-center container py-16 justify-center">
  <Saos
    animation={"fade-in-top 400ms cubic-bezier(0.390, 0.575, 0.565, 1.000) both"}
  >
    <div class="flex flex-col items-center container py-16 justify-center">
      <img
        src="/imgs/Frame.png"
        alt="profile"
        draggable="false"
        class="w-1/2 md:w-52 mb-8"
      />
      <h1
        style="color:#0C032F"
        class="font-header text-4xl md:text-5xl text-center font-bold mb-4 flex"
      >
        Hi, I'm <p class="text-accent ml-2">Lalit</p>
        ,
      </h1>
      <p
        class="text-gray-500 text-lg leading-relaxed max-w-xl text-center mb-7"
      >
        I design and build websites using tools like <span class="highlight"
          >SvelteKit, Node.js & Tailwind.</span
        >
        When I'm not freelancing I work on my own projects and travel the world.
      </p>
    </div>
  </Saos>
  <Saos
    animation={"fade-in-top 400ms cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.2s both"}
  >
    <div class="flex space-x-4">
      <a
        class="hover:-translate-y-1 border-2 border-accent rounded py-2 active:scale-90 transition duration-300 text-sm md:text-base px-4 bg-accent text-white"
        href="#contact">Contact Me</a
      ><a
        class="hover:-translate-y-1 border-2 border-accent rounded py-2 active:scale-90 transition duration-300 text-sm md:text-base px-4 bg-white hover:bg-accent hover:text-white"
        href="/blog">My Blog</a
      >
    </div>
  </Saos>
</div>

<style>
  .highlight {
    background: linear-gradient(
      180deg,
      transparent,
      transparent 55%,
      rgba(61, 144, 246, 0.2) 0,
      rgba(61, 144, 246, 0.2)
    );
  }

  @keyframes -global-fade-in-top {
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
