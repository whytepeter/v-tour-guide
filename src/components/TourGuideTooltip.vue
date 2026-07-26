<template>
  <div
    v-if="visible"
    :class="['vtg-tooltip', 'animate-in', props.tooltipClass]"
    :style="tooltipStyle"
  >
    <!-- Smart Arrow with Dynamic Positioning -->
    <div :class="['arrow-base', arrowDirectionClass]" :style="arrowStyle"></div>

    <!-- Content -->
    <div class="vtg-stack">
      <!-- Header with Skip button -->
      <div :class="['vtg-header', props.headerClass]">
        <slot
          name="header"
          :title="title"
          :currentStep="currentStep"
          :totalSteps="totalSteps"
        >
          <h3 v-if="title" class="vtg-title">
            {{ title }}
          </h3>
        </slot>
        <slot
          name="skip-button"
          :skipLabel="skipLabel"
          :onClose="() => $emit('close')"
        >
          <button
            type="button"
            v-if="showClose"
            @click="$emit('close')"
            class="custom-skip-btn"
            :style="skipButtonStyle"
          >
            {{ skipLabel }}
          </button>
        </slot>
      </div>

      <!-- Body -->
      <div
        v-if="content || $slots.default || $slots.content"
        :class="['tour-guide-content', props.contentClass]"
      >
        <!-- Named slot for complete content customization -->
        <template v-if="$slots.content">
          <slot
            name="content"
            :content="content"
            :currentStep="currentStep"
            :totalSteps="totalSteps"
          />
        </template>
        <template v-else-if="$slots.default">
          <slot
            :content="content"
            :currentStep="currentStep"
            :totalSteps="totalSteps"
          />
        </template>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-else-if="allowHtml" v-html="content"></span>
        <template v-else>{{ content }}</template>
      </div>

      <!-- Actions -->
      <div v-if="showActions" :class="['vtg-actions', props.actionsClass]">
        <slot
          v-if="$slots.progress"
          name="progress"
          :currentStep="currentStep"
          :totalSteps="totalSteps"
        />

        <div v-else class="vtg-progress">
          <div class="vtg-progress-track">
            <div
              v-for="step in totalSteps"
              :key="step"
              class="vtg-progress-dot"
              :style="getProgressStyle(step)"
            ></div>
          </div>
        </div>

        <div class="vtg-action-group">
          <template v-if="$slots.actions">
            <slot
              name="actions"
              :showPrevious="showPrevious"
              :isLastStep="isLastStep"
              :prevLabel="prevLabel"
              :nextLabel="nextLabel"
              :finishLabel="finishLabel"
              :onPrevious="() => $emit('previous')"
              :onNext="() => $emit('next')"
            />
          </template>
          <template v-else>
            <button
              type="button"
              v-if="showPrevious"
              @click="$emit('previous')"
              class="custom-action-btn"
              :style="buttonStyle"
            >
              {{ prevLabel }}
            </button>
            <button
              type="button"
              @click="$emit('next')"
              class="custom-action-btn"
              :style="buttonStyle"
            >
              {{ isLastStep ? finishLabel : nextLabel }}
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  visible?: boolean;
  title?: string;
  content?: string;
  /**
   * Render `content` as HTML instead of plain text.
   * Only enable this for content you control - the markup is not sanitized.
   */
  allowHtml?: boolean;
  direction?: "top" | "bottom" | "left" | "right";
  showClose?: boolean;
  showActions?: boolean;
  showPrevious?: boolean;
  currentStep?: number;
  totalSteps?: number;
  offsetX?: number;
  offsetY?: number;
  skipLabel?: string;
  nextLabel?: string;
  prevLabel?: string;
  finishLabel?: string;

  // Arrow positioning
  arrowOffset?: number;

  // Customization props
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
  padding?: string;
  maxWidth?: string;
  minWidth?: string;
  boxShadow?: string;

  // Button customization
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  buttonHoverColor?: string;

  // Skip button customization
  skipButtonColor?: string;
  skipButtonHoverColor?: string;

  // Progress indicator customization
  progressActiveColor?: string;
  progressInactiveColor?: string;

  // Custom CSS classes
  tooltipClass?: string;
  headerClass?: string;
  contentClass?: string;
  actionsClass?: string;
}

