import { defineComponent as we, useCssVars as He, computed as S, createElementBlock as g, createCommentVNode as R, openBlock as f, normalizeStyle as N, normalizeClass as X, createElementVNode as J, renderSlot as C, toDisplayString as te, Fragment as ue, createTextVNode as Ae, renderList as Ie, reactive as Ge, onMounted as be, readonly as ve, ref as m, onUnmounted as Oe, watch as re, nextTick as j, createBlock as We, Teleport as Me, createVNode as Ee, createSlots as Re, withCtx as V, normalizeProps as F, guardReactiveProps as D } from "vue";
const Ne = { class: "vtg-stack" }, xe = {
  key: 0,
  class: "vtg-title"
}, ze = ["innerHTML"], Ve = {
  key: 1,
  class: "vtg-progress"
}, Fe = { class: "vtg-progress-track" }, De = { class: "vtg-action-group" }, Xe = /* @__PURE__ */ we({
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
  setup(H) {
    He((t) => ({
      "056587cd": s.skipButtonHoverColor,
      "75856eae": s.buttonHoverColor
    }));
    const s = H, A = S(() => s.currentStep >= s.totalSteps), n = S(() => (t) => {
      const h = t <= s.currentStep, I = Math.abs(t - s.currentStep);
      if (h)
        return {
          backgroundColor: s.progressActiveColor,
          opacity: 1
        };
      {
        const K = Math.max(0.2, 1 - I * 0.3);
        return {
          backgroundColor: s.progressInactiveColor,
          opacity: K
        };
      }
    }), O = S(() => {
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
    }), U = S(() => {
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
    }), W = S(() => {
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
    }), u = S(() => ({
      backgroundColor: s.buttonBackgroundColor,
      color: s.buttonTextColor,
      "--hover-bg": s.buttonHoverColor
    })), c = S(() => ({
      color: s.skipButtonColor,
      "--hover-color": s.skipButtonHoverColor
    }));
    return (t, h) => t.visible ? (f(), g("div", {
      key: 0,
      class: X(["vtg-tooltip", "animate-in", s.tooltipClass]),
      style: N(O.value)
    }, [
      J("div", {
        class: X(["arrow-base", U.value]),
        style: N(W.value)
      }, null, 6),
      J("div", Ne, [
        J("div", {
          class: X(["vtg-header", s.headerClass])
        }, [
          C(t.$slots, "header", {
            title: t.title,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, () => [
            t.title ? (f(), g("h3", xe, te(t.title), 1)) : R("", !0)
          ], !0),
          C(t.$slots, "skip-button", {
            skipLabel: t.skipLabel,
            onClose: () => t.$emit("close")
          }, () => [
            t.showClose ? (f(), g("button", {
              key: 0,
              type: "button",
              onClick: h[0] || (h[0] = (I) => t.$emit("close")),
              class: "custom-skip-btn",
              style: N(c.value)
            }, te(t.skipLabel), 5)) : R("", !0)
          ], !0)
        ], 2),
        t.content || t.$slots.default || t.$slots.content ? (f(), g("div", {
          key: 0,
          class: X(["tour-guide-content", s.contentClass])
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
          }, null, 8, ze)) : (f(), g(ue, { key: 3 }, [
            Ae(te(t.content), 1)
          ], 64))
        ], 2)) : R("", !0),
        t.showActions ? (f(), g("div", {
          key: 1,
          class: X(["vtg-actions", s.actionsClass])
        }, [
          t.$slots.progress ? C(t.$slots, "progress", {
            key: 0,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, void 0, !0) : (f(), g("div", Ve, [
            J("div", Fe, [
              (f(!0), g(ue, null, Ie(t.totalSteps, (I) => (f(), g("div", {
                key: I,
                class: "vtg-progress-dot",
                style: N(n.value(I))
              }, null, 4))), 128))
            ])
          ])),
          J("div", De, [
            t.$slots.actions ? C(t.$slots, "actions", {
              key: 0,
              showPrevious: t.showPrevious,
              isLastStep: A.value,
              prevLabel: t.prevLabel,
              nextLabel: t.nextLabel,
              finishLabel: t.finishLabel,
              onPrevious: () => t.$emit("previous"),
              onNext: () => t.$emit("next")
            }, void 0, !0) : (f(), g(ue, { key: 1 }, [
              t.showPrevious ? (f(), g("button", {
                key: 0,
                type: "button",
                onClick: h[1] || (h[1] = (I) => t.$emit("previous")),
                class: "custom-action-btn",
                style: N(u.value)
              }, te(t.prevLabel), 5)) : R("", !0),
              J("button", {
                type: "button",
                onClick: h[2] || (h[2] = (I) => t.$emit("next")),
                class: "custom-action-btn",
                style: N(u.value)
              }, te(A.value ? t.finishLabel : t.nextLabel), 5)
            ], 64))
          ])
        ], 2)) : R("", !0)
      ])
    ], 6)) : R("", !0);
  }
}), Ye = (H, s) => {
  const A = H.__vccOpts || H;
  for (const [n, O] of s)
    A[n] = O;
  return A;
}, qe = /* @__PURE__ */ Ye(Xe, [["__scopeId", "data-v-11b0bda2"]]), p = Ge({
  isActive: !1,
  currentStep: 0,
  completedSteps: [],
  hasSeenTourGuide: !1
}), Je = () => {
  const H = () => {
    if (typeof window < "u") {
      const c = localStorage.getItem("tour-guide-state");
      if (c) {
        const t = JSON.parse(c);
        Object.assign(p, t);
      }
    }
  }, s = () => {
    typeof window < "u" && localStorage.setItem("tour-guide-state", JSON.stringify(p));
  }, A = (c) => {
    p.isActive = !0, p.currentStep = 0, p.completedSteps = [], s();
  }, n = (c) => {
    p.completedSteps.includes(c) || (p.completedSteps.push(c), s());
  }, O = (c) => {
    p.currentStep = c, s();
  }, U = () => {
    p.isActive = !1, p.hasSeenTourGuide = !0, s();
  }, W = () => {
    p.isActive = !1, p.currentStep = 0, p.completedSteps = [], p.hasSeenTourGuide = !1, s();
  }, u = (c) => p.completedSteps.includes(c);
  return be(() => {
    H();
  }), {
    // State
    tourGuideState: ve(p),
    // Actions
    startTourGuide: A,
    completeStep: n,
    updateCurrentStep: O,
    finishTourGuide: U,
    resetTourGuide: W,
    isStepCompleted: u,
    // Helpers
    loadTourGuideState: H,
    saveTourGuideState: s
  };
}, Ue = /* @__PURE__ */ we({
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
  setup(H, { expose: s, emit: A }) {
    const n = H, O = S(() => ({
      "--vtg-fluid-duration": `${n.fluidDuration}ms`
    })), U = {
      skip: "Skip",
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    }, W = S(() => ({
      ...U,
      ...n.labels
    })), u = S(() => {
      const e = n.tooltip || {}, l = o.value?.tooltip || {};
      return {
        ...e,
        ...l
      };
    }), c = A, {
      completeStep: t,
      finishTourGuide: h,
      startTourGuide: I,
      updateCurrentStep: K
    } = Je(), w = m(!1), i = m(0), Y = m(!1);
    let T = null;
    const r = m(null), L = m(null), b = m(), x = m(null), Q = m(null), k = m({
      width: 0,
      height: 0
    }), de = m("bottom"), ce = m(0), Z = m(null), _ = m(null), M = m(null), o = S(() => n.steps[i.value]), ye = S(() => {
      if (!r.value || !o.value || !x.value)
        return {};
      const e = x.value, l = n.highlightPadding, a = o.value.radius ?? 8, v = e.top - l, y = e.left - l, G = e.width + l * 2, d = e.height + l * 2;
      return {
        top: `${v}px`,
        left: `${y}px`,
        width: `${G}px`,
        height: `${d}px`,
        borderRadius: `${a}px`,
        zIndex: 9998,
        // Massive box-shadow creates the dimming overlay around the cut-out
        boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)"
      };
    }), Se = (e) => {
      const l = {
        width: window.innerWidth,
        height: window.innerHeight
      }, a = n.viewportMargin;
      return {
        top: e.top - a,
        bottom: l.height - e.bottom - a,
        left: e.left - a,
        right: l.width - e.right - a
      };
    }, Ce = (e, l, a) => {
      const v = Se(e);
      if (a && {
        top: v.top >= l.height,
        bottom: v.bottom >= l.height,
        left: v.left >= l.width,
        right: v.right >= l.width
      }[a])
        return a;
      const y = [
        {
          name: "bottom",
          space: v.bottom,
          needed: l.height
        },
        { name: "top", space: v.top, needed: l.height },
        { name: "right", space: v.right, needed: l.width },
        { name: "left", space: v.left, needed: l.width }
      ], G = y.filter((d) => d.space >= d.needed);
      return G.length > 0 ? G.sort((d, z) => z.space - d.space)[0].name : y.sort((d, z) => z.space - d.space)[0].name;
    }, ke = (e, l, a) => {
      if (a === "top" || a === "bottom") {
        const v = e.left + e.width / 2, y = l.left + l.width / 2;
        return v - y;
      } else {
        const v = e.top + e.height / 2, y = l.top + l.height / 2;
        return v - y;
      }
    }, Te = S(() => {
      if (!o.value) return {};
      const e = L.value || r.value, l = Q.value || x.value;
      if (!e || !l) return {};
      const a = l, v = o.value.direction, y = o.value.offsetX || 0, G = o.value.offsetY || 0, d = k.value.width > 0 ? k.value : { width: 320, height: 200 }, z = Ce(
        a,
        d,
        v
      );
      de.value = z;
      let P = 0, B = 0;
      const ae = 12;
      switch (z) {
        case "top":
          P = a.top - d.height - ae + G, B = a.left + a.width / 2 - d.width / 2 + y;
          break;
        case "bottom":
          P = a.bottom + ae + G, B = a.left + a.width / 2 - d.width / 2 + y;
          break;
        case "left":
          P = a.top + a.height / 2 - d.height / 2 + G, B = a.left - d.width - ae + y;
          break;
        case "right":
          P = a.top + a.height / 2 - d.height / 2 + G, B = a.right + ae + y;
          break;
      }
      const se = {
        width: window.innerWidth,
        height: window.innerHeight
      }, E = n.viewportMargin;
      B < E ? B = E : B + d.width > se.width - E && (B = se.width - d.width - E), P < E ? P = E : P + d.height > se.height - E && (P = se.height - d.height - E);
      const Be = {
        left: B,
        top: P,
        width: d.width,
        height: d.height
      };
      return ce.value = ke(
        a,
        Be,
        z
      ), {
        top: `${P}px`,
        left: `${B}px`,
        zIndex: 9999,
        transform: "none"
        // We handle positioning directly now
      };
    }), $ = () => {
      if (r.value) {
        const e = r.value.getBoundingClientRect(), l = x.value;
        (!l || l.top !== e.top || l.left !== e.left || l.width !== e.width || l.height !== e.height) && (x.value = e);
      }
      if (L.value) {
        const e = L.value.getBoundingClientRect(), l = Q.value;
        (!l || l.top !== e.top || l.left !== e.left || l.width !== e.width || l.height !== e.height) && (Q.value = e);
      }
      if (b.value) {
        const e = {
          width: b.value.offsetWidth,
          height: b.value.offsetHeight
        };
        (k.value.width !== e.width || k.value.height !== e.height) && (k.value = e);
      }
    }, q = () => {
      n.fluid && (Y.value = !0, T && clearTimeout(T), T = setTimeout(() => {
        Y.value = !1, T = null;
      }, 120)), $();
    }, Le = () => {
      if (!n.trackAnimations) return;
      const e = () => {
        w.value && r.value && ($(), Z.value = requestAnimationFrame(e));
      };
      Z.value = requestAnimationFrame(e);
    }, $e = () => {
      Z.value && (cancelAnimationFrame(Z.value), Z.value = null);
    }, pe = (e) => {
      const l = [];
      let a = e.parentElement;
      for (; a && a !== document.body; ) {
        const v = window.getComputedStyle(a);
        (v.overflow === "auto" || v.overflow === "scroll" || v.overflowY === "auto" || v.overflowY === "scroll" || v.overflowX === "auto" || v.overflowX === "scroll") && l.push(a), a = a.parentElement;
      }
      return l;
    }, fe = () => {
      if (!r.value) return;
      window.addEventListener("scroll", q, { passive: !0 }), document.addEventListener("scroll", q, { passive: !0 }), window.addEventListener("resize", $, { passive: !0 }), pe(r.value).forEach((l) => {
        l.addEventListener("scroll", q, { passive: !0 });
      }), Le(), _.value = new MutationObserver(() => {
        $();
      }), _.value.observe(document.body, {
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
      }), M.value.observe(r.value), b.value && M.value.observe(b.value));
    }, oe = () => {
      window.removeEventListener("scroll", q), document.removeEventListener("scroll", q), window.removeEventListener("resize", $), r.value && pe(r.value).forEach((l) => {
        l.removeEventListener("scroll", q);
      }), $e(), _.value && (_.value.disconnect(), _.value = null), M.value && (M.value.disconnect(), M.value = null);
    }, he = (e) => {
      let l = document.querySelector(e);
      return l || (l = document.querySelector(
        `[data-tour-guide="${e}"]`
      )), l;
    }, ee = async () => {
      if (o.value) {
        if (r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), r.value = he(o.value.target), !r.value) {
          console.warn(
            `Tour Guide: Target element "${o.value.target}" not found`
          );
          return;
        }
        o.value.tooltipTarget ? (L.value = he(
          o.value.tooltipTarget
        ), L.value || (console.warn(
          `Tour Guide: Tooltip target element "${o.value.tooltipTarget}" not found, falling back to main target`
        ), L.value = null)) : L.value = null, n.scrollToView && (r.value.scrollIntoView({
          behavior: "smooth",
          // Smooth animation
          block: "center",
          // Center vertically in viewport
          inline: "nearest"
          // Minimal horizontal scrolling
        }), await new Promise((e) => setTimeout(e, 500))), r.value.style.position = "relative", r.value.style.zIndex = "9997", r.value.style.borderRadius = "8px", r.value.style.isolation = "isolate", r.value.setAttribute("data-tour-guide-interactive", "true"), $(), await j(), b.value ? k.value = {
          width: b.value.offsetWidth || 320,
          // fallback width
          height: b.value.offsetHeight || 200
          // fallback height
        } : k.value = { width: 320, height: 200 }, $();
      }
    }, ge = async () => {
      n.steps.length !== 0 && (w.value = !0, i.value = 0, I(), n.allowInteractions || document.body.classList.add("tour-guide-active"), await j(), await ee(), k.value = { width: 320, height: 200 }, fe(), await new Promise((e) => setTimeout(e, 100)), b.value && (k.value = {
        width: b.value.offsetWidth || 320,
        height: b.value.offsetHeight || 200
      }), o.value?.beforeShow && await o.value.beforeShow(), c("start"), c("step-change", o.value, i.value), o.value?.afterShow && o.value.afterShow());
    }, ie = async () => {
      o.value && t(o.value.id), o.value?.beforeHide && await o.value.beforeHide(), i.value < n.steps.length - 1 ? (i.value++, K(i.value), await j(), await ee(), o.value?.beforeShow && await o.value.beforeShow(), c("step-change", o.value, i.value), o.value?.afterShow && o.value.afterShow()) : me();
    }, ne = async () => {
      i.value > 0 && (o.value?.beforeHide && await o.value.beforeHide(), i.value--, K(i.value), await j(), await ee(), o.value?.beforeShow && await o.value.beforeShow(), c("step-change", o.value, i.value), o.value?.afterShow && o.value.afterShow());
    }, le = () => {
      r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), oe(), n.allowInteractions || document.body.classList.remove("tour-guide-active"), w.value = !1, r.value = null, L.value = null, x.value = null, Q.value = null, k.value = { width: 0, height: 0 }, T && clearTimeout(T), Y.value = !1, h(), c("skip");
    }, me = () => {
      o.value && t(o.value.id), r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), oe(), n.allowInteractions || document.body.classList.remove("tour-guide-active"), w.value = !1, r.value = null, L.value = null, x.value = null, Q.value = null, k.value = { width: 0, height: 0 }, T && clearTimeout(T), Y.value = !1, h(), c("complete");
    }, Pe = async (e) => {
      if (e >= 0 && e < n.steps.length) {
        for (let l = 0; l <= e; l++) {
          const a = n.steps[l];
          a && t(a.id);
        }
        i.value = e, K(i.value), await j(), await ee(), o.value?.beforeShow && await o.value.beforeShow(), c("step-change", o.value, i.value), o.value?.afterShow && o.value.afterShow();
      }
    };
    return be(() => {
      n.autoStart && ge();
    }), Oe(() => {
      T && clearTimeout(T), w.value && (oe(), n.allowInteractions || document.body.classList.remove("tour-guide-active"));
    }), re(
      () => i.value,
      async () => {
        w.value && await ee();
      }
    ), re(r, (e, l) => {
      l && oe(), e && w.value && ($(), fe());
    }), re(L, () => {
      w.value && $();
    }), re(
      b,
      (e) => {
        e && w.value && j(() => {
          k.value = {
            width: e.offsetWidth || 320,
            height: e.offsetHeight || 200
          }, M.value && M.value.observe(e);
        });
      },
      { immediate: !0 }
    ), s({
      startTourGuide: ge,
      skipTourGuide: le,
      completeTourGuide: me,
      nextStep: ie,
      previousStep: ne,
      goToStep: Pe,
      isActive: ve(w),
      currentStepIndex: ve(i)
    }), (e, l) => (f(), g("div", null, [
      w.value && r.value ? (f(), g("div", {
        key: 0,
        style: N([ye.value, O.value]),
        class: X(["vtg-cutout", { "vtg-animated": e.fluid && !Y.value }])
      }, null, 6)) : R("", !0),
      (f(), We(Me, { to: "body" }, [
        w.value && r.value ? (f(), g("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: b,
          style: N([Te.value, O.value]),
          class: X(["vtg-tooltip-anchor", { "vtg-animated": e.fluid && !Y.value }]),
          "data-tour-guide-interactive": "true"
        }, [
          Ee(qe, {
            visible: w.value,
            title: o.value?.title,
            content: o.value?.content,
            "allow-html": o.value?.allowHtml ?? e.allowHtml,
            direction: de.value,
            "current-step": i.value + 1,
            "total-steps": e.steps.length,
            "show-previous": i.value > 0,
            "show-close": e.allowSkip,
            "show-actions": o.value?.showAction,
            "arrow-offset": ce.value,
            onNext: ie,
            onPrevious: ne,
            onClose: le,
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
          }, Re({ _: 2 }, [
            e.$slots.default ? {
              name: "default",
              fn: V((a) => [
                C(e.$slots, "default", F(D({
                  ...a,
                  step: o.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "0"
            } : void 0,
            e.$slots.header ? {
              name: "header",
              fn: V((a) => [
                C(e.$slots, "header", F(D({
                  ...a,
                  step: o.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "1"
            } : void 0,
            e.$slots.content ? {
              name: "content",
              fn: V((a) => [
                C(e.$slots, "content", F(D({
                  ...a,
                  step: o.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "2"
            } : void 0,
            e.$slots["skip-button"] ? {
              name: "skip-button",
              fn: V((a) => [
                C(e.$slots, "skip-button", F(D({
                  ...a,
                  step: o.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length,
                  onSkip: le
                })))
              ]),
              key: "3"
            } : void 0,
            e.$slots.progress ? {
              name: "progress",
              fn: V((a) => [
                C(e.$slots, "progress", F(D({
                  ...a,
                  step: o.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "4"
            } : void 0,
            e.$slots.actions ? {
              name: "actions",
              fn: V((a) => [
                C(e.$slots, "actions", F(D({
                  ...a,
                  step: o.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length,
                  onNext: ie,
                  onPrevious: ne,
                  onSkip: le
                })))
              ]),
              key: "5"
            } : void 0,
            e.$slots["step-content"] ? {
              name: "step-content",
              fn: V((a) => [
                C(e.$slots, "step-content", F(D({
                  ...a,
                  step: o.value,
                  index: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "6"
            } : void 0
          ]), 1032, ["visible", "title", "content", "allow-html", "direction", "current-step", "total-steps", "show-previous", "show-close", "show-actions", "arrow-offset", "skipLabel", "nextLabel", "prevLabel", "finishLabel", "backgroundColor", "textColor", "borderRadius", "padding", "maxWidth", "minWidth", "boxShadow", "buttonBackgroundColor", "buttonTextColor", "buttonHoverColor", "skipButtonColor", "skipButtonHoverColor", "progressActiveColor", "progressInactiveColor", "tooltipClass", "headerClass", "contentClass", "actionsClass"])
        ], 6)) : R("", !0)
      ]))
    ]));
  }
});
export {
  Ue as TourGuideManager,
  qe as TourGuideTooltip,
  Je as useTourGuide
};
