import { Ref } from 'vue';
/**
 * TourGuideStep Interface
 *
 * Defines the structure for each step in the tour guide flow.
 * Each step targets a specific element and provides guidance through tooltips.
 */
export interface TourGuideStep {
    /** Unique identifier for the step (used for tracking progress) */
    id: string;
    /** Display title shown in the tooltip header */
    title: string;
    /** Optional description content shown in the tooltip body */
    content?: string;
    /** CSS selector, class, id, or data attribute to target the element */
    target: string;
    /** CSS selector, class, id, or data attribute for tooltip positioning (optional) */
    tooltipTarget?: string;
    /** Position of tooltip relative to target element */
    direction?: "top" | "bottom" | "left" | "right";
    /** Horizontal offset for fine-tuning tooltip position (pixels) */
    offsetX?: number;
    /** Vertical offset for fine-tuning tooltip position (pixels) */
    offsetY?: number;
    /** Border radius for the highlight cut-out (pixels, default: 8) */
    radius?: number;
    /** Whether to show the action button */
    showAction?: boolean;
    /** Custom label for skip button */
    skipLabel?: string;
    /** Custom label for next button */
    nextLabel?: string;
    /** Custom label for previous button */
    prevLabel?: string;
    /** Custom label for finish button */
    finishLabel?: string;
    tooltip?: TourGuideTooltipCustomization;
    /** Hook called before step becomes visible (async supported) */
    beforeShow?: () => void | Promise<void>;
    /** Hook called after step becomes visible */
    afterShow?: () => void;
    /** Hook called before step is hidden */
    beforeHide?: () => void | Promise<void>;
}
/**
 * TourGuide Labels Interface
 *
 * Customizable labels for tour guide buttons.
 */
export interface TourGuideLabels {
    /** Label for skip button */
    skip?: string;
    /** Label for next button */
    next?: string;
    /** Label for previous button */
    previous?: string;
    /** Label for finish button */
    finish?: string;
}
/**
 * TourGuide Tooltip Customization Interface
 *
 * Configuration options for customizing tooltip appearance and behavior.
 */
export interface TourGuideTooltipCustomization {
    /** Background color of the tooltip */
    backgroundColor?: string;
    /** Text color of the tooltip content */
    textColor?: string;
    /** Border radius of the tooltip */
    borderRadius?: string;
    /** Padding inside the tooltip */
    padding?: string;
    /** Maximum width of the tooltip */
    maxWidth?: string;
    /** Box shadow of the tooltip */
    boxShadow?: string;
    /** Background color of action buttons */
    buttonBackgroundColor?: string;
    /** Text color of action buttons */
    buttonTextColor?: string;
    /** Hover color of action buttons */
    buttonHoverColor?: string;
    /** Color of skip button */
    skipButtonColor?: string;
    /** Hover color of skip button */
    skipButtonHoverColor?: string;
    /** Color of active progress dots */
    progressActiveColor?: string;
    /** Color of inactive progress dots */
    progressInactiveColor?: string;
    /** Custom CSS class for the tooltip container */
    tooltipClass?: string;
    /** Custom CSS class for the tooltip header */
    headerClass?: string;
    /** Custom CSS class for the tooltip content */
    contentClass?: string;
    /** Custom CSS class for the tooltip actions */
    actionsClass?: string;
}
/**
 * TourGuideManager Props Interface
 *
 * Configuration options for customizing tour guide manager behavior.
 */
export interface TourGuideManagerProps {
    /** Array of tour guide steps to execute in sequence */
    steps: TourGuideStep[];
    /** Whether to automatically start tour guide when component mounts */
    autoStart?: boolean;
    /** Whether to show the dimming overlay (should generally be true) */
    showOverlay?: boolean;
    /** Whether users can skip the entire tour guide flow */
    allowSkip?: boolean;
    /** Padding around highlighted elements in pixels (affects cut-out size) */
    highlightPadding?: number;
    /** Global labels for tour guide buttons */
    labels?: TourGuideLabels;
    /** Whether to allow interactions with other elements during tour (default: false) */
    allowInteractions?: boolean;
    /** Minimum distance from viewport edges for tooltip positioning */
    viewportMargin?: number;
    /** Auto-scroll target into view before highlighting (default: false) */
    scrollToView?: boolean;
    /** Global tooltip customization (can be overridden per step) */
    tooltip?: TourGuideTooltipCustomization;
}
/**
 * TourGuideTooltip Props Interface
 *
 * Configuration options for the tooltip component.
 */