interface Emits {
  (e: "close" | "next" | "previous"): void;
}

const props = withDefaults(defineProps<Props>(), {
  visible: true,
  allowHtml: false,
  direction: "bottom",
  showClose: true,
  showActions: false,
  showPrevious: false,
  currentStep: 1,
  totalSteps: 1,
  offsetX: 0,
  offsetY: 0,
  arrowOffset: 0,
  skipLabel: "Skip",
  nextLabel: "Next",
  prevLabel: "Previous",
  finishLabel: "Finish",

  // Default styling
  backgroundColor: "#101828",
  textColor: "#ffffff",
  borderRadius: "0.75rem",
  padding: "0.75rem",
  maxWidth: "20rem",
  minWidth: "16rem",
  boxShadow:
    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",

  // Default button styling
  buttonBackgroundColor: "#374151",
  buttonTextColor: "#ffffff",
  buttonHoverColor: "#4B5563",

  // Default skip button styling
  skipButtonColor: "#ffffff",
  skipButtonHoverColor: "rgba(255, 255, 255, 0.8)",

  // Default progress styling
  progressActiveColor: "#60A5FA",
  progressInactiveColor: "rgba(255, 255, 255, 0.3)",
});

defineEmits<Emits>();

const isLastStep = computed(() => props.currentStep >= props.totalSteps);

// Instagram-style progress with fade effect
const getProgressStyle = computed(() => (step: number) => {
  const isActive = step <= props.currentStep;
  const distance = Math.abs(step - props.currentStep);

  if (isActive) {
    return {
      backgroundColor: props.progressActiveColor,
      opacity: 1,
    };
  } else {
    // Fade out based on distance from current step
    const opacity = Math.max(0.2, 1 - distance * 0.3);
    return {
      backgroundColor: props.progressInactiveColor,
      opacity: opacity,
    };
  }
});

// Dynamic styling computeds
const tooltipStyle = computed(() => {
  // Handle gradients vs solid colors
  const style: Record<string, string> = {};

  if (props.backgroundColor?.includes("gradient")) {
    style.background = props.backgroundColor;
  } else {
    style.backgroundColor = props.backgroundColor;
  }

  return {
    ...style,
    color: props.textColor,
    borderRadius: props.borderRadius,
    padding: props.padding,
    // Let the browser size the tooltip to its content, bounded by min/max.
    // A character-count estimate cannot account for line breaks or markup.
    width: "max-content",
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
    boxShadow: props.boxShadow,
  };
});

/**
 * Smart Arrow Positioning
 *
 * Calculates arrow position based on direction and offset to ensure
 * it always points directly at the target element, even when tooltip
 * is repositioned to fit in viewport.
 */
const arrowDirectionClass = computed(() => {
  switch (props.direction) {
    case "top":
      return "arrow-top";
    case "bottom":
      return "arrow-bottom";
    case "left":
      return "arrow-left";
    case "right":
      return "arrow-right";
    default:
      return "arrow-bottom";
  }
});

const arrowStyle = computed(() => {
  const style: Record<string, string> = {};

  // Handle gradients vs solid colors for arrow
  if (props.backgroundColor?.includes("gradient")) {
    style.background = props.backgroundColor;
  } else {
    style.backgroundColor = props.backgroundColor;
  }

  // Apply offset to center arrow on target
  if (props.direction === "top" || props.direction === "bottom") {
    // For top/bottom positioning, offset horizontally
    if (props.arrowOffset !== 0) {
      const offsetPx = Math.max(-50, Math.min(50, props.arrowOffset)); // Clamp offset
      style.transform = `translateX(calc(-50% + ${offsetPx}px)) rotate(45deg)`;
    }
  } else if (props.direction === "left" || props.direction === "right") {
    // For left/right positioning, offset vertically
    if (props.arrowOffset !== 0) {
      const offsetPx = Math.max(-50, Math.min(50, props.arrowOffset)); // Clamp offset
      style.transform = `translateY(calc(-50% + ${offsetPx}px)) rotate(45deg)`;
    }
  }

  return style;
});

