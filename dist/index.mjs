import { defineComponent as fe, useCssVars as Le, computed as L, createElementBlock as b, createCommentVNode as W, openBlock as m, normalizeStyle as E, normalizeClass as Y, createElementVNode as q, renderSlot as $, toDisplayString as Q, Fragment as se, createTextVNode as $e, renderList as Pe, reactive as xe, onMounted as he, readonly as re, ref as C, onUnmounted as Be, watch as oe, nextTick as D, createBlock as Ae, Teleport as Ie, createVNode as He, createSlots as Ge, withCtx as F, normalizeProps as V, guardReactiveProps as X } from "vue";
const Oe = {
  class: "relative space-y-2",
  style: { padding: "0" }
}, Me = {
  key: 0,
  class: "font-medium leading-tight flex-1 min-w-0"
}, We = {
  key: 1,
  class: "flex items-center flex-1"
}, Ee = { class: "flex items-center gap-1 pr-2 py-1 rounded-full" }, Re = { class: "flex items-center gap-1.5 flex-shrink-0" }, ze = /* @__PURE__ */ fe({
  __name: "TourGuideTooltip",
  props: {
    visible: { type: Boolean, default: !0 },
    title: {},
    content: {},
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
  setup(A) {
    Le((t) => ({
      f7aa20b4: s.skipButtonHoverColor,
      "5862ab07": s.buttonHoverColor
    }));
    const s = A, I = L(() => s.currentStep >= s.totalSteps), d = L(() => (t) => {
      const p = t <= s.currentStep, h = Math.abs(t - s.currentStep);
      if (p)
        return {
          backgroundColor: s.progressActiveColor,
          opacity: 1
        };
      {
        const g = Math.max(0.2, 1 - h * 0.3);
        return {
          backgroundColor: s.progressInactiveColor,
          opacity: g
        };
      }
    }), R = L(() => {
      const t = Math.max(
        (s.title?.length || 0) * 7 + 50,
        // title width + padding
        (s.content?.length || 0) * 5 + 50,
        // content width + padding
        250
        // minimum width
      ), p = Math.min(t, 350), h = {};
      return s.backgroundColor?.includes("gradient") ? h.background = s.backgroundColor : h.backgroundColor = s.backgroundColor, {
        ...h,
        color: s.textColor,
        borderRadius: s.borderRadius,
        padding: s.padding,
        width: `${p}px`,
        minWidth: s.minWidth,
        maxWidth: s.maxWidth,
        boxShadow: s.boxShadow
      };
    }), G = L(() => {
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
    }), v = L(() => {
      const t = {};
      if (s.backgroundColor?.includes("gradient") ? t.background = s.backgroundColor : t.backgroundColor = s.backgroundColor, s.direction === "top" || s.direction === "bottom") {
        if (s.arrowOffset !== 0) {
          const p = Math.max(-50, Math.min(50, s.arrowOffset));
          t.transform = `translateX(calc(-50% + ${p}px)) rotate(45deg)`;
        }
      } else if ((s.direction === "left" || s.direction === "right") && s.arrowOffset !== 0) {
        const p = Math.max(-50, Math.min(50, s.arrowOffset));
        t.transform = `translateY(calc(-50% + ${p}px)) rotate(45deg)`;
      }
      return t;
    }), k = L(() => ({
      backgroundColor: s.buttonBackgroundColor,
      color: s.buttonTextColor,
      "--hover-bg": s.buttonHoverColor
    })), c = L(() => ({
      color: s.skipButtonColor,
      "--hover-color": s.skipButtonHoverColor
    }));
    return (t, p) => t.visible ? (m(), b("div", {
      key: 0,
      class: Y([
        "relative z-50 text-sm",
        "animate-in fade-in-0 zoom-in-95 duration-200",
        s.tooltipClass
      ]),
      style: E(R.value)
    }, [
      q("div", {
        class: Y(["arrow-base", G.value]),
        style: E(v.value)
      }, null, 6),
      q("div", Oe, [
        q("div", {
          class: Y(["flex items-start justify-between gap-3 ", s.headerClass])
        }, [
          $(t.$slots, "header", {
            title: t.title,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, () => [
            t.title ? (m(), b("h3", Me, Q(t.title), 1)) : W("", !0)
          ], !0),
          $(t.$slots, "skip-button", {
            skipLabel: t.skipLabel,
            onClose: () => t.$emit("close")
          }, () => [
            t.showClose || t.currentStep === 1 ? (m(), b("button", {
              key: 0,
              type: "button",
              onClick: p[0] || (p[0] = (h) => t.$emit("close")),
              class: "underline text-sm transition-colors flex-shrink-0 custom-skip-btn",
              style: E(c.value)
            }, Q(t.skipLabel), 5)) : W("", !0)
          ], !0)
        ], 2),
        t.content || t.$slots.default ? (m(), b("div", {
          key: 0,
          class: Y([
            "opacity-90 font-thin leading-4 break-words",
            s.contentClass
          ])
        }, [
          t.$slots.default ? $(t.$slots, "default", {
            key: 0,
            content: t.content,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, void 0, !0) : (m(), b(se, { key: 1 }, [
            $e(Q(t.content), 1)
          ], 64))
        ], 2)) : W("", !0),
        t.showActions ? (m(), b("div", {
          key: 1,
          class: Y(["flex items-center justify-between gap-2", s.actionsClass])
        }, [
          t.$slots.progress ? $(t.$slots, "progress", {
            key: 0,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, void 0, !0) : (m(), b("div", We, [
            q("div", Ee, [
              (m(!0), b(se, null, Pe(t.totalSteps, (h) => (m(), b("div", {
                key: h,
                class: Y(["w-1.5 h-1.5 rounded-full transition-all duration-300"]),
                style: E(d.value(h))
              }, null, 4))), 128))
            ])
          ])),
          q("div", Re, [
            t.$slots.actions ? $(t.$slots, "actions", {
              key: 0,
              showPrevious: t.showPrevious,
              isLastStep: I.value,
              prevLabel: t.prevLabel,
              nextLabel: t.nextLabel,
              finishLabel: t.finishLabel,
              onPrevious: () => t.$emit("previous"),
              onNext: () => t.$emit("next")
            }, void 0, !0) : (m(), b(se, { key: 1 }, [
              t.showPrevious ? (m(), b("button", {
                key: 0,
                type: "button",
                onClick: p[1] || (p[1] = (h) => t.$emit("previous")),
                class: "text-xs px-2 py-1 rounded-md transition-colors flex-shrink-0 custom-action-btn whitespace-nowrap",
                style: E(k.value)
              }, Q(t.prevLabel), 5)) : W("", !0),
              q("button", {
                type: "button",
                onClick: p[2] || (p[2] = (h) => t.$emit("next")),
                class: "text-xs px-2 py-1 rounded-md transition-colors flex-shrink-0 custom-action-btn whitespace-nowrap",
                style: E(k.value)
              }, Q(I.value ? t.finishLabel : t.nextLabel), 5)
            ], 64))
          ])
        ], 2)) : W("", !0)
      ])
    ], 6)) : W("", !0);
  }
}), Ne = (A, s) => {
  const I = A.__vccOpts || A;
  for (const [d, R] of s)
    I[d] = R;
  return I;
}, Fe = /* @__PURE__ */ Ne(ze, [["__scopeId", "data-v-d62e1b15"]]), f = xe({
  isActive: !1,
  currentStep: 0,
  completedSteps: [],
  hasSeenTourGuide: !1
}), Ve = () => {
  const A = () => {
    if (typeof window < "u") {
      const c = localStorage.getItem("tour-guide-state");
      if (c) {
        const t = JSON.parse(c);
        Object.assign(f, t);
      }
    }
  }, s = () => {
    typeof window < "u" && localStorage.setItem("tour-guide-state", JSON.stringify(f));
  }, I = (c) => {
    f.isActive = !0, f.currentStep = 0, f.completedSteps = [], s();
  }, d = (c) => {
    f.completedSteps.includes(c) || (f.completedSteps.push(c), s());
  }, R = (c) => {
    f.currentStep = c, s();
  }, G = () => {
    f.isActive = !1, f.hasSeenTourGuide = !0, s();
  }, v = () => {
    f.isActive = !1, f.currentStep = 0, f.completedSteps = [], f.hasSeenTourGuide = !1, s();
  }, k = (c) => f.completedSteps.includes(c);
  return he(() => {
    A();
  }), {
    // State
    tourGuideState: re(f),
    // Actions
    startTourGuide: I,
    completeStep: d,
    updateCurrentStep: R,
    finishTourGuide: G,
    resetTourGuide: v,
    isStepCompleted: k,
    // Helpers
    loadTourGuideState: A,
    saveTourGuideState: s
  };
}, Ye = /* @__PURE__ */ fe({
  __name: "TourManager",
  props: {
    steps: {},
    autoStart: { type: Boolean, default: !1 },
    showOverlay: { type: Boolean, default: !0 },
    allowSkip: { type: Boolean, default: !0 },
    highlightPadding: { default: 4 },
    labels: {},
    allowInteractions: { type: Boolean, default: !1 },
    viewportMargin: { default: 16 },
    scrollToView: { type: Boolean, default: !0 },
    tooltip: {}
  },
  emits: ["start", "complete", "skip", "step-change"],
  setup(A, { expose: s, emit: I }) {
    const d = A, R = {
      skip: "Skip",
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    }, G = L(() => ({
      ...R,
      ...d.labels
    })), v = L(() => {
      const e = d.tooltip || {}, o = l.value?.tooltip || {};
      return {
        ...e,
        ...o
      };
    }), k = I, {
      completeStep: c,
      finishTourGuide: t,
      startTourGuide: p,
      updateCurrentStep: h
    } = Ve(), g = C(!1), i = C(0), r = C(null), P = C(null), y = C(), z = C(null), j = C(null), T = C({
      width: 0,
      height: 0
    }), ie = C("bottom"), ne = C(0), J = C(null), U = C(null), O = C(null), l = L(() => d.steps[i.value]), ge = L(() => {
      if (!r.value || !l.value || !z.value)
        return {};
      const e = z.value, o = d.highlightPadding, a = l.value.radius ?? 8, n = e.top - o, S = e.left - o, H = e.width + o * 2, u = e.height + o * 2;
      return {
        top: `${n}px`,
        left: `${S}px`,
        width: `${H}px`,
        height: `${u}px`,
        borderRadius: `${a}px`,
        zIndex: 9998,
        // Massive box-shadow creates the dimming overlay around the cut-out
        boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)"
      };
    }), we = (e) => {
      const o = {
        width: window.innerWidth,
        height: window.innerHeight
      }, a = d.viewportMargin;
      return {
        top: e.top - a,
        bottom: o.height - e.bottom - a,
        left: e.left - a,
        right: o.width - e.right - a
      };
    }, me = (e, o, a) => {
      const n = we(e);
      if (a && {
        top: n.top >= o.height,
        bottom: n.bottom >= o.height,
        left: n.left >= o.width,
        right: n.right >= o.width
      }[a])
        return a;
      const S = [
        {
          name: "bottom",
          space: n.bottom,
          needed: o.height
        },
        { name: "top", space: n.top, needed: o.height },
        { name: "right", space: n.right, needed: o.width },
        { name: "left", space: n.left, needed: o.width }
      ], H = S.filter((u) => u.space >= u.needed);
      return H.length > 0 ? H.sort((u, N) => N.space - u.space)[0].name : S.sort((u, N) => N.space - u.space)[0].name;
    }, be = (e, o, a) => {
      if (a === "top" || a === "bottom") {
        const n = e.left + e.width / 2, S = o.left + o.width / 2;
        return n - S;
      } else {
        const n = e.top + e.height / 2, S = o.top + o.height / 2;
        return n - S;
      }
    }, ye = L(() => {
      if (!l.value) return {};
      const e = P.value || r.value, o = j.value || z.value;
      if (!e || !o) return {};
      const a = o, n = l.value.direction, S = l.value.offsetX || 0, H = l.value.offsetY || 0, u = T.value.width > 0 ? T.value : { width: 320, height: 200 }, N = me(
        a,
        u,
        n
      );
      ie.value = N;
      let x = 0, B = 0;
      const ee = 12;
      switch (N) {
        case "top":
          x = a.top - u.height - ee + H, B = a.left + a.width / 2 - u.width / 2 + S;
          break;
        case "bottom":
          x = a.bottom + ee + H, B = a.left + a.width / 2 - u.width / 2 + S;
          break;
        case "left":
          x = a.top + a.height / 2 - u.height / 2 + H, B = a.left - u.width - ee + S;
          break;
        case "right":
          x = a.top + a.height / 2 - u.height / 2 + H, B = a.right + ee + S;
          break;
      }
      const te = {
        width: window.innerWidth,
        height: window.innerHeight
      }, M = d.viewportMargin;
      B < M ? B = M : B + u.width > te.width - M && (B = te.width - u.width - M), x < M ? x = M : x + u.height > te.height - M && (x = te.height - u.height - M);
      const Te = {
        left: B,
        top: x,
        width: u.width,
        height: u.height
      };
      return ne.value = be(
        a,
        Te,
        N
      ), {
        top: `${x}px`,
        left: `${B}px`,
        zIndex: 9999,
        transform: "none"
        // We handle positioning directly now
      };
    }), w = () => {
      if (r.value) {
        const e = r.value.getBoundingClientRect(), o = z.value;
        (!o || o.top !== e.top || o.left !== e.left || o.width !== e.width || o.height !== e.height) && (z.value = e);
      }
      if (P.value) {
        const e = P.value.getBoundingClientRect(), o = j.value;
        (!o || o.top !== e.top || o.left !== e.left || o.width !== e.width || o.height !== e.height) && (j.value = e);
      }
      if (y.value) {
        const e = {
          width: y.value.offsetWidth,
          height: y.value.offsetHeight
        };
        (T.value.width !== e.width || T.value.height !== e.height) && (T.value = e);
      }
    }, Se = () => {
      const e = () => {
        g.value && r.value && (w(), J.value = requestAnimationFrame(e));
      };
      J.value = requestAnimationFrame(e);
    }, Ce = () => {
      J.value && (cancelAnimationFrame(J.value), J.value = null);
    }, ue = (e) => {
      const o = [];
      let a = e.parentElement;
      for (; a && a !== document.body; ) {
        const n = window.getComputedStyle(a);
        (n.overflow === "auto" || n.overflow === "scroll" || n.overflowY === "auto" || n.overflowY === "scroll" || n.overflowX === "auto" || n.overflowX === "scroll") && o.push(a), a = a.parentElement;
      }
      return o;
    }, de = () => {
      if (!r.value) return;
      window.addEventListener("scroll", w, { passive: !0 }), document.addEventListener("scroll", w, { passive: !0 }), window.addEventListener("resize", w, { passive: !0 }), ue(r.value).forEach((o) => {
        o.addEventListener("scroll", w, { passive: !0 });
      }), Se(), U.value = new MutationObserver(() => {
        w();
      }), U.value.observe(document.body, {
        childList: !0,
        // Child element additions/removals
        subtree: !0,
        // Monitor entire document tree
        attributes: !0,
        // Attribute changes
        attributeFilter: ["style", "class"]
        // Focus on styling changes
      }), typeof ResizeObserver < "u" && (O.value = new ResizeObserver(() => {
        w();
      }), O.value.observe(r.value), y.value && O.value.observe(y.value));
    }, Z = () => {
      window.removeEventListener("scroll", w), document.removeEventListener("scroll", w), window.removeEventListener("resize", w), r.value && ue(r.value).forEach((o) => {
        o.removeEventListener("scroll", w);
      }), Ce(), U.value && (U.value.disconnect(), U.value = null), O.value && (O.value.disconnect(), O.value = null);
    }, ve = (e) => {
      let o = document.querySelector(e);
      return o || (o = document.querySelector(
        `[data-tour-guide="${e}"]`
      )), o;
    }, K = async () => {
      if (l.value) {
        if (r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), r.value = ve(l.value.target), !r.value) {
          console.warn(
            `Tour Guide: Target element "${l.value.target}" not found`
          );
          return;
        }
        l.value.tooltipTarget ? (P.value = ve(
          l.value.tooltipTarget
        ), P.value || (console.warn(
          `Tour Guide: Tooltip target element "${l.value.tooltipTarget}" not found, falling back to main target`
        ), P.value = null)) : P.value = null, d.scrollToView && (r.value.scrollIntoView({
          behavior: "smooth",
          // Smooth animation
          block: "center",
          // Center vertically in viewport
          inline: "nearest"
          // Minimal horizontal scrolling
        }), await new Promise((e) => setTimeout(e, 500))), r.value.style.position = "relative", r.value.style.zIndex = "9997", r.value.style.borderRadius = "8px", r.value.style.isolation = "isolate", r.value.setAttribute("data-tour-guide-interactive", "true"), w(), await D(), y.value ? T.value = {
          width: y.value.offsetWidth || 320,
          // fallback width
          height: y.value.offsetHeight || 200
          // fallback height
        } : T.value = { width: 320, height: 200 }, w();
      }
    }, ce = async () => {
      d.steps.length !== 0 && (g.value = !0, i.value = 0, p(), d.allowInteractions || document.body.classList.add("tour-guide-active"), await D(), await K(), T.value = { width: 320, height: 200 }, de(), await new Promise((e) => setTimeout(e, 100)), y.value && (T.value = {
        width: y.value.offsetWidth || 320,
        height: y.value.offsetHeight || 200
      }), l.value?.beforeShow && await l.value.beforeShow(), k("start"), k("step-change", l.value, i.value), l.value?.afterShow && l.value.afterShow());
    }, le = async () => {
      l.value && c(l.value.id), l.value?.beforeHide && await l.value.beforeHide(), i.value < d.steps.length - 1 ? (i.value++, h(i.value), await D(), await K(), l.value?.beforeShow && await l.value.beforeShow(), k("step-change", l.value, i.value), l.value?.afterShow && l.value.afterShow()) : pe();
    }, ae = async () => {
      i.value > 0 && (l.value?.beforeHide && await l.value.beforeHide(), i.value--, h(i.value), await D(), await K(), l.value?.beforeShow && await l.value.beforeShow(), k("step-change", l.value, i.value), l.value?.afterShow && l.value.afterShow());
    }, _ = () => {
      r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), Z(), d.allowInteractions || document.body.classList.remove("tour-guide-active"), g.value = !1, r.value = null, P.value = null, z.value = null, j.value = null, T.value = { width: 0, height: 0 }, t(), k("skip");
    }, pe = () => {
      l.value && c(l.value.id), r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), Z(), d.allowInteractions || document.body.classList.remove("tour-guide-active"), g.value = !1, r.value = null, P.value = null, z.value = null, j.value = null, T.value = { width: 0, height: 0 }, t(), k("complete");
    }, ke = async (e) => {
      if (e >= 0 && e < d.steps.length) {
        for (let o = 0; o <= e; o++) {
          const a = d.steps[o];
          a && c(a.id);
        }
        i.value = e, h(i.value), await D(), await K(), l.value?.beforeShow && await l.value.beforeShow(), k("step-change", l.value, i.value), l.value?.afterShow && l.value.afterShow();
      }
    };
    return he(() => {
      d.autoStart && ce();
    }), Be(() => {
      g.value && (Z(), d.allowInteractions || document.body.classList.remove("tour-guide-active"));
    }), oe(
      () => i.value,
      async () => {
        g.value && await K();
      }
    ), oe(r, (e, o) => {
      o && Z(), e && g.value && (w(), de());
    }), oe(P, () => {
      g.value && w();
    }), oe(
      y,
      (e) => {
        e && g.value && D(() => {
          T.value = {
            width: e.offsetWidth || 320,
            height: e.offsetHeight || 200
          }, O.value && O.value.observe(e);
        });
      },
      { immediate: !0 }
    ), s({
      startTourGuide: ce,
      skipTourGuide: _,
      completeTourGuide: pe,
      nextStep: le,
      previousStep: ae,
      goToStep: ke,
      isActive: re(g),
      currentStepIndex: re(i)
    }), (e, o) => (m(), b("div", null, [
      g.value && r.value ? (m(), b("div", {
        key: 0,
        style: E(ge.value),
        class: "fixed pointer-events-none"
      }, null, 4)) : W("", !0),
      (m(), Ae(Ie, { to: "body" }, [
        g.value && r.value ? (m(), b("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: y,
          style: E(ye.value),
          class: "fixed",
          "data-tour-guide-interactive": "true"
        }, [
          He(Fe, {
            visible: g.value,
            title: l.value?.title,
            content: l.value?.content,
            direction: ie.value,
            "current-step": i.value + 1,
            "total-steps": e.steps.length,
            "show-previous": i.value > 0,
            "show-close": e.allowSkip,
            "show-actions": l.value?.showAction,
            "arrow-offset": ne.value,
            onNext: le,
            onPrevious: ae,
            onClose: _,
            skipLabel: l.value?.skipLabel || G.value.skip,
            nextLabel: l.value?.nextLabel || G.value.next,
            prevLabel: l.value?.prevLabel || G.value.previous,
            finishLabel: l.value?.finishLabel || G.value.finish,
            backgroundColor: v.value.backgroundColor,
            textColor: v.value.textColor,
            borderRadius: v.value.borderRadius,
            padding: v.value.padding,
            maxWidth: v.value.maxWidth,
            boxShadow: v.value.boxShadow,
            buttonBackgroundColor: v.value.buttonBackgroundColor,
            buttonTextColor: v.value.buttonTextColor,
            buttonHoverColor: v.value.buttonHoverColor,
            skipButtonColor: v.value.skipButtonColor,
            skipButtonHoverColor: v.value.skipButtonHoverColor,
            progressActiveColor: v.value.progressActiveColor,
            progressInactiveColor: v.value.progressInactiveColor,
            tooltipClass: v.value.tooltipClass,
            headerClass: v.value.headerClass,
            contentClass: v.value.contentClass,
            actionsClass: v.value.actionsClass
          }, Ge({ _: 2 }, [
            e.$slots.default ? {
              name: "default",
              fn: F((a) => [
                $(e.$slots, "default", V(X({
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
              fn: F((a) => [
                $(e.$slots, "header", V(X({
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
              fn: F((a) => [
                $(e.$slots, "content", V(X({
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
              fn: F((a) => [
                $(e.$slots, "skip-button", V(X({
                  ...a,
                  step: l.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length,
                  onSkip: _
                })))
              ]),
              key: "3"
            } : void 0,
            e.$slots.progress ? {
              name: "progress",
              fn: F((a) => [
                $(e.$slots, "progress", V(X({
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
              fn: F((a) => [
                $(e.$slots, "actions", V(X({
                  ...a,
                  step: l.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length,
                  onNext: le,
                  onPrevious: ae,
                  onSkip: _
                })))
              ]),
              key: "5"
            } : void 0,
            e.$slots["step-content"] ? {
              name: "step-content",
              fn: F((a) => [
                $(e.$slots, "step-content", V(X({
                  ...a,
                  step: l.value,
                  index: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "6"
            } : void 0
          ]), 1032, ["visible", "title", "content", "direction", "current-step", "total-steps", "show-previous", "show-close", "show-actions", "arrow-offset", "skipLabel", "nextLabel", "prevLabel", "finishLabel", "backgroundColor", "textColor", "borderRadius", "padding", "maxWidth", "boxShadow", "buttonBackgroundColor", "buttonTextColor", "buttonHoverColor", "skipButtonColor", "skipButtonHoverColor", "progressActiveColor", "progressInactiveColor", "tooltipClass", "headerClass", "contentClass", "actionsClass"])
        ], 4)) : W("", !0)
      ]))
    ]));
  }
});
export {
  Ye as TourGuideManager,
  Fe as TourGuideTooltip,
  Ve as useTourGuide
};