export interface TourGuideTooltipProps {
    /** Whether the tooltip is visible */
    visible?: boolean;
    /** Title displayed in the tooltip header */
    title?: string;
    /** Content displayed in the tooltip body */
    content?: string;
    /** Direction of the tooltip relative to the target */
    direction?: "top" | "bottom" | "left" | "right";
    /** Whether to show the close/skip button */
    showClose?: boolean;
    /** Whether to show action buttons (previous/next) */
    showActions?: boolean;
    /** Whether to show the previous button */
    showPrevious?: boolean;
    /** Current step number (1-based) */
    currentStep?: number;
    /** Total number of steps */
    totalSteps?: number;
    /** Horizontal offset for positioning */
    offsetX?: number;
    /** Vertical offset for positioning */
    offsetY?: number;
    /** Custom label for skip button */
    skipLabel?: string;
    /** Custom label for next button */
    nextLabel?: string;
    /** Custom label for previous button */
    prevLabel?: string;
    /** Custom label for finish button */
    finishLabel?: string;
    backgroundColor?: string;
    textColor?: string;
    borderRadius?: string;
    padding?: string;
    maxWidth?: string;
    boxShadow?: string;
    buttonBackgroundColor?: string;
    buttonTextColor?: string;
    buttonHoverColor?: string;
    skipButtonColor?: string;
    skipButtonHoverColor?: string;
    progressActiveColor?: string;
    progressInactiveColor?: string;
    tooltipClass?: string;
    headerClass?: string;
    contentClass?: string;
    actionsClass?: string;
}
/**
 * TourGuide State Interface
 *
 * Global state management for tour guide flow.
 */
export interface TourGuideState {
    /** Whether tour guide is currently active */
    isActive: boolean;
    /** Current step index (0-based) */
    currentStep: number;
    /** Array of completed step IDs */
    completedSteps: string[];
    /** Whether user has seen tour guide before */
    hasSeenTourGuide: boolean;
}
/**
 * TourGuide Events Interface
 *
 * Events emitted by tour guide components.
 */
export interface TourGuideEvents {
    /** Emitted when tour guide starts */
    start: [];
    /** Emitted when tour guide completes successfully */
    complete: [];
    /** Emitted when tour guide is skipped */
    skip: [];
    /** Emitted when step changes */
    'step-change': [step: TourGuideStep, index: number];
}
/**
 * TourGuide Composable Return Type
 *
 * Return type for the useTourGuide composable.
 */
export interface UseTourGuideReturn {
    /** Readonly tour guide state */
    tourGuideState: Readonly<TourGuideState>;
    /** Start tour guide flow */
    startTourGuide: (stepId?: string) => void;
    /** Complete a specific step */
    completeStep: (stepId: string) => void;
    /** Finish/skip the entire tour guide */
    finishTourGuide: () => void;
    /** Reset tour guide state (for testing) */
    resetTourGuide: () => void;
    /** Check if a step is completed */
    isStepCompleted: (stepId: string) => boolean;
    /** Load state from localStorage */
    loadTourGuideState: () => void;
    /** Save state to localStorage */
    saveTourGuideState: () => void;
}
/**
 * TourGuideManager Ref Interface
 *
 * Type definition for the TourGuideManager component when used with template refs.
 * This allows proper TypeScript inference when using refs.
 */
export interface TourGuideManagerRef {
    /** Start the tour guide programmatically */
    startTourGuide: () => void;
    /** Skip/stop the tour guide */
    skipTourGuide: () => void;
    /** Complete the tour guide */
    completeTourGuide: () => void;
    /** Navigate to the next step */
    nextStep: () => void;
    /** Navigate to the previous step */
    previousStep: () => void;
    /** Navigate to a specific step by index */
    goToStep: (stepIndex: number) => void;
    /** Readonly reactive reference to whether tour is active */
    isActive: Readonly<Ref<boolean>>;
    /** Readonly reactive reference to current step index */
    currentStepIndex: Readonly<Ref<number>>;
}
//# sourceMappingURL=index.d.ts.map