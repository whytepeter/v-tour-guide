import { defineComponent as be, useCssVars as Ae, computed as L, createElementBlock as m, createCommentVNode as z, openBlock as f, normalizeStyle as F, normalizeClass as J, createElementVNode as K, renderSlot as S, toDisplayString as oe, Fragment as ve, createTextVNode as Ie, renderList as Ge, reactive as Me, onMounted as ye, readonly as de, ref as g, onUnmounted as Oe, watch as ie, nextTick as Q, createBlock as We, Teleport as Ee, createVNode as Re, createSlots as Ne, withCtx as q, normalizeProps as x, guardReactiveProps as D } from "vue";
const ze = { class: "vtg-stack" }, Fe = {
  key: 0,
  class: "vtg-title"
}, Ve = ["innerHTML"], Xe = {
  key: 1,
  class: "vtg-progress"
}, Ye = { class: "vtg-progress-track" }, qe = { class: "vtg-action-group" }, xe = /* @__PURE__ */ be({
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
  setup(G) {
    Ae((t) => ({
      "056587cd": s.skipButtonHoverColor,
      "75856eae": s.buttonHoverColor
    }));
    const s = G, M = L(() => s.currentStep >= s.totalSteps), n = L(() => (t) => {
      const w = t <= s.currentStep, $ = Math.abs(t - s.currentStep);
      if (w)
        return {
          backgroundColor: s.progressActiveColor,
          opacity: 1
        };
      {
        const h = Math.max(0.2, 1 - $ * 0.3);
        return {
          backgroundColor: s.progressInactiveColor,
          opacity: h
        };
      }
    }), V = L(() => {
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
    }), W = L(() => {
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
    }), d = L(() => {
      const t = {};
      if (s.backgroundColor?.includes("gradient") ? t.background = s.backgroundColor : t.backgroundColor = s.backgroundColor, s.direction === "top" || s.direction === "bottom") {
        if (s.arrowOffset !== 0) {
          const w = Math.max(-50, Math.min(50, s.arrowOffset));
          t.transform = `translateX(calc(-50% + ${w}px)) rotate(45deg)`;
        }
      } else if ((s.direction === "left" || s.direction === "right") && s.arrowOffset !== 0) {
        const w = Math.max(-50, Math.min(50, s.arrowOffset));
        t.transform = `translateY(calc(-50% + ${w}px)) rotate(45deg)`;
      }
      return t;
    }), C = L(() => ({
      backgroundColor: s.buttonBackgroundColor,
      color: s.buttonTextColor,
      "--hover-bg": s.buttonHoverColor
    })), c = L(() => ({
      color: s.skipButtonColor,
      "--hover-color": s.skipButtonHoverColor
    }));
    return (t, w) => t.visible ? (f(), m("div", {
      key: 0,
      class: J(["vtg-tooltip", "animate-in", s.tooltipClass]),
      style: F(V.value)
    }, [
      K("div", {
        class: J(["arrow-base", W.value]),
        style: F(d.value)
      }, null, 6),
      K("div", ze, [
        K("div", {
          class: J(["vtg-header", s.headerClass])
        }, [
          S(t.$slots, "header", {
            title: t.title,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, () => [
            t.title ? (f(), m("h3", Fe, oe(t.title), 1)) : z("", !0)
          ], !0),
          S(t.$slots, "skip-button", {
            skipLabel: t.skipLabel,
            onClose: () => t.$emit("close")
          }, () => [
            t.showClose ? (f(), m("button", {
              key: 0,
              type: "button",
              onClick: w[0] || (w[0] = ($) => t.$emit("close")),
              class: "custom-skip-btn",
              style: F(c.value)
            }, oe(t.skipLabel), 5)) : z("", !0)
          ], !0)
        ], 2),
        t.content || t.$slots.default || t.$slots.content ? (f(), m("div", {
          key: 0,
          class: J(["tour-guide-content", s.contentClass])
        }, [
          t.$slots.content ? S(t.$slots, "content", {
            key: 0,
            content: t.content,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, void 0, !0) : t.$slots.default ? S(t.$slots, "default", {
            key: 1,
            content: t.content,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, void 0, !0) : t.allowHtml ? (f(), m("span", {
            key: 2,
            innerHTML: t.content
          }, null, 8, Ve)) : (f(), m(ve, { key: 3 }, [
            Ie(oe(t.content), 1)
          ], 64))
        ], 2)) : z("", !0),
        t.showActions ? (f(), m("div", {
          key: 1,
          class: J(["vtg-actions", s.actionsClass])
        }, [
          t.$slots.progress ? S(t.$slots, "progress", {
            key: 0,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, void 0, !0) : (f(), m("div", Xe, [
            K("div", Ye, [
              (f(!0), m(ve, null, Ge(t.totalSteps, ($) => (f(), m("div", {
                key: $,
                class: "vtg-progress-dot",
                style: F(n.value($))
              }, null, 4))), 128))
            ])
          ])),
          K("div", qe, [
            t.$slots.actions ? S(t.$slots, "actions", {
              key: 0,
              showPrevious: t.showPrevious,
              isLastStep: M.value,
              prevLabel: t.prevLabel,
              nextLabel: t.nextLabel,
              finishLabel: t.finishLabel,
              onPrevious: () => t.$emit("previous"),
              onNext: () => t.$emit("next")
            }, void 0, !0) : (f(), m(ve, { key: 1 }, [
              t.showPrevious ? (f(), m("button", {
                key: 0,
                type: "button",
                onClick: w[1] || (w[1] = ($) => t.$emit("previous")),
                class: "custom-action-btn",
                style: F(C.value)
              }, oe(t.prevLabel), 5)) : z("", !0),
              K("button", {
                type: "button",
                onClick: w[2] || (w[2] = ($) => t.$emit("next")),
                class: "custom-action-btn",
                style: F(C.value)
              }, oe(M.value ? t.finishLabel : t.nextLabel), 5)
            ], 64))
          ])
        ], 2)) : z("", !0)
      ])
    ], 6)) : z("", !0);
  }
}), De = (G, s) => {
  const M = G.__vccOpts || G;
  for (const [n, V] of s)
    M[n] = V;
  return M;
}, Je = /* @__PURE__ */ De(xe, [["__scopeId", "data-v-11b0bda2"]]), p = Me({
  isActive: !1,
  currentStep: 0,
  completedSteps: [],
  hasSeenTourGuide: !1
}), je = () => {
  const G = () => {
    if (typeof window < "u") {
      const c = localStorage.getItem("tour-guide-state");
      if (c) {
        const t = JSON.parse(c);
        Object.assign(p, t);
      }
    }
  }, s = () => {
    typeof window < "u" && localStorage.setItem("tour-guide-state", JSON.stringify(p));
  }, M = (c) => {
    p.isActive = !0, p.currentStep = 0, p.completedSteps = [], s();
  }, n = (c) => {
    p.completedSteps.includes(c) || (p.completedSteps.push(c), s());
  }, V = (c) => {
    p.currentStep = c, s();
  }, W = () => {
    p.isActive = !1, p.hasSeenTourGuide = !0, s();
  }, d = () => {
    p.isActive = !1, p.currentStep = 0, p.completedSteps = [], p.hasSeenTourGuide = !1, s();
  }, C = (c) => p.completedSteps.includes(c);
  return ye(() => {
    G();
  }), {
    // State
    tourGuideState: de(p),
    // Actions
    startTourGuide: M,
    completeStep: n,
    updateCurrentStep: V,
    finishTourGuide: W,
    resetTourGuide: d,
    isStepCompleted: C,
    // Helpers
    loadTourGuideState: G,
    saveTourGuideState: s
  };
}, Ke = /* @__PURE__ */ be({
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
    animate: { type: Boolean, default: !0 },
    fluid: { type: Boolean, default: !1 },
    tooltip: {}
  },
  emits: ["start", "complete", "skip", "step-change"],
  setup(G, { expose: s, emit: M }) {
    const n = G, V = {
      skip: "Skip",
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    }, W = L(() => ({
      ...V,
      ...n.labels
    })), d = L(() => {
      const e = n.tooltip || {}, o = l.value?.tooltip || {};
      return {
        ...e,
        ...o
      };
    }), C = M, {
      completeStep: c,
      finishTourGuide: t,
      startTourGuide: w,
      updateCurrentStep: $
    } = je(), h = g(!1), i = g(0), j = g(!1);
    let k = null;
    const E = g(!1);
    let P = null;
    const r = g(null), B = g(null), b = g(), X = g(null), Z = g(null), T = g({
      width: 0,
      height: 0
    }), ce = g("bottom"), pe = g(0), _ = g(null), ee = g(null), R = g(null), l = L(() => n.steps[i.value]), Se = L(() => {
      if (!r.value || !l.value || !X.value)
        return {};
      const e = X.value, o = n.highlightPadding, a = l.value.radius ?? 8, u = e.top - o, y = e.left - o, O = e.width + o * 2, v = e.height + o * 2;
      return {
        top: `${u}px`,
        left: `${y}px`,
        width: `${O}px`,
        height: `${v}px`,
        borderRadius: `${a}px`,
        zIndex: 9998,
        // Massive box-shadow creates the dimming overlay around the cut-out
        boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)"
      };
    }), Ce = (e) => {
      const o = {
        width: window.innerWidth,
        height: window.innerHeight
      }, a = n.viewportMargin;
      return {
        top: e.top - a,
        bottom: o.height - e.bottom - a,
        left: e.left - a,
        right: o.width - e.right - a
      };
    }, ke = (e, o, a) => {
      const u = Ce(e);
      if (a && {
        top: u.top >= o.height,
        bottom: u.bottom >= o.height,
        left: u.left >= o.width,
        right: u.right >= o.width
      }[a])
        return a;
      const y = [
        {
          name: "bottom",
          space: u.bottom,
          needed: o.height
        },
        { name: "top", space: u.top, needed: o.height },
        { name: "right", space: u.right, needed: o.width },
        { name: "left", space: u.left, needed: o.width }
      ], O = y.filter((v) => v.space >= v.needed);
      return O.length > 0 ? O.sort((v, Y) => Y.space - v.space)[0].name : y.sort((v, Y) => Y.space - v.space)[0].name;
    }, Te = (e, o, a) => {
      if (a === "top" || a === "bottom") {
        const u = e.left + e.width / 2, y = o.left + o.width / 2;
        return u - y;
      } else {
        const u = e.top + e.height / 2, y = o.top + o.height / 2;
        return u - y;
      }
    }, Le = L(() => {
      if (!l.value) return {};
      const e = B.value || r.value, o = Z.value || X.value;
      if (!e || !o) return {};
      const a = o, u = l.value.direction, y = l.value.offsetX || 0, O = l.value.offsetY || 0, v = T.value.width > 0 ? T.value : { width: 320, height: 200 }, Y = ke(
        a,
        v,
        u
      );
      ce.value = Y;
      let A = 0, I = 0;
      const se = 12;
      switch (Y) {
        case "top":
          A = a.top - v.height - se + O, I = a.left + a.width / 2 - v.width / 2 + y;
          break;
        case "bottom":
          A = a.bottom + se + O, I = a.left + a.width / 2 - v.width / 2 + y;
          break;
        case "left":
          A = a.top + a.height / 2 - v.height / 2 + O, I = a.left - v.width - se + y;
          break;
        case "right":
          A = a.top + a.height / 2 - v.height / 2 + O, I = a.right + se + y;
          break;
      }
      const re = {
        width: window.innerWidth,
        height: window.innerHeight
      }, N = n.viewportMargin;
      I < N ? I = N : I + v.width > re.width - N && (I = re.width - v.width - N), A < N ? A = N : A + v.height > re.height - N && (A = re.height - v.height - N);
      const He = {
        left: I,
        top: A,
        width: v.width,
        height: v.height
      };
      return pe.value = Te(
        a,
        He,
        Y
      ), {
        top: `${A}px`,
        left: `${I}px`,
        zIndex: 9999,
        transform: "none"
        // We handle positioning directly now
      };
    }), H = () => {
      if (r.value) {
        const e = r.value.getBoundingClientRect(), o = X.value;
        (!o || o.top !== e.top || o.left !== e.left || o.width !== e.width || o.height !== e.height) && (X.value = e);
      }
      if (B.value) {
        const e = B.value.getBoundingClientRect(), o = Z.value;
        (!o || o.top !== e.top || o.left !== e.left || o.width !== e.width || o.height !== e.height) && (Z.value = e);
      }
      if (b.value) {
        const e = {
          width: b.value.offsetWidth,
          height: b.value.offsetHeight
        };
        (T.value.width !== e.width || T.value.height !== e.height) && (T.value = e);
      }
    }, U = () => {
      n.fluid && (E.value = !0, P && clearTimeout(P), P = setTimeout(() => {
        E.value = !1, P = null;
      }, 120)), H();
    }, $e = () => {
      if (!n.trackAnimations) return;
      const e = () => {
        h.value && r.value && (H(), _.value = requestAnimationFrame(e));
      };
      _.value = requestAnimationFrame(e);
    }, Pe = () => {
      _.value && (cancelAnimationFrame(_.value), _.value = null);
    }, fe = (e) => {
      const o = [];
      let a = e.parentElement;
      for (; a && a !== document.body; ) {
        const u = window.getComputedStyle(a);
        (u.overflow === "auto" || u.overflow === "scroll" || u.overflowY === "auto" || u.overflowY === "scroll" || u.overflowX === "auto" || u.overflowX === "scroll") && o.push(a), a = a.parentElement;
      }
      return o;
    }, he = () => {
      if (!r.value) return;
      window.addEventListener("scroll", U, { passive: !0 }), document.addEventListener("scroll", U, { passive: !0 }), window.addEventListener("resize", H, { passive: !0 }), fe(r.value).forEach((o) => {
        o.addEventListener("scroll", U, { passive: !0 });
      }), $e(), ee.value = new MutationObserver(() => {
        H();
      }), ee.value.observe(document.body, {
        childList: !0,
        // Child element additions/removals
        subtree: !0,
        // Monitor entire document tree
        attributes: !0,
        // Attribute changes
        attributeFilter: ["style", "class"]
        // Focus on styling changes
      }), typeof ResizeObserver < "u" && (R.value = new ResizeObserver(() => {
        H();
      }), R.value.observe(r.value), b.value && R.value.observe(b.value));
    }, le = () => {
      window.removeEventListener("scroll", U), document.removeEventListener("scroll", U), window.removeEventListener("resize", H), r.value && fe(r.value).forEach((o) => {
        o.removeEventListener("scroll", U);
      }), Pe(), ee.value && (ee.value.disconnect(), ee.value = null), R.value && (R.value.disconnect(), R.value = null);
    }, ge = (e) => {
      let o = document.querySelector(e);
      return o || (o = document.querySelector(
        `[data-tour-guide="${e}"]`
      )), o;
    }, te = async () => {
      if (!l.value) return;
      const e = n.animate && !!r.value;
      if (e && (k && clearTimeout(k), j.value = !0), r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), r.value = ge(l.value.target), !r.value) {
        console.warn(
          `Tour Guide: Target element "${l.value.target}" not found`
        );
        return;
      }
      l.value.tooltipTarget ? (B.value = ge(
        l.value.tooltipTarget
      ), B.value || (console.warn(
        `Tour Guide: Tooltip target element "${l.value.tooltipTarget}" not found, falling back to main target`
      ), B.value = null)) : B.value = null, n.scrollToView && (r.value.scrollIntoView({
        behavior: "smooth",
        // Smooth animation
        block: "center",
        // Center vertically in viewport
        inline: "nearest"
        // Minimal horizontal scrolling
      }), await new Promise((o) => setTimeout(o, 500))), r.value.style.position = "relative", r.value.style.zIndex = "9997", r.value.style.borderRadius = "8px", r.value.style.isolation = "isolate", r.value.setAttribute("data-tour-guide-interactive", "true"), H(), await Q(), b.value ? T.value = {
        width: b.value.offsetWidth || 320,
        // fallback width
        height: b.value.offsetHeight || 200
        // fallback height
      } : T.value = { width: 320, height: 200 }, H(), e && (k && clearTimeout(k), k = setTimeout(() => {
        j.value = !1, k = null;
      }, 320));
    }, me = async () => {
      n.steps.length !== 0 && (h.value = !0, i.value = 0, w(), n.allowInteractions || document.body.classList.add("tour-guide-active"), await Q(), await te(), T.value = { width: 320, height: 200 }, he(), await new Promise((e) => setTimeout(e, 100)), b.value && (T.value = {
        width: b.value.offsetWidth || 320,
        height: b.value.offsetHeight || 200
      }), l.value?.beforeShow && await l.value.beforeShow(), C("start"), C("step-change", l.value, i.value), l.value?.afterShow && l.value.afterShow());
    }, ne = async () => {
      l.value && c(l.value.id), l.value?.beforeHide && await l.value.beforeHide(), i.value < n.steps.length - 1 ? (i.value++, $(i.value), await Q(), await te(), l.value?.beforeShow && await l.value.beforeShow(), C("step-change", l.value, i.value), l.value?.afterShow && l.value.afterShow()) : we();
    }, ue = async () => {
      i.value > 0 && (l.value?.beforeHide && await l.value.beforeHide(), i.value--, $(i.value), await Q(), await te(), l.value?.beforeShow && await l.value.beforeShow(), C("step-change", l.value, i.value), l.value?.afterShow && l.value.afterShow());
    }, ae = () => {
      r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), le(), n.allowInteractions || document.body.classList.remove("tour-guide-active"), h.value = !1, r.value = null, B.value = null, X.value = null, Z.value = null, T.value = { width: 0, height: 0 }, k && clearTimeout(k), j.value = !1, P && clearTimeout(P), E.value = !1, t(), C("skip");
    }, we = () => {
      l.value && c(l.value.id), r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), le(), n.allowInteractions || document.body.classList.remove("tour-guide-active"), h.value = !1, r.value = null, B.value = null, X.value = null, Z.value = null, T.value = { width: 0, height: 0 }, k && clearTimeout(k), j.value = !1, P && clearTimeout(P), E.value = !1, t(), C("complete");
    }, Be = async (e) => {
      if (e >= 0 && e < n.steps.length) {
        for (let o = 0; o <= e; o++) {
          const a = n.steps[o];
          a && c(a.id);
        }
        i.value = e, $(i.value), await Q(), await te(), l.value?.beforeShow && await l.value.beforeShow(), C("step-change", l.value, i.value), l.value?.afterShow && l.value.afterShow();
      }
    };
    return ye(() => {
      n.autoStart && me();
    }), Oe(() => {
      k && clearTimeout(k), P && clearTimeout(P), h.value && (le(), n.allowInteractions || document.body.classList.remove("tour-guide-active"));
    }), ie(
      () => i.value,
      async () => {
        h.value && await te();
      }
    ), ie(r, (e, o) => {
      o && le(), e && h.value && (H(), he());
    }), ie(B, () => {
      h.value && H();
    }), ie(
      b,
      (e) => {
        e && h.value && Q(() => {
          T.value = {
            width: e.offsetWidth || 320,
            height: e.offsetHeight || 200
          }, R.value && R.value.observe(e);
        });
      },
      { immediate: !0 }
    ), s({
      startTourGuide: me,
      skipTourGuide: ae,
      completeTourGuide: we,
      nextStep: ne,
      previousStep: ue,
      goToStep: Be,
      isActive: de(h),
      currentStepIndex: de(i)
    }), (e, o) => (f(), m("div", null, [
      h.value && r.value ? (f(), m("div", {
        key: 0,
        style: F(Se.value),
        class: J(["vtg-cutout", {
          "vtg-animated": e.animate && (j.value || e.fluid && !E.value),
          "vtg-fluid": e.animate && e.fluid && !E.value
        }])
      }, null, 6)) : z("", !0),
      (f(), We(Ee, { to: "body" }, [
        h.value && r.value ? (f(), m("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: b,
          style: F(Le.value),
          class: J(["vtg-tooltip-anchor", {
            "vtg-animated": e.animate && (j.value || e.fluid && !E.value),
            "vtg-fluid": e.animate && e.fluid && !E.value
          }]),
          "data-tour-guide-interactive": "true"
        }, [
          Re(Je, {
            visible: h.value,
            title: l.value?.title,
            content: l.value?.content,
            "allow-html": l.value?.allowHtml ?? e.allowHtml,
            direction: ce.value,
            "current-step": i.value + 1,
            "total-steps": e.steps.length,
            "show-previous": i.value > 0,
            "show-close": e.allowSkip,
            "show-actions": l.value?.showAction,
            "arrow-offset": pe.value,
            onNext: ne,
            onPrevious: ue,
            onClose: ae,
            skipLabel: l.value?.skipLabel || W.value.skip,
            nextLabel: l.value?.nextLabel || W.value.next,
            prevLabel: l.value?.prevLabel || W.value.previous,
            finishLabel: l.value?.finishLabel || W.value.finish,
            backgroundColor: d.value.backgroundColor,
            textColor: d.value.textColor,
            borderRadius: d.value.borderRadius,
            padding: d.value.padding,
            maxWidth: d.value.maxWidth,
            minWidth: d.value.minWidth,
            boxShadow: d.value.boxShadow,
            buttonBackgroundColor: d.value.buttonBackgroundColor,
            buttonTextColor: d.value.buttonTextColor,
            buttonHoverColor: d.value.buttonHoverColor,
            skipButtonColor: d.value.skipButtonColor,
            skipButtonHoverColor: d.value.skipButtonHoverColor,
            progressActiveColor: d.value.progressActiveColor,
            progressInactiveColor: d.value.progressInactiveColor,
            tooltipClass: d.value.tooltipClass,
            headerClass: d.value.headerClass,
            contentClass: d.value.contentClass,
            actionsClass: d.value.actionsClass
          }, Ne({ _: 2 }, [
            e.$slots.default ? {
              name: "default",
              fn: q((a) => [
                S(e.$slots, "default", x(D({
                  ...a,
                  step: l.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "0"
            } : void 0,
            e.$slots.header ? {
              name: "header",
              fn: q((a) => [
                S(e.$slots, "header", x(D({
                  ...a,
                  step: l.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "1"
            } : void 0,
            e.$slots.content ? {
              name: "content",
              fn: q((a) => [
                S(e.$slots, "content", x(D({
                  ...a,
                  step: l.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "2"
            } : void 0,
            e.$slots["skip-button"] ? {
              name: "skip-button",
              fn: q((a) => [
                S(e.$slots, "skip-button", x(D({
                  ...a,
                  step: l.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length,
                  onSkip: ae
                })))
              ]),
              key: "3"
            } : void 0,
            e.$slots.progress ? {
              name: "progress",
              fn: q((a) => [
                S(e.$slots, "progress", x(D({
                  ...a,
                  step: l.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "4"
            } : void 0,
            e.$slots.actions ? {
              name: "actions",
              fn: q((a) => [
                S(e.$slots, "actions", x(D({
                  ...a,
                  step: l.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length,
                  onNext: ne,
                  onPrevious: ue,
                  onSkip: ae
                })))
              ]),
              key: "5"
            } : void 0,
            e.$slots["step-content"] ? {
              name: "step-content",
              fn: q((a) => [
                S(e.$slots, "step-content", x(D({
                  ...a,
                  step: l.value,
                  index: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "6"
            } : void 0
          ]), 1032, ["visible", "title", "content", "allow-html", "direction", "current-step", "total-steps", "show-previous", "show-close", "show-actions", "arrow-offset", "skipLabel", "nextLabel", "prevLabel", "finishLabel", "backgroundColor", "textColor", "borderRadius", "padding", "maxWidth", "minWidth", "boxShadow", "buttonBackgroundColor", "buttonTextColor", "buttonHoverColor", "skipButtonColor", "skipButtonHoverColor", "progressActiveColor", "progressInactiveColor", "tooltipClass", "headerClass", "contentClass", "actionsClass"])
        ], 6)) : z("", !0)
      ]))
    ]));
  }
});
export {
  Ke as TourGuideManager,
  Je as TourGuideTooltip,
  je as useTourGuide
};
