<script lang="ts">
  import axios from "axios";
  import Saos from "saos";

  let email: string;
  let message: string;

  let sent = false;
  let error = false;

  const handleSubmit = () => {
    axios({
      method: "POST",
      url: "https://mail-bun.onrender.com/api/send",
      data: {
        email: email,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        sent = true;
      } else if (response.data.msg === "fail") {
        error = true;
        console.log(response);
      }
    });
  };
</script>

<div class="w-full relative bg-[#DFE9FC]">
  <div class="absolute -top-16" id="contact" />
  <img src="/graphics/waveTop.svg" alt="" />
  <div
    class="max-w-screen-lg px-5 flex flex-col md:flex-row mx-auto items-center"
  >
    <div class="max-w-sm py-14 md:py-24 md:pr-5 md:mr-auto">
      <h2
        class="text-5xl font-header font-bold text-accent mb-4 text-center md:text-left"
      >
        Let's talk
      </h2>
      <p class="text-accent text-lg text-center md:text-left">
        Want to work with me, ask a question, or just chat? Drop me a message
        and I'll get back to you <strong>within 48 hours</strong>.
      </p>
    </div>
    <div class="relative w-full md:w-auto lg:-m-28 lg:p-28">
      <svg
        class="absolute hidden lg:block left-0 top-0 w-full transform -translate-x-5"
        viewBox="0 0 634 573"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M120.644 499.232C37.0591 409.763 -107.183 50.9172 129.317 36.4172C365.817 21.9172 425.186 -54.4278 549.745 70.1312C674.304 194.69 664.478 380.713 498.64 494.778C332.802 608.843 204.23 588.701 120.644 499.232Z"
            class="fill-accent"
          />
          <path
            d="M612.177 260.828C608.544 362.558 495.929 528.917 254.093 528.917C108.493 528.917 82.3164 407.271 82.3164 260.828C82.3164 114.385 203.235 10.808 376.049 41.242C548.863 71.677 615.809 159.098 612.177 260.828Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="634" height="573" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <Saos
        animation={"fade-in-top 400ms cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.7s both"}
      >
        <form
          on:submit|preventDefault={handleSubmit}
          class="relative p-5 mb-5 md:mb-0 self-stretch rounded-lg bg-white lg:bg-transparent ml-auto md:w-96 space-y-4"
        >
          <div class="flex flex-col">
            <label for="email" class="label">Your Email</label>
            <input
              id="email"
              type="email"
              required
              class="bg-accent bg-opacity-10 rounded-md border-0 focus:ring-2 ring-accent transition duration-150 p-2 focus:outline-none"
              name="email"
              bind:value={email}
            />
          </div>
          <div class="flex flex-col">
            <label for="label">Your Message</label>
            <textarea
              required
              name="message"
              bind:value={message}
              class="resize-none h-24 bg-accent bg-opacity-10 rounded border-0 focus:ring-2 transition duration-150 p-2 ring-accent focus:outline-none"
            />
          </div>
          <div class="flex flex-row items-center justify-between">
            <button
              type="submit"
              class="hover:-translate-y-1 border-2 border-accent rounded-md py-2 active:scale-90 transition duration-300 text-sm md:text-base px-4 bg-white hover:bg-accent hover:text-white"
            >
              Get in touch
            </button>
            <div class="text-green-600 pt-1">
              {#if sent}
                Thanks for the feedback!
              {/if}
            </div>
            <p class="text-red-600 pt-1 flex">
              {#if error}
                Error sending message.
              {/if}
            </p>
          </div>
        </form>
      </Saos>
    </div>
  </div>
  <img src="/graphics/waveBottom.svg" alt="" />
</div>
