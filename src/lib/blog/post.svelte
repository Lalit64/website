<script>
  import Saos from "saos";

  export let title;
  export let desc;
  export let url;
  export let index;
</script>

<Saos
  animation={`fade-in-top 400ms cubic-bezier(0.390, 0.575, 0.565, 1.000) ${
    index / 10
  }s both`}
>
  <a class="w-full flex flex-col py-6 group hover:bg-accent hover:bg-opacity-10 group border-2 border-transparent hover:border-accent transition p-5 rounded-md" href={url}
    ><h2 class="text-black font-header font-bold text-2xl mb-2">
      {title}
    </h2>
    <p class="text-gray-500">
      {desc}
    </p>
    <button class="text-accent mt-1 flex items-center font-header cursor-pointer" on:click={() => {}}>
      Read<svg
        class="h-3 ml-2 mt-[3px] transition-transform transform-gpu duration-150 group-hover:translate-x-1"
        height="11"
        viewBox="0 0 9 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.305288 9.71942C0.117817 9.53189 0.0125018 9.27758 0.0125018 9.01242C0.0125017 8.74726 0.117817 8.49295 0.305288 8.30542L3.59829 5.01242L0.305288 1.71942C0.209778 1.62717 0.133595 1.51683 0.0811865 1.39482C0.0287775 1.27282 0.00119119 1.1416 3.73635e-05 1.00882C-0.00111646 0.876042 0.024185 0.744363 0.0744659 0.621467C0.124747 0.49857 0.199 0.386919 0.292893 0.293026C0.386785 0.199133 0.498437 0.12488 0.621334 0.0745992C0.74423 0.0243187 0.87591 -0.00098423 1.00869 0.00016971C1.14147 0.00132365 1.27269 0.0289096 1.39469 0.0813188C1.5167 0.133728 1.62704 0.20991 1.71929 0.305421L5.71929 4.30542C5.90676 4.49295 6.01207 4.74726 6.01207 5.01242C6.01207 5.27758 5.90676 5.53189 5.71929 5.71942L1.71929 9.71942C1.53176 9.90689 1.27745 10.0122 1.01229 10.0122C0.747124 10.0122 0.492816 9.90689 0.305288 9.71942Z"
          class="fill-accent"
        /></svg
      >
    </button></a
  >
</Saos>

<style>
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
