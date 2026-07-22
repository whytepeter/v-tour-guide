import { defineComponent as fe, useCssVars as Le, computed as L, createElementBlock as w, createCommentVNode as M, openBlock as f, normalizeStyle as E, normalizeClass as Y, createElementVNode as q, renderSlot as C, toDisplayString as Q, Fragment as se, createTextVNode as $e, renderList as Pe, reactive as Be, onMounted as he, readonly as re, ref as S, onUnmounted as xe, watch as oe, nextTick as D, createBlock as He, Teleport as Ae, createVNode as Ie, createSlots as Ge, withCtx as F, normalizeProps as V, guardReactiveProps as X } from "vue";
const Oe = {
  class: "relative space-y-2",
  style: { padding: "0" }
}, We = {
  key: 0,
  class: "font-medium leading-tight flex-1 min-w-0"
}, Me = ["innerHTML"], Ee = {
  key: 1,
  class: "flex items-center flex-1"
}, Re = { class: "flex items-center gap-1 pr-2 py-1 rounded-full" }, ze = { class: "flex items-center gap-1.5 flex-shrink-0" }, Ne = /* @__PURE__ */ fe({
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
    Le((t) => ({
      d684132e: s.skipButtonHoverColor,
      "09b58b4a": s.buttonHoverColor
    }));
    const s = H, A = L(() => s.currentStep >= s.totalSteps), d = L(() => (t) => {
      const m = t <= s.currentStep, $ = Math.abs(t - s.currentStep);
      if (m)
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
    }), R = L(() => {
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
          const m = Math.max(-50, Math.min(50, s.arrowOffset));
          t.transform = `translateX(calc(-50% + ${m}px)) rotate(45deg)`;
        }
      } else if ((s.direction === "left" || s.direction === "right") && s.arrowOffset !== 0) {
        const m = Math.max(-50, Math.min(50, s.arrowOffset));
        t.transform = `translateY(calc(-50% + ${m}px)) rotate(45deg)`;
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
    return (t, m) => t.visible ? (f(), w("div", {
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
          C(t.$slots, "header", {
            title: t.title,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, () => [
            t.title ? (f(), w("h3", We, Q(t.title), 1)) : M("", !0)
          ], !0),
          C(t.$slots, "skip-button", {
            skipLabel: t.skipLabel,
            onClose: () => t.$emit("close")
          }, () => [
            t.showClose ? (f(), w("button", {
              key: 0,
              type: "button",
              onClick: m[0] || (m[0] = ($) => t.$emit("close")),
              class: "underline text-sm transition-colors flex-shrink-0 custom-skip-btn",
              style: E(c.value)
            }, Q(t.skipLabel), 5)) : M("", !0)
          ], !0)
        ], 2),
        t.content || t.$slots.default || t.$slots.content ? (f(), w("div", {
          key: 0,
          class: Y([
            "opacity-90 font-thin break-words tour-guide-content",
            s.contentClass
          ])
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
          }, void 0, !0) : t.allowHtml ? (f(), w("span", {
            key: 2,
            innerHTML: t.content
          }, null, 8, Me)) : (f(), w(se, { key: 3 }, [
            $e(Q(t.content), 1)
          ], 64))
        ], 2)) : M("", !0),
        t.showActions ? (f(), w("div", {
          key: 1,
          class: Y(["flex items-center justify-between gap-2", s.actionsClass])
        }, [
          t.$slots.progress ? C(t.$slots, "progress", {
            key: 0,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, void 0, !0) : (f(), w("div", Ee, [
            q("div", Re, [
              (f(!0), w(se, null, Pe(t.totalSteps, ($) => (f(), w("div", {
                key: $,
                class: Y(["w-1.5 h-1.5 rounded-full transition-all duration-300"]),
                style: E(d.value($))
              }, null, 4))), 128))
            ])
          ])),
          q("div", ze, [
            t.$slots.actions ? C(t.$slots, "actions", {
              key: 0,
              showPrevious: t.showPrevious,
              isLastStep: A.value,
              prevLabel: t.prevLabel,
              nextLabel: t.nextLabel,
              finishLabel: t.finishLabel,
              onPrevious: () => t.$emit("previous"),
              onNext: () => t.$emit("next")
            }, void 0, !0) : (f(), w(se, { key: 1 }, [
              t.showPrevious ? (f(), w("button", {
                key: 0,
                type: "button",
                onClick: m[1] || (m[1] = ($) => t.$emit("previous")),
                class: "text-xs px-2 py-1 rounded-md transition-colors flex-shrink-0 custom-action-btn whitespace-nowrap",
                style: E(k.value)
              }, Q(t.prevLabel), 5)) : M("", !0),
              q("button", {
                type: "button",
                onClick: m[2] || (m[2] = ($) => t.$emit("next")),
                class: "text-xs px-2 py-1 rounded-md transition-colors flex-shrink-0 custom-action-btn whitespace-nowrap",
                style: E(k.value)
              }, Q(A.value ? t.finishLabel : t.nextLabel), 5)
            ], 64))
          ])
        ], 2)) : M("", !0)
      ])
    ], 6)) : M("", !0);
  }
}), Fe = (H, s) => {
  const A = H.__vccOpts || H;
  for (const [d, R] of s)
    A[d] = R;
  return A;
}, Ve = /* @__PURE__ */ Fe(Ne, [["__scopeId", "data-v-24e3526f"]]), p = Be({
  isActive: !1,
  currentStep: 0,
  completedSteps: [],
  hasSeenTourGuide: !1
}), Xe = () => {
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
  }, d = (c) => {
    p.completedSteps.includes(c) || (p.completedSteps.push(c), s());
  }, R = (c) => {
    p.currentStep = c, s();
  }, G = () => {
    p.isActive = !1, p.hasSeenTourGuide = !0, s();
  }, v = () => {
    p.isActive = !1, p.currentStep = 0, p.completedSteps = [], p.hasSeenTourGuide = !1, s();
  }, k = (c) => p.completedSteps.includes(c);
  return he(() => {
    H();
  }), {
    // State
    tourGuideState: re(p),
    // Actions
    startTourGuide: A,
    completeStep: d,
    updateCurrentStep: R,
    finishTourGuide: G,
    resetTourGuide: v,
    isStepCompleted: k,
    // Helpers
    loadTourGuideState: H,
    saveTourGuideState: s
  };
}, qe = /* @__PURE__ */ fe({
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
    tooltip: {}
  },
  emits: ["start", "complete", "skip", "step-change"],
  setup(H, { expose: s, emit: A }) {
    const d = H, R = {
      skip: "Skip",
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    }, G = L(() => ({
      ...R,
      ...d.labels
    })), v = L(() => {
      const e = d.tooltip || {}, l = o.value?.tooltip || {};
      return {
        ...e,
        ...l
      };
    }), k = A, {
      completeStep: c,
      finishTourGuide: t,
      startTourGuide: m,
      updateCurrentStep: $
    } = Xe(), h = S(!1), n = S(0), r = S(null), P = S(null), b = S(), z = S(null), j = S(null), T = S({
      width: 0,
      height: 0
    }), ne = S("bottom"), ie = S(0), J = S(null), U = S(null), O = S(null), o = L(() => d.steps[n.value]), ge = L(() => {
      if (!r.value || !o.value || !z.value)
        return {};
      const e = z.value, l = d.highlightPadding, a = o.value.radius ?? 8, i = e.top - l, y = e.left - l, I = e.width + l * 2, u = e.height + l * 2;
      return {
        top: `${i}px`,
        left: `${y}px`,
        width: `${I}px`,
        height: `${u}px`,
        borderRadius: `${a}px`,
        zIndex: 9998,
        // Massive box-shadow creates the dimming overlay around the cut-out
        boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)"
      };
    }), we = (e) => {
      const l = {
        width: window.innerWidth,
        height: window.innerHeight
      }, a = d.viewportMargin;
      return {
        top: e.top - a,
        bottom: l.height - e.bottom - a,
        left: e.left - a,
        right: l.width - e.right - a
      };
    }, me = (e, l, a) => {
      const i = we(e);
      if (a && {
        top: i.top >= l.height,
        bottom: i.bottom >= l.height,
        left: i.left >= l.width,
        right: i.right >= l.width
      }[a])
        return a;
      const y = [
        {
          name: "bottom",
          space: i.bottom,
          needed: l.height
        },
        { name: "top", space: i.top, needed: l.height },
        { name: "right", space: i.right, needed: l.width },
        { name: "left", space: i.left, needed: l.width }
      ], I = y.filter((u) => u.space >= u.needed);
      return I.length > 0 ? I.sort((u, N) => N.space - u.space)[0].name : y.sort((u, N) => N.space - u.space)[0].name;
    }, be = (e, l, a) => {
      if (a === "top" || a === "bottom") {
        const i = e.left + e.width / 2, y = l.left + l.width / 2;
        return i - y;
      } else {
        const i = e.top + e.height / 2, y = l.top + l.height / 2;
        return i - y;
      }
    }, ye = L(() => {
      if (!o.value) return {};
      const e = P.value || r.value, l = j.value || z.value;
      if (!e || !l) return {};
      const a = l, i = o.value.direction, y = o.value.offsetX || 0, I = o.value.offsetY || 0, u = T.value.width > 0 ? T.value : { width: 320, height: 200 }, N = me(
        a,
        u,
        i
      );
      ne.value = N;
      let B = 0, x = 0;
      const ee = 12;
      switch (N) {
        case "top":
          B = a.top - u.height - ee + I, x = a.left + a.width / 2 - u.width / 2 + y;
          break;
        case "bottom":
          B = a.bottom + ee + I, x = a.left + a.width / 2 - u.width / 2 + y;
          break;
        case "left":
          B = a.top + a.height / 2 - u.height / 2 + I, x = a.left - u.width - ee + y;
          break;
        case "right":
          B = a.top + a.height / 2 - u.height / 2 + I, x = a.right + ee + y;
          break;
      }
      const te = {
        width: window.innerWidth,
        height: window.innerHeight
      }, W = d.viewportMargin;
      x < W ? x = W : x + u.width > te.width - W && (x = te.width - u.width - W), B < W ? B = W : B + u.height > te.height - W && (B = te.height - u.height - W);
      const Te = {
        left: x,
        top: B,
        width: u.width,
        height: u.height
      };
      return ie.value = be(
        a,
        Te,
        N
      ), {
        top: `${B}px`,
        left: `${x}px`,
        zIndex: 9999,
        transform: "none"
        // We handle positioning directly now
      };
    }), g = () => {
      if (r.value) {
        const e = r.value.getBoundingClientRect(), l = z.value;
        (!l || l.top !== e.top || l.left !== e.left || l.width !== e.width || l.height !== e.height) && (z.value = e);
      }
      if (P.value) {
        const e = P.value.getBoundingClientRect(), l = j.value;
        (!l || l.top !== e.top || l.left !== e.left || l.width !== e.width || l.height !== e.height) && (j.value = e);
      }
      if (b.value) {
        const e = {
          width: b.value.offsetWidth,
          height: b.value.offsetHeight
        };
        (T.value.width !== e.width || T.value.height !== e.height) && (T.value = e);
      }
    }, Se = () => {
      const e = () => {
        h.value && r.value && (g(), J.value = requestAnimationFrame(e));
      };
      J.value = requestAnimationFrame(e);
    }, Ce = () => {
      J.value && (cancelAnimationFrame(J.value), J.value = null);
    }, ue = (e) => {
      const l = [];
      let a = e.parentElement;
      for (; a && a !== document.body; ) {
        const i = window.getComputedStyle(a);
        (i.overflow === "auto" || i.overflow === "scroll" || i.overflowY === "auto" || i.overflowY === "scroll" || i.overflowX === "auto" || i.overflowX === "scroll") && l.push(a), a = a.parentElement;
      }
      return l;
    }, de = () => {
      if (!r.value) return;
      window.addEventListener("scroll", g, { passive: !0 }), document.addEventListener("scroll", g, { passive: !0 }), window.addEventListener("resize", g, { passive: !0 }), ue(r.value).forEach((l) => {
        l.addEventListener("scroll", g, { passive: !0 });
      }), Se(), U.value = new MutationObserver(() => {
        g();
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
        g();
      }), O.value.observe(r.value), b.value && O.value.observe(b.value));
    }, Z = () => {
      window.removeEventListener("scroll", g), document.removeEventListener("scroll", g), window.removeEventListener("resize", g), r.value && ue(r.value).forEach((l) => {
        l.removeEventListener("scroll", g);
      }), Ce(), U.value && (U.value.disconnect(), U.value = null), O.value && (O.value.disconnect(), O.value = null);
    }, ve = (e) => {
      let l = document.querySelector(e);
      return l || (l = document.querySelector(
        `[data-tour-guide="${e}"]`
      )), l;
    }, K = async () => {
      if (o.value) {
        if (r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), r.value = ve(o.value.target), !r.value) {
          console.warn(
            `Tour Guide: Target element "${o.value.target}" not found`
          );
          return;
        }
        o.value.tooltipTarget ? (P.value = ve(
          o.value.tooltipTarget
        ), P.value || (console.warn(
          `Tour Guide: Tooltip target element "${o.value.tooltipTarget}" not found, falling back to main target`
        ), P.value = null)) : P.value = null, d.scrollToView && (r.value.scrollIntoView({
          behavior: "smooth",
          // Smooth animation
          block: "center",
          // Center vertically in viewport
          inline: "nearest"
          // Minimal horizontal scrolling
        }), await new Promise((e) => setTimeout(e, 500))), r.value.style.position = "relative", r.value.style.zIndex = "9997", r.value.style.borderRadius = "8px", r.value.style.isolation = "isolate", r.value.setAttribute("data-tour-guide-interactive", "true"), g(), await D(), b.value ? T.value = {
          width: b.value.offsetWidth || 320,
          // fallback width
          height: b.value.offsetHeight || 200
          // fallback height
        } : T.value = { width: 320, height: 200 }, g();
      }
    }, ce = async () => {
      d.steps.length !== 0 && (h.value = !0, n.value = 0, m(), d.allowInteractions || document.body.classList.add("tour-guide-active"), await D(), await K(), T.value = { width: 320, height: 200 }, de(), await new Promise((e) => setTimeout(e, 100)), b.value && (T.value = {
        width: b.value.offsetWidth || 320,
        height: b.value.offsetHeight || 200
      }), o.value?.beforeShow && await o.value.beforeShow(), k("start"), k("step-change", o.value, n.value), o.value?.afterShow && o.value.afterShow());
    }, le = async () => {
      o.value && c(o.value.id), o.value?.beforeHide && await o.value.beforeHide(), n.value < d.steps.length - 1 ? (n.value++, $(n.value), await D(), await K(), o.value?.beforeShow && await o.value.beforeShow(), k("step-change", o.value, n.value), o.value?.afterShow && o.value.afterShow()) : pe();
    }, ae = async () => {
      n.value > 0 && (o.value?.beforeHide && await o.value.beforeHide(), n.value--, $(n.value), await D(), await K(), o.value?.beforeShow && await o.value.beforeShow(), k("step-change", o.value, n.value), o.value?.afterShow && o.value.afterShow());
    }, _ = () => {
      r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), Z(), d.allowInteractions || document.body.classList.remove("tour-guide-active"), h.value = !1, r.value = null, P.value = null, z.value = null, j.value = null, T.value = { width: 0, height: 0 }, t(), k("skip");
    }, pe = () => {
      o.value && c(o.value.id), r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), Z(), d.allowInteractions || document.body.classList.remove("tour-guide-active"), h.value = !1, r.value = null, P.value = null, z.value = null, j.value = null, T.value = { width: 0, height: 0 }, t(), k("complete");
    }, ke = async (e) => {
      if (e >= 0 && e < d.steps.length) {
        for (let l = 0; l <= e; l++) {
          const a = d.steps[l];
          a && c(a.id);
        }
        n.value = e, $(n.value), await D(), await K(), o.value?.beforeShow && await o.value.beforeShow(), k("step-change", o.value, n.value), o.value?.afterShow && o.value.afterShow();
      }
    };
    return he(() => {
      d.autoStart && ce();
    }), xe(() => {
      h.value && (Z(), d.allowInteractions || document.body.classList.remove("tour-guide-active"));
    }), oe(
      () => n.value,
      async () => {
        h.value && await K();
      }
    ), oe(r, (e, l) => {
      l && Z(), e && h.value && (g(), de());
    }), oe(P, () => {
      h.value && g();
    }), oe(
      b,
      (e) => {
        e && h.value && D(() => {
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
      isActive: re(h),
      currentStepIndex: re(n)
    }), (e, l) => (f(), w("div", null, [
      h.value && r.value ? (f(), w("div", {
        key: 0,
        style: E(ge.value),
        class: "fixed pointer-events-none"
      }, null, 4)) : M("", !0),
      (f(), He(Ae, { to: "body" }, [
        h.value && r.value ? (f(), w("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: b,
          style: E(ye.value),
          class: "fixed",
          "data-tour-guide-interactive": "true"
        }, [
          Ie(Ve, {
            visible: h.value,
            title: o.value?.title,
            content: o.value?.content,
            "allow-html": o.value?.allowHtml ?? e.allowHtml,
            direction: ne.value,
            "current-step": n.value + 1,
            "total-steps": e.steps.length,
            "show-previous": n.value > 0,
            "show-close": e.allowSkip,
            "show-actions": o.value?.showAction,
            "arrow-offset": ie.value,
            onNext: le,
            onPrevious: ae,
            onClose: _,
            skipLabel: o.value?.skipLabel || G.value.skip,
            nextLabel: o.value?.nextLabel || G.value.next,
            prevLabel: o.value?.prevLabel || G.value.previous,
            finishLabel: o.value?.finishLabel || G.value.finish,
            backgroundColor: v.value.backgroundColor,
            textColor: v.value.textColor,
            borderRadius: v.value.borderRadius,
            padding: v.value.padding,
            maxWidth: v.value.maxWidth,
            minWidth: v.value.minWidth,
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
                C(e.$slots, "default", V(X({
                  ...a,
                  step: o.value,
                  stepIndex: n.value,
                  currentStep: n.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "0"
            } : void 0,
            e.$slots.header ? {
              name: "header",
              fn: F((a) => [
                C(e.$slots, "header", V(X({
                  ...a,
                  step: o.value,
                  stepIndex: n.value,
                  currentStep: n.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "1"
            } : void 0,
            e.$slots.content ? {
              name: "content",
              fn: F((a) => [
                C(e.$slots, "content", V(X({
                  ...a,
                  step: o.value,
                  stepIndex: n.value,
                  currentStep: n.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "2"
            } : void 0,
            e.$slots["skip-button"] ? {
              name: "skip-button",
              fn: F((a) => [
                C(e.$slots, "skip-button", V(X({
                  ...a,
                  step: o.value,
                  stepIndex: n.value,
                  currentStep: n.value + 1,
                  totalSteps: e.steps.length,
                  onSkip: _
                })))
              ]),
              key: "3"
            } : void 0,
            e.$slots.progress ? {
              name: "progress",
              fn: F((a) => [
                C(e.$slots, "progress", V(X({
                  ...a,
                  step: o.value,
                  stepIndex: n.value,
                  currentStep: n.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "4"
            } : void 0,
            e.$slots.actions ? {
              name: "actions",
              fn: F((a) => [
                C(e.$slots, "actions", V(X({
                  ...a,
                  step: o.value,
                  stepIndex: n.value,
                  currentStep: n.value + 1,
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
                C(e.$slots, "step-content", V(X({
                  ...a,
                  step: o.value,
                  index: n.value,
                  currentStep: n.value + 1,
                  totalSteps: e.steps.length
                })))
              ]),
              key: "6"
            } : void 0
          ]), 1032, ["visible", "title", "content", "allow-html", "direction", "current-step", "total-steps", "show-previous", "show-close", "show-actions", "arrow-offset", "skipLabel", "nextLabel", "prevLabel", "finishLabel", "backgroundColor", "textColor", "borderRadius", "padding", "maxWidth", "minWidth", "boxShadow", "buttonBackgroundColor", "buttonTextColor", "buttonHoverColor", "skipButtonColor", "skipButtonHoverColor", "progressActiveColor", "progressInactiveColor", "tooltipClass", "headerClass", "contentClass", "actionsClass"])
        ], 4)) : M("", !0)
      ]))
    ]));
  }
});
export {
  qe as TourGuideManager,
  Ve as TourGuideTooltip,
  Xe as useTourGuide
};
