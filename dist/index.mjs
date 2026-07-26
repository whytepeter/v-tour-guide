import { defineComponent as ye, useCssVars as We, computed as y, createElementBlock as g, createCommentVNode as E, openBlock as f, normalizeStyle as N, normalizeClass as D, createElementVNode as q, renderSlot as C, toDisplayString as te, Fragment as ce, createTextVNode as Me, renderList as Re, reactive as Ee, onMounted as Ce, readonly as pe, ref as w, onUnmounted as Ne, watch as ue, nextTick as J, createBlock as Ve, Teleport as xe, createVNode as ze, createSlots as Fe, withCtx as z, normalizeProps as F, guardReactiveProps as Y } from "vue";
const Ye = { class: "vtg-stack" }, De = {
  key: 0,
  class: "vtg-title"
}, Xe = ["innerHTML"], qe = {
  key: 1,
  class: "vtg-progress"
}, Je = { class: "vtg-progress-track" }, je = { class: "vtg-action-group" }, Ue = /* @__PURE__ */ ye({
  __name: "TourGuideTooltip",
  props: {
    visible: { type: Boolean, default: !0 },
    title: {},
    content: {},
    allowHtml: { type: Boolean, default: !1 },
    direction: { default: "bottom" },
    showClose: { type: Boolean, default: !0 },
    showActions: { type: Boolean, default: !1 },
    showPrevious: { type: Boolean, default: !1 },
    currentStep: { default: 1 },
    totalSteps: { default: 1 },
    offsetX: { default: 0 },
    offsetY: { default: 0 },
    skipLabel: { default: "Skip" },
    nextLabel: { default: "Next" },
    prevLabel: { default: "Previous" },
    finishLabel: { default: "Finish" },
    arrowOffset: { default: 0 },
    backgroundColor: { default: "#101828" },
    textColor: { default: "#ffffff" },
    borderRadius: { default: "0.75rem" },
    padding: { default: "0.75rem" },
    maxWidth: { default: "20rem" },
    minWidth: { default: "16rem" },
    boxShadow: { default: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" },
    buttonBackgroundColor: { default: "#374151" },
    buttonTextColor: { default: "#ffffff" },
    buttonHoverColor: { default: "#4B5563" },
    skipButtonColor: { default: "#ffffff" },
    skipButtonHoverColor: { default: "rgba(255, 255, 255, 0.8)" },
    progressActiveColor: { default: "#60A5FA" },
    progressInactiveColor: { default: "rgba(255, 255, 255, 0.3)" },
    tooltipClass: {},
    headerClass: {},
    contentClass: {},
    actionsClass: {}
  },
  emits: ["close", "next", "previous"],
  setup(P) {
    We((t) => ({
      "056587cd": s.skipButtonHoverColor,
      "75856eae": s.buttonHoverColor
    }));
    const s = P, I = y(() => s.currentStep >= s.totalSteps), i = y(() => (t) => {
      const h = t <= s.currentStep, A = Math.abs(t - s.currentStep);
      if (h)
        return {
          backgroundColor: s.progressActiveColor,
          opacity: 1
        };
      {
        const U = Math.max(0.2, 1 - A * 0.3);
        return {
          backgroundColor: s.progressInactiveColor,
          opacity: U
        };
      }
    }), O = y(() => {
      const t = {};
      return s.backgroundColor?.includes("gradient") ? t.background = s.backgroundColor : t.backgroundColor = s.backgroundColor, {
        ...t,
        color: s.textColor,
        borderRadius: s.borderRadius,
        padding: s.padding,
        // Let the browser size the tooltip to its content, bounded by min/max.
        // A character-count estimate cannot account for line breaks or markup.
        width: "max-content",
        minWidth: s.minWidth,
        maxWidth: s.maxWidth,
        boxShadow: s.boxShadow
      };
    }), j = y(() => {
      switch (s.direction) {
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
    }), W = y(() => {
      const t = {};
      if (s.backgroundColor?.includes("gradient") ? t.background = s.backgroundColor : t.backgroundColor = s.backgroundColor, s.direction === "top" || s.direction === "bottom") {
        if (s.arrowOffset !== 0) {
          const h = Math.max(-50, Math.min(50, s.arrowOffset));
          t.transform = `translateX(calc(-50% + ${h}px)) rotate(45deg)`;
        }
      } else if ((s.direction === "left" || s.direction === "right") && s.arrowOffset !== 0) {
        const h = Math.max(-50, Math.min(50, s.arrowOffset));
        t.transform = `translateY(calc(-50% + ${h}px)) rotate(45deg)`;
      }
      return t;
    }), u = y(() => ({
      backgroundColor: s.buttonBackgroundColor,
      color: s.buttonTextColor,
      "--hover-bg": s.buttonHoverColor
    })), c = y(() => ({
      color: s.skipButtonColor,
      "--hover-color": s.skipButtonHoverColor
    }));
    return (t, h) => t.visible ? (f(), g("div", {
      key: 0,
      class: D(["vtg-tooltip", "animate-in", s.tooltipClass]),
      style: N(O.value)
    }, [
      q("div", {
        class: D(["arrow-base", j.value]),
        style: N(W.value)
      }, null, 6),
      q("div", Ye, [
        q("div", {
          class: D(["vtg-header", s.headerClass])
        }, [
          C(t.$slots, "header", {
            title: t.title,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, () => [
            t.title ? (f(), g("h3", De, te(t.title), 1)) : E("", !0)
          ], !0),
          C(t.$slots, "skip-button", {
            skipLabel: t.skipLabel,
            onClose: () => t.$emit("close")
          }, () => [
            t.showClose ? (f(), g("button", {
              key: 0,
              type: "button",
              onClick: h[0] || (h[0] = (A) => t.$emit("close")),
              class: "custom-skip-btn",
              style: N(c.value)
            }, te(t.skipLabel), 5)) : E("", !0)
          ], !0)
        ], 2),
        t.content || t.$slots.default || t.$slots.content ? (f(), g("div", {
          key: 0,
          class: D(["tour-guide-content", s.contentClass])
        }, [
          t.$slots.content ? C(t.$slots, "content", {
            key: 0,
            content: t.content,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, void 0, !0) : t.$slots.default ? C(t.$slots, "default", {
            key: 1,
            content: t.content,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, void 0, !0) : t.allowHtml ? (f(), g("span", {
            key: 2,
            innerHTML: t.content
          }, null, 8, Xe)) : (f(), g(ce, { key: 3 }, [
            Me(te(t.content), 1)
          ], 64))
        ], 2)) : E("", !0),
        t.showActions ? (f(), g("div", {
          key: 1,
          class: D(["vtg-actions", s.actionsClass])
        }, [
          t.$slots.progress ? C(t.$slots, "progress", {
            key: 0,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, void 0, !0) : (f(), g("div", qe, [
            q("div", Je, [
              (f(!0), g(ce, null, Re(t.totalSteps, (A) => (f(), g("div", {
                key: A,
                class: "vtg-progress-dot",
                style: N(i.value(A))
              }, null, 4))), 128))
            ])
          ])),
          q("div", je, [
            t.$slots.actions ? C(t.$slots, "actions", {
              key: 0,
              showPrevious: t.showPrevious,
              isLastStep: I.value,
              prevLabel: t.prevLabel,
              nextLabel: t.nextLabel,
              finishLabel: t.finishLabel,
              onPrevious: () => t.$emit("previous"),
              onNext: () => t.$emit("next")
            }, void 0, !0) : (f(), g(ce, { key: 1 }, [
              t.showPrevious ? (f(), g("button", {
                key: 0,
                type: "button",
                onClick: h[1] || (h[1] = (A) => t.$emit("previous")),
                class: "custom-action-btn",
                style: N(u.value)
              }, te(t.prevLabel), 5)) : E("", !0),
              q("button", {
                type: "button",
                onClick: h[2] || (h[2] = (A) => t.$emit("next")),
                class: "custom-action-btn",
                style: N(u.value)
              }, te(I.value ? t.finishLabel : t.nextLabel), 5)
            ], 64))
          ])
        ], 2)) : E("", !0)
      ])
    ], 6)) : E("", !0);
  }
}), Ke = (P, s) => {
  const I = P.__vccOpts || P;
  for (const [i, O] of s)
    I[i] = O;
  return I;
}, Qe = /* @__PURE__ */ Ke(Ue, [["__scopeId", "data-v-11b0bda2"]]), p = Ee({
  isActive: !1,
  currentStep: 0,
  completedSteps: [],
  hasSeenTourGuide: !1
}), Ze = () => {
  const P = () => {
    if (typeof window < "u") {
      const c = localStorage.getItem("tour-guide-state");
      if (c)
        try {
          Object.assign(p, JSON.parse(c));
        } catch {
          localStorage.removeItem("tour-guide-state");
        }
    }
  }, s = () => {
    typeof window < "u" && localStorage.setItem("tour-guide-state", JSON.stringify(p));
  }, I = (c) => {
    p.isActive = !0, p.currentStep = 0, p.completedSteps = [], s();
  }, i = (c) => {
    p.completedSteps.includes(c) || (p.completedSteps.push(c), s());
  }, O = (c) => {
    p.currentStep = c, s();
  }, j = () => {
    p.isActive = !1, p.hasSeenTourGuide = !0, s();
  }, W = () => {
    p.isActive = !1, p.currentStep = 0, p.completedSteps = [], p.hasSeenTourGuide = !1, s();
  }, u = (c) => p.completedSteps.includes(c);
  return Ce(() => {
    P();
  }), {
    // State
    tourGuideState: pe(p),
    // Actions
    startTourGuide: I,
    completeStep: i,
    updateCurrentStep: O,
    finishTourGuide: j,
    resetTourGuide: W,
    isStepCompleted: u,
    // Helpers
    loadTourGuideState: P,
    saveTourGuideState: s
  };
}, et = /* @__PURE__ */ ye({
  __name: "TourManager",
  props: {
    steps: {},
    autoStart: { type: Boolean, default: !1 },
    showOverlay: { type: Boolean, default: !0 },
    allowSkip: { type: Boolean, default: !0 },
    allowHtml: { type: Boolean, default: !1 },
    highlightPadding: { default: 4 },
    labels: {},
    allowInteractions: { type: Boolean, default: !1 },
    viewportMargin: { default: 16 },
    scrollToView: { type: Boolean, default: !0 },
    trackAnimations: { type: Boolean, default: !1 },
    fluid: { type: Boolean, default: !1 },
    fluidDuration: { default: 300 },
    tooltip: {}
  },
  emits: ["start", "complete", "skip", "step-change"],
  setup(P, { expose: s, emit: I }) {
    const i = P, O = y(() => ({
      "--vtg-fluid-duration": `${i.fluidDuration}ms`
    })), j = {
      skip: "Skip",
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    }, W = y(() => ({
      ...j,
      ...i.labels
    })), u = y(() => {
      const e = i.tooltip || {}, l = o.value?.tooltip || {};
      return {
        ...e,
        ...l
      };
    }), c = I, {
      completeStep: t,
      finishTourGuide: h,
      startTourGuide: A,
      updateCurrentStep: U
    } = Ze(), b = w(!1), r = w(0), X = w(!1);
    let T = null, oe = [];
    const n = w(null), L = w(null), m = w(), V = w(null), K = w(null), k = w({
      width: 0,
      height: 0
    }), fe = w("bottom"), he = w(0), Q = w(null), Z = w(null), M = w(null), o = y(() => i.steps[r.value]), ke = y(() => {
      if (!n.value || !o.value || !V.value)
        return {};
      const e = V.value, l = i.highlightPadding, a = o.value.radius ?? 8, d = e.top - l, S = e.left - l, G = e.width + l * 2, v = e.height + l * 2;
      return {
        top: `${d}px`,
        left: `${S}px`,
        width: `${G}px`,
        height: `${v}px`,
        borderRadius: `${a}px`,
        zIndex: 9998,
        // Massive box-shadow creates the dimming overlay around the cut-out
        boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)"
      };
    }), Te = (e) => {
      const l = {
        width: window.innerWidth,
        height: window.innerHeight
      }, a = i.viewportMargin;
      return {
        top: e.top - a,
        bottom: l.height - e.bottom - a,
        left: e.left - a,
        right: l.width - e.right - a
      };
    }, Le = (e, l, a) => {
      const d = Te(e);
      if (a && {
        top: d.top >= l.height,
        bottom: d.bottom >= l.height,
        left: d.left >= l.width,
        right: d.right >= l.width
      }[a])
        return a;
      const S = [
        {
          name: "bottom",
          space: d.bottom,
          needed: l.height
        },
        { name: "top", space: d.top, needed: l.height },
        { name: "right", space: d.right, needed: l.width },
        { name: "left", space: d.left, needed: l.width }
      ], G = S.filter((v) => v.space >= v.needed);
      return G.length > 0 ? G.sort((v, x) => x.space - v.space)[0].name : S.sort((v, x) => x.space - v.space)[0].name;
    }, $e = (e, l, a) => {
      if (a === "top" || a === "bottom") {
        const d = e.left + e.width / 2, S = l.left + l.width / 2;
        return d - S;
      } else {
        const d = e.top + e.height / 2, S = l.top + l.height / 2;
        return d - S;
      }
    }, Be = y(() => {
      if (!o.value) return {};
      const e = L.value || n.value, l = K.value || V.value;
      if (!e || !l) return {};
      const a = l, d = o.value.direction, S = o.value.offsetX || 0, G = o.value.offsetY || 0, v = k.value.width > 0 ? k.value : { width: 320, height: 200 }, x = Le(
        a,
        v,
        d
      );
      fe.value = x;
      let B = 0, H = 0;
      const ie = 12;
      switch (x) {
        case "top":
          B = a.top - v.height - ie + G, H = a.left + a.width / 2 - v.width / 2 + S;
          break;
        case "bottom":
          B = a.bottom + ie + G, H = a.left + a.width / 2 - v.width / 2 + S;
          break;
        case "left":
          B = a.top + a.height / 2 - v.height / 2 + G, H = a.left - v.width - ie + S;
          break;
        case "right":
          B = a.top + a.height / 2 - v.height / 2 + G, H = a.right + ie + S;
          break;
      }
      const ne = {
        width: window.innerWidth,
        height: window.innerHeight
      }, R = i.viewportMargin;
      H < R ? H = R : H + v.width > ne.width - R && (H = ne.width - v.width - R), B < R ? B = R : B + v.height > ne.height - R && (B = ne.height - v.height - R);
      const Oe = {
        left: H,
        top: B,
        width: v.width,
        height: v.height
      };
      return he.value = $e(
        a,
        Oe,
        x
      ), {
        top: `${B}px`,
        left: `${H}px`,
        zIndex: 9999,
        transform: "none"
        // We handle positioning directly now
      };
    }), $ = () => {
      if (n.value) {
        const e = n.value.getBoundingClientRect(), l = V.value;
        (!l || l.top !== e.top || l.left !== e.left || l.width !== e.width || l.height !== e.height) && (V.value = e);
      }
      if (L.value) {
        const e = L.value.getBoundingClientRect(), l = K.value;
        (!l || l.top !== e.top || l.left !== e.left || l.width !== e.width || l.height !== e.height) && (K.value = e);
      }
      if (m.value) {
        const e = {
          width: m.value.offsetWidth,
          height: m.value.offsetHeight
        };
        (k.value.width !== e.width || k.value.height !== e.height) && (k.value = e);
      }
    }, le = () => {
      i.fluid && (X.value = !0, T && clearTimeout(T), T = setTimeout(() => {
        X.value = !1, T = null;
      }, 120)), $();
    }, He = () => {
      if (!i.trackAnimations) return;
      const e = () => {
        b.value && n.value && ($(), Q.value = requestAnimationFrame(e));
      };
      Q.value = requestAnimationFrame(e);
    }, Pe = () => {
      Q.value && (cancelAnimationFrame(Q.value), Q.value = null);
    }, Ie = (e) => {
      const l = [];
      let a = e.parentElement;
      for (; a && a !== document.body; ) {
        const d = window.getComputedStyle(a);
        (d.overflow === "auto" || d.overflow === "scroll" || d.overflowY === "auto" || d.overflowY === "scroll" || d.overflowX === "auto" || d.overflowX === "scroll") && l.push(a), a = a.parentElement;
      }
      return l;
    }, ge = () => {
      n.value && (window.addEventListener("scroll", le, { passive: !0 }), window.addEventListener("resize", $, { passive: !0 }), oe = Ie(n.value), oe.forEach((e) => {
        e.addEventListener("scroll", le, { passive: !0 });
      }), He(), Z.value = new MutationObserver(() => {
        $();
      }), Z.value.observe(document.body, {
        childList: !0,
        // Child element additions/removals
        subtree: !0,
        // Monitor entire document tree
        attributes: !0,
        // Attribute changes
        attributeFilter: ["style", "class"]
        // Focus on styling changes
      }), typeof ResizeObserver < "u" && (M.value = new ResizeObserver(() => {
        $();
      }), M.value.observe(n.value), m.value && M.value.observe(m.value)));
    }, ae = () => {
      window.removeEventListener("scroll", le), window.removeEventListener("resize", $), oe.forEach((e) => {
        e.removeEventListener("scroll", le);
      }), oe = [], Pe(), Z.value && (Z.value.disconnect(), Z.value = null), M.value && (M.value.disconnect(), M.value = null);
    }, we = (e) => {
      let l = document.querySelector(e);
      return l || (l = document.querySelector(
        `[data-tour-guide="${e}"]`
      )), l;
    }, be = [
      "position",
      "zIndex",
      "borderRadius",
      "pointerEvents",
      "isolation"
    ];
    let _ = null;
    const Ae = (e) => {
      _ = {};
      for (const l of be)
        _[l] = e.style[l];
      e.style.position = "relative", e.style.zIndex = "9997", e.style.borderRadius = `${o.value?.radius ?? 8}px`, e.style.isolation = "isolate", e.setAttribute("data-tour-guide-interactive", "true");
    }, se = (e) => {
      if (_) {
        for (const l of be)
          e.style[l] = _[l] ?? "";
        _ = null;
      } else
        e.style.removeProperty("z-index"), e.style.removeProperty("position"), e.style.removeProperty("border-radius"), e.style.removeProperty("pointer-events"), e.style.removeProperty("isolation");
      e.removeAttribute("data-tour-guide-interactive");
    }, ee = async () => {
      if (o.value) {
        if (n.value && se(n.value), n.value = we(o.value.target), !n.value) {
          console.warn(
            `Tour Guide: Target element "${o.value.target}" not found`
          );
          return;
        }
        o.value.tooltipTarget ? (L.value = we(
          o.value.tooltipTarget
        ), L.value || (console.warn(
          `Tour Guide: Tooltip target element "${o.value.tooltipTarget}" not found, falling back to main target`
        ), L.value = null)) : L.value = null, (o.value?.scrollToView ?? i.scrollToView) && (n.value.scrollIntoView({
          behavior: "smooth",
          // Smooth animation
          block: "center",
          // Center vertically in viewport
          inline: "nearest"
          // Minimal horizontal scrolling
        }), await new Promise((e) => setTimeout(e, 500))), Ae(n.value), $(), await J(), m.value ? k.value = {
          width: m.value.offsetWidth || 320,
          // fallback width
          height: m.value.offsetHeight || 200
          // fallback height
        } : k.value = { width: 320, height: 200 }, $();
      }
    }, me = async () => {
      i.steps.length !== 0 && (b.value = !0, r.value = 0, A(), i.allowInteractions || document.body.classList.add("tour-guide-active"), await J(), await ee(), k.value = { width: 320, height: 200 }, ge(), await new Promise((e) => setTimeout(e, 100)), m.value && (k.value = {
        width: m.value.offsetWidth || 320,
        height: m.value.offsetHeight || 200
      }), o.value?.beforeShow && await o.value.beforeShow(), c("start"), c("step-change", o.value, r.value), o.value?.afterShow && o.value.afterShow());
    }, de = async () => {
      o.value && t(o.value.id), o.value?.beforeHide && await o.value.beforeHide(), r.value < i.steps.length - 1 ? (r.value++, U(r.value), await J(), await ee(), o.value?.beforeShow && await o.value.beforeShow(), c("step-change", o.value, r.value), o.value?.afterShow && o.value.afterShow()) : Se();
    }, ve = async () => {
      r.value > 0 && (o.value?.beforeHide && await o.value.beforeHide(), r.value--, U(r.value), await J(), await ee(), o.value?.beforeShow && await o.value.beforeShow(), c("step-change", o.value, r.value), o.value?.afterShow && o.value.afterShow());
    }, re = () => {
      n.value && se(n.value), ae(), i.allowInteractions || document.body.classList.remove("tour-guide-active"), b.value = !1, n.value = null, L.value = null, V.value = null, K.value = null, k.value = { width: 0, height: 0 }, T && clearTimeout(T), X.value = !1, h(), c("skip");
    }, Se = () => {
      o.value && t(o.value.id), n.value && se(n.value), ae(), i.allowInteractions || document.body.classList.remove("tour-guide-active"), b.value = !1, n.value = null, L.value = null, V.value = null, K.value = null, k.value = { width: 0, height: 0 }, T && clearTimeout(T), X.value = !1, h(), c("complete");
    }, Ge = async (e) => {
      if (e >= 0 && e < i.steps.length) {
        for (let l = 0; l <= e; l++) {
          const a = i.steps[l];
          a && t(a.id);
        }
        r.value = e, U(r.value), await J(), await ee(), o.value?.beforeShow && await o.value.beforeShow(), c("step-change", o.value, r.value), o.value?.afterShow && o.value.afterShow();
      }
    };
    return Ce(() => {
      i.autoStart && me();
    }), Ne(() => {
      T && clearTimeout(T), b.value && (ae(), n.value && se(n.value), i.allowInteractions || document.body.classList.remove("tour-guide-active"));
    }), ue(
      () => r.value,
      async () => {
        b.value && await ee();
      }
    ), ue(n, (e, l) => {
      l && ae(), e && b.value && ($(), ge());
    }), ue(L, () => {
      b.value && $();
    }), ue(
      m,
      (e) => {
        e && b.value && J(() => {
          k.value = {
            width: e.offsetWidth || 320,
            height: e.offsetHeight || 200
          }, M.value && M.value.observe(e);
        });
      },
      { immediate: !0 }
    ), s({
      startTourGuide: me,
      skipTourGuide: re,
      completeTourGuide: Se,
      nextStep: de,
      previousStep: ve,
      goToStep: Ge,
      isActive: pe(b),
      currentStepIndex: pe(r)
    }), (e, l) => (f(), g("div", null, [
      b.value && n.value ? (f(), g("div", {
        key: 0,
        style: N([ke.value, O.value]),
        class: D(["vtg-cutout", { "vtg-animated": e.fluid && !X.value }])
      }, null, 6)) : E("", !0),
      (f(), Ve(xe, { to: "body" }, [
        b.value && n.value ? (f(), g("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: m,
          style: N([Be.value, O.value]),
          class: D(["vtg-tooltip-anchor", { "vtg-animated": e.fluid && !X.value }]),
          "data-tour-guide-interactive": "true"
        }, [
          ze(Qe, {
            visible: b.value,
            title: o.value?.title,
            content: o.value?.content,
            "allow-html": o.value?.allowHtml ?? e.allowHtml,
            direction: fe.value,
            "current-step": r.value + 1,
            "total-steps": e.steps.length,
            "show-previous": r.value > 0,
            "show-close": e.allowSkip,
            "show-actions": o.value?.showAction,
            "arrow-offset": he.value,
            onNext: de,
            onPrevious: ve,
            onClose: re,
            skipLabel: o.value?.skipLabel || W.value.skip,
            nextLabel: o.value?.nextLabel || W.value.next,
            prevLabel: o.value?.prevLabel || W.value.previous,
            finishLabel: o.value?.finishLabel || W.value.finish,
            backgroundColor: u.value.backgroundColor,
            textColor: u.value.textColor,
            borderRadius: u.value.borderRadius,
            padding: u.value.padding,
            maxWidth: u.value.maxWidth,
            minWidth: u.value.minWidth,
            boxShadow: u.value.boxShadow,
            buttonBackgroundColor: u.value.buttonBackgroundColor,
            buttonTextColor: u.value.buttonTextColor,
            buttonHoverColor: u.value.buttonHoverColor,
            skipButtonColor: u.value.skipButtonColor,
            skipButtonHoverColor: u.value.skipButtonHoverColor,
            progressActiveColor: u.value.progressActiveColor,
            progressInactiveColor: u.value.progressInactiveColor,
            tooltipClass: u.value.tooltipClass,
            headerClass: u.value.headerClass,
            contentClass: u.value.contentClass,
            actionsClass: u.value.actionsClass
          }, Fe({ _: 2 }, [
            e.$slots.default ? {
              name: "default",
              fn: z((a) => [
                C(e.$slots, "default", F(Y({
                  ...a,
                  step: o.value,
                  stepIndex: r.value,
                  currentStep: r.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "0"
            } : void 0,
            e.$slots.header ? {
              name: "header",
              fn: z((a) => [
                C(e.$slots, "header", F(Y({
                  ...a,
                  step: o.value,
                  stepIndex: r.value,
                  currentStep: r.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "1"
            } : void 0,
            e.$slots.content ? {
              name: "content",
              fn: z((a) => [
                C(e.$slots, "content", F(Y({
                  ...a,
                  step: o.value,
                  stepIndex: r.value,
                  currentStep: r.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "2"
            } : void 0,
            e.$slots["skip-button"] ? {
              name: "skip-button",
              fn: z((a) => [
                C(e.$slots, "skip-button", F(Y({
                  ...a,
                  step: o.value,
                  stepIndex: r.value,
                  currentStep: r.value + 1,
                  totalSteps: e.steps.length,
                  onSkip: re
                })))
              ]),
              key: "3"
            } : void 0,
            e.$slots.progress ? {
              name: "progress",
              fn: z((a) => [
                C(e.$slots, "progress", F(Y({
                  ...a,
                  step: o.value,
                  stepIndex: r.value,
                  currentStep: r.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "4"
            } : void 0,
            e.$slots.actions ? {
              name: "actions",
              fn: z((a) => [
                C(e.$slots, "actions", F(Y({
                  ...a,
                  step: o.value,
                  stepIndex: r.value,
                  currentStep: r.value + 1,
                  totalSteps: e.steps.length,
                  onNext: de,
                  onPrevious: ve,
                  onSkip: re
                })))
              ]),
              key: "5"
            } : void 0,
            e.$slots["step-content"] ? {
              name: "step-content",
              fn: z((a) => [
                C(e.$slots, "step-content", F(Y({
                  ...a,
                  step: o.value,
                  index: r.value,
                  currentStep: r.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "6"
            } : void 0
          ]), 1032, ["visible", "title", "content", "allow-html", "direction", "current-step", "total-steps", "show-previous", "show-close", "show-actions", "arrow-offset", "skipLabel", "nextLabel", "prevLabel", "finishLabel", "backgroundColor", "textColor", "borderRadius", "padding", "maxWidth", "minWidth", "boxShadow", "buttonBackgroundColor", "buttonTextColor", "buttonHoverColor", "skipButtonColor", "skipButtonHoverColor", "progressActiveColor", "progressInactiveColor", "tooltipClass", "headerClass", "contentClass", "actionsClass"])
        ], 6)) : E("", !0)
      ]))
    ]));
  }
});
export {
  et as TourGuideManager,
  Qe as TourGuideTooltip,
  Ze as useTourGuide
};
