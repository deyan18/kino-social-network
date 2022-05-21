<template>


    <div class="flex">
          <h1
            class="
              title-font
              mb-4
              mt-4
              mr-2
              text-3xl
              font-medium
              text-gray-900
              sm:text-4xl
            "
          >
            <slot name="title"></slot>
          </h1>
        </div>

        <h2
          class="title-font mb-4 text-2xl font-medium text-gray-700 sm:text-2xl"
        >
          <slot name="type"></slot>
        </h2>
        <p class="mb-8 leading-relaxed">
          <slot name="plot"></slot>
        </p>
</template>

