<template>
  <div>
    <!-- OPEN SCREEN -->
    <div v-if="!started" @click="startJourney" style="z-index: 9999;"
      class="vh-100 d-flex flex-column justify-content-center align-items-center bg-secondary position-fixed top-0 start-0 w-100">
      <div class="animate-pulse display-1 text-danger">
        <img :src="heartIcon" width="64" height="64">
      </div>
      <p class="mt-4 fs-3 font-hand text-primary">
        Chạm nhẹ để mở quà...
      </p>
    </div>

    <!-- MAIN -->
    <div v-else class="container py-5 min-vh-100 animate-fade-in">
      <div class="text-center mb-5">
        <h1 class="display-3 fw-bold font-hand text-primary">
          Our Journey
        </h1>
        <p class="text-muted">365 ngày yêu thương</p>
      </div>

      <!-- TIMELINE -->
      <div class="timeline-wrapper">
        <div v-for="(mem, index) in memories" :key="mem.id" class="timeline-item">
          <span class="timeline-dot"></span>

          <div class="row timeline-content align-items-start">
            <!-- DESKTOP LEFT -->
            <div v-if="index % 2 === 0" class="col-md-6 d-none d-md-flex justify-content-end pe-5">
              <div class="memory-card p-3 bg-white rounded shadow-sm">
                <span class="badge bg-primary mb-2 rounded-pill">
                  {{ mem.date }}
                </span>
                <img :src="mem.img" class="img-fluid rounded mb-3 w-100 object-fit-cover" style="height: 200px;" />
                <h4 class="font-hand text-danger">{{ mem.title }}</h4>
                <p class="mb-0 text-muted small">{{ mem.desc }}</p>
              </div>
            </div>

            <div class="col-md-6 d-none d-md-block"></div>

            <!-- MOBILE + DESKTOP RIGHT -->
            <div v-if="index % 2 !== 0" class="col-md-6 ps-md-5">
              <div class="memory-card p-3 bg-white rounded shadow-sm">
                <span class="badge bg-primary mb-2 rounded-pill">
                  {{ mem.date }}
                </span>
                <img :src="mem.img" class="img-fluid rounded mb-3 w-100 object-fit-cover" style="height: 200px;" />
                <h4 class="font-hand text-danger">{{ mem.title }}</h4>
                <p class="mb-0 text-muted small">{{ mem.desc }}</p>
              </div>
            </div>

            <!-- MOBILE EVEN -->
            <div v-if="index % 2 === 0" class="col-md-6 d-md-none">
              <div class="memory-card p-3 bg-white rounded shadow-sm">
                <span class="badge bg-primary mb-2 rounded-pill">
                  {{ mem.date }}
                </span>
                <img :src="mem.img" class="img-fluid rounded mb-3 w-100 object-fit-cover" style="height: 200px;" />
                <h4 class="font-hand text-danger">{{ mem.title }}</h4>
                <p class="mb-0 text-muted small">{{ mem.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- LETTER -->
      <div class="row justify-content-center mt-5 pt-5">
        <div class="col-md-8">
          <div class="bg-white p-5 text-center shadow rotate-paper">
            <p class="font-hand fs-2 lh-lg text-dark">
              "Cảm ơn em vì đã đến bên anh.<br />
              Yêu em nhiều hơn những gì anh nói!"
            </p>
            <h3 class="font-hand text-end text-primary fw-bold mt-4">
              Anh của em
            </h3>
          </div>
        </div>
      </div>
    </div>

    <!-- AUDIO -->
    <audio ref="audioPlayer" loop>
      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script setup>
import { ref } from "vue";
import heartIcon from "../assets/image/heart.png";

const memories = [
  {
    id: 1,
    date: "22/01/2025",
    title: "Ngày đầu tiên",
    desc: "Khoảnh khắc anh lấy hết can đảm để nói lời yêu...",
    img: "https://lh3.googleusercontent.com/d/1Mbv2C3TX04zezc0vtT0tlWA2HKyzbVgQ",
  },
  {
    id: 2,
    date: "14/02/2025",
    title: "Valentine",
    desc: "Hộp socola đầu tiên em tặng, anh vẫn giữ vỏ hộp đấy.",
    img: "https://placehold.co/600x400/FFD1DC/white?text=Valentine",
  },
  {
    id: 3,
    date: "20/10/2025",
    title: "Chuyến đi xa",
    desc: "Lần đầu tiên chúng mình đi du lịch cùng nhau.",
    img: "https://placehold.co/600x400/E6E6FA/white?text=Trip",
  },
  {
    id: 4,
    date: "22/01/2026",
    title: "Tròn 1 Năm",
    desc: "Cảm ơn em đã chịu đựng tính xấu của anh suốt 365 ngày qua.",
    img: "https://placehold.co/600x400/FFB7B2/white?text=1+Year",
  },
];

const started = ref(false);
const audioPlayer = ref(null);

const startJourney = () => {
  started.value = true;

  setTimeout(() => {
    if (audioPlayer.value) {
      audioPlayer.value.volume = 0.5;
      audioPlayer.value.play().catch(() => { });
    }
  }, 500);
};
</script>

<style lang="scss">
$primary: #ffb7b2;
$secondary: #fff0f5;
$danger: #ff8fa3;
$body-bg: $secondary;
$font-family-base: "Nunito", sans-serif;

$dot-size: 18px;
$dot-left: 0px;
$line-left: calc(#{$dot-left} + #{$dot-size} / 2);
$mobile-side-padding: 16px;

@import "bootstrap/scss/bootstrap";

.font-hand {
  font-family: "Dancing Script", cursive;
}

.animate-pulse {
  animation: pulse 1.5s infinite;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.timeline-wrapper {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3px;
    background-color: white;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 767.98px) {
      left: $line-left;
      transform: none;
    }
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-dot {
  position: absolute;
  top: 12px;
  width: $dot-size;
  height: $dot-size;
  border-radius: 50%;
  background-color: $danger;
  border: 3px solid white;
  z-index: 5;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 767.98px) {
    left: $dot-left;
    transform: none;
  }
}

.timeline-content {
  @media (max-width: 767.98px) {
    padding-left: 30px;
    padding-right: 10px;
  }
}

.memory-card {
  max-width: 420px;
}

.rotate-paper {
  transform: rotate(-1deg);
  background-image: radial-gradient(#f0f0f0 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>
