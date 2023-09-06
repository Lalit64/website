<script lang="ts">
  import "$lib/styles/index.css";
  import Navbar from "$lib/components/Navbar/Navbar.svelte";
  import Post from "$lib/components/Post/Post.svelte";
  import Saos from "saos";
  import { onMount } from "svelte";

  let posts: string | any[] = [];

  let search: String = "";

  onMount(async () => {
    const res = await fetch(`https://dev.to/api/articles?username=lalit64`);
    posts = await res.json();
    console.log(posts);
  });
</script>

<Navbar />

<Saos
  animation={"fade-in-top 400ms cubic-bezier(0.390, 0.575, 0.565, 1.000) both"}
>
  <main class="flex flex-col mx-auto px-5 max-w-md py-28">
    <h1
      class="text-5xl font-header font-bold text-gray-900 mb-10 text-center mx-auto"
    >
      Blog
    </h1>
    <div class="flex space-x-2">
      <div class="relative flex-grow">
        <input
          type="search"
          placeholder="Search articles (case sensitive)"
          class="bg-accent bg-opacity-10 pl-10 w-full rounded border border-indigo-50 focus:border-indigo-200 transition-colors duration-150 p-2"
          bind:value={search}
        />
        <div
          class="absolute top-0 pointer-events-none left-0 h-full px-3 flex items-center align-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M19 19L13 13M15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
              class=" stroke-accent"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          >
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full space-y-8 mt-10">
      {#if posts.length === 0}
        <div class="w-full flex items-center justify-center text-xl">
          No Posts yet 😀
        </div>
      {:else}
        {#each posts as post}
          {#if post.title.includes(search)}
            <Post
              title={post.title}
              desc={post.description}
              url={post.canonical_url}
              index={posts.indexOf(post)}
            />
          {/if}
        {/each}
      {/if}
    </div>
  </main>
</Saos>
