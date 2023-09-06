<script>
  import "$lib/styles/index.css";
  import Navbar from "$lib/components/Navbar/Navbar.svelte";
  import Main from "$lib/components/Main/Main.svelte";
  import Contact from "$lib/components/Contact/Contact.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
</script>

<main class="flex items-center justify-center flex-col z-50 w-full">
  <Navbar />
  <Main />
  <Contact />
  <Footer />
</main>