const buttonStyle = computed(() => ({
  backgroundColor: props.buttonBackgroundColor,
  color: props.buttonTextColor,
  "--hover-bg": props.buttonHoverColor,
}));

const skipButtonStyle = computed(() => ({
  color: props.skipButtonColor,
  "--hover-color": props.skipButtonHoverColor,
}));
</script>

<style scoped>
/*
 * Self-contained tooltip styles.
 *
 * These are deliberately plain CSS rather than utility classes: the library
 * must render correctly whether or not the host app uses Tailwind, and must
 * never inject a CSS framework (and its global resets) into someone else's
 * page. Colors, radius, padding and width all come from props via inline
 * styles, so only layout and typography live here.
 *
 * Consumers override via the `tooltipClass` / `headerClass` / `contentClass` /
 * `actionsClass` props. Those land on the same elements and, being unscoped,
 * win on specificity over the single-class selectors below.
 */

.vtg-tooltip {
  position: relative;
  z-index: 50;
  font-size: 0.875rem;
  line-height: 1.25rem;
  box-sizing: border-box;
}

/* Vertical rhythm between header / body / actions */
.vtg-stack {
  position: relative;
}

.vtg-stack > * + * {
  margin-top: 0.5rem;
}

.vtg-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}

.vtg-title {
  flex: 1 1 0%;
  min-width: 0;
  margin: 0;
  font-size: inherit;
  font-weight: 500;
  line-height: 1.25;
}

/*
 * Preserve newlines authored in a plain `content` string so multi-line
 * copy works without needing `allowHtml`. Runs of spaces still collapse.
 */
.tour-guide-content {
  opacity: 0.9;
  font-weight: 100;
  overflow-wrap: break-word;
  white-space: pre-line;
}

.vtg-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.vtg-progress {
  display: flex;
  align-items: center;
  flex: 1 1 0%;
}

.vtg-progress-track {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem 0.25rem 0;
}

.vtg-progress-dot {
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 9999px;
  transition: all 300ms;
}

.vtg-action-group {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  flex-shrink: 0;
}

.custom-skip-btn {
  flex-shrink: 0;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  font-size: 0.875rem;
  text-decoration: underline;
  cursor: pointer;
  transition: color 150ms;
}

.custom-action-btn {
  flex-shrink: 0;
  border: 0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font: inherit;
  font-size: 0.75rem;
  line-height: 1rem;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 150ms;
}

.custom-skip-btn:hover {
  color: v-bind("props.skipButtonHoverColor") !important;
}

.custom-action-btn:hover {
  background-color: v-bind("props.buttonHoverColor") !important;
}

/* Arrow positioning and rotation styles */
.arrow-base {
  position: absolute;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
}

.arrow-top {
  top: 100%;
  left: 50%;
  margin-top: -6px;
  transform: translateX(-50%) rotate(45deg);
}

.arrow-bottom {
  bottom: 100%;
  left: 50%;
  margin-bottom: -6px;
  transform: translateX(-50%) rotate(45deg);
}

.arrow-left {
  left: 100%;
  top: 50%;
  margin-left: -6px;
  transform: translateY(-50%) rotate(45deg);
}

.arrow-right {
  right: 100%;
  top: 50%;
  margin-right: -6px;
  transform: translateY(-50%) rotate(45deg);
}

/* Animation classes */
.animate-in {
  animation: fadeInZoom 200ms ease-out;
}

@keyframes fadeInZoom {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
