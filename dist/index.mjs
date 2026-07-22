import { defineComponent as fe, useCssVars as Le, computed as L, createElementBlock as w, createCommentVNode as E, openBlock as f, normalizeStyle as R, normalizeClass as K, createElementVNode as Y, renderSlot as C, toDisplayString as Q, Fragment as se, createTextVNode as $e, renderList as Pe, reactive as Be, onMounted as he, readonly as re, ref as S, onUnmounted as He, watch as oe, nextTick as q, createBlock as Ae, Teleport as Ie, createVNode as Ge, createSlots as Oe, withCtx as F, normalizeProps as V, guardReactiveProps as X } from "vue";
const We = { class: "vtg-stack" }, Me = {
  key: 0,
  class: "vtg-title"
}, Ee = ["innerHTML"], Re = {
  key: 1,
  class: "vtg-progress"
}, xe = { class: "vtg-progress-track" }, Ne = { class: "vtg-action-group" }, ze = /* @__PURE__ */ fe({
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
  setup(A) {
    Le((t) => ({
      "056587cd": s.skipButtonHoverColor,
      "75856eae": s.buttonHoverColor
    }));
    const s = A, I = L(() => s.currentStep >= s.totalSteps), i = L(() => (t) => {
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
    }), x = L(() => {
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
    }), O = L(() => {
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
      class: K(["vtg-tooltip", "animate-in", s.tooltipClass]),
      style: R(x.value)
    }, [
      Y("div", {
        class: K(["arrow-base", O.value]),
        style: R(d.value)
      }, null, 6),
      Y("div", We, [
        Y("div", {
          class: K(["vtg-header", s.headerClass])
        }, [
          C(t.$slots, "header", {
            title: t.title,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, () => [
            t.title ? (f(), w("h3", Me, Q(t.title), 1)) : E("", !0)
          ], !0),
          C(t.$slots, "skip-button", {
            skipLabel: t.skipLabel,
            onClose: () => t.$emit("close")
          }, () => [
            t.showClose ? (f(), w("button", {
              key: 0,
              type: "button",
              onClick: m[0] || (m[0] = ($) => t.$emit("close")),
              class: "custom-skip-btn",
              style: R(c.value)
            }, Q(t.skipLabel), 5)) : E("", !0)
          ], !0)
        ], 2),
        t.content || t.$slots.default || t.$slots.content ? (f(), w("div", {
          key: 0,
          class: K(["tour-guide-content", s.contentClass])
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
          }, null, 8, Ee)) : (f(), w(se, { key: 3 }, [
            $e(Q(t.content), 1)
          ], 64))
        ], 2)) : E("", !0),
        t.showActions ? (f(), w("div", {
          key: 1,
          class: K(["vtg-actions", s.actionsClass])
        }, [
          t.$slots.progress ? C(t.$slots, "progress", {
            key: 0,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, void 0, !0) : (f(), w("div", Re, [
            Y("div", xe, [
              (f(!0), w(se, null, Pe(t.totalSteps, ($) => (f(), w("div", {
                key: $,
                class: "vtg-progress-dot",
                style: R(i.value($))
              }, null, 4))), 128))
            ])
          ])),
          Y("div", Ne, [
            t.$slots.actions ? C(t.$slots, "actions", {
              key: 0,
              showPrevious: t.showPrevious,
              isLastStep: I.value,
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
                class: "custom-action-btn",
                style: R(k.value)
              }, Q(t.prevLabel), 5)) : E("", !0),
              Y("button", {
                type: "button",
                onClick: m[2] || (m[2] = ($) => t.$emit("next")),
                class: "custom-action-btn",
                style: R(k.value)
              }, Q(I.value ? t.finishLabel : t.nextLabel), 5)
            ], 64))
          ])
        ], 2)) : E("", !0)
      ])
    ], 6)) : E("", !0);
  }
}), Fe = (A, s) => {
  const I = A.__vccOpts || A;
  for (const [i, x] of s)
    I[i] = x;
  return I;
}, Ve = /* @__PURE__ */ Fe(ze, [["__scopeId", "data-v-11b0bda2"]]), p = Be({
  isActive: !1,
  currentStep: 0,
  completedSteps: [],
  hasSeenTourGuide: !1
}), Xe = () => {
  const A = () => {
    if (typeof window < "u") {
      const c = localStorage.getItem("tour-guide-state");
      if (c) {
        const t = JSON.parse(c);
        Object.assign(p, t);
      }
    }
  }, s = () => {
    typeof window < "u" && localStorage.setItem("tour-guide-state", JSON.stringify(p));
  }, I = (c) => {
    p.isActive = !0, p.currentStep = 0, p.completedSteps = [], s();
  }, i = (c) => {
    p.completedSteps.includes(c) || (p.completedSteps.push(c), s());
  }, x = (c) => {
    p.currentStep = c, s();
  }, O = () => {
    p.isActive = !1, p.hasSeenTourGuide = !0, s();
  }, d = () => {
    p.isActive = !1, p.currentStep = 0, p.completedSteps = [], p.hasSeenTourGuide = !1, s();
  }, k = (c) => p.completedSteps.includes(c);
  return he(() => {
    A();
  }), {
    // State
    tourGuideState: re(p),
    // Actions
    startTourGuide: I,
    completeStep: i,
    updateCurrentStep: x,
    finishTourGuide: O,
    resetTourGuide: d,
    isStepCompleted: k,
    // Helpers
    loadTourGuideState: A,
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
    trackAnimations: { type: Boolean, default: !1 },
    tooltip: {}
  },
  emits: ["start", "complete", "skip", "step-change"],
  setup(A, { expose: s, emit: I }) {
    const i = A, x = {
      skip: "Skip",
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    }, O = L(() => ({
      ...x,
      ...i.labels
    })), d = L(() => {
      const e = i.tooltip || {}, l = o.value?.tooltip || {};
      return {
        ...e,
        ...l
      };
    }), k = I, {
      completeStep: c,
      finishTourGuide: t,
      startTourGuide: m,
      updateCurrentStep: $
    } = Xe(), h = S(!1), n = S(0), r = S(null), P = S(null), b = S(), N = S(null), D = S(null), T = S({
      width: 0,
      height: 0
    }), ne = S("bottom"), ie = S(0), J = S(null), j = S(null), W = S(null), o = L(() => i.steps[n.value]), ge = L(() => {
      if (!r.value || !o.value || !N.value)
        return {};
      const e = N.value, l = i.highlightPadding, a = o.value.radius ?? 8, u = e.top - l, y = e.left - l, G = e.width + l * 2, v = e.height + l * 2;
      return {
        top: `${u}px`,
        left: `${y}px`,
        width: `${G}px`,
        height: `${v}px`,
        borderRadius: `${a}px`,
        zIndex: 9998,
        // Massive box-shadow creates the dimming overlay around the cut-out
        boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)"
      };
    }), we = (e) => {
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
    }, me = (e, l, a) => {
      const u = we(e);
      if (a && {
        top: u.top >= l.height,
        bottom: u.bottom >= l.height,
        left: u.left >= l.width,
        right: u.right >= l.width
      }[a])
        return a;
      const y = [
        {
          name: "bottom",
          space: u.bottom,
          needed: l.height
        },
        { name: "top", space: u.top, needed: l.height },
        { name: "right", space: u.right, needed: l.width },
        { name: "left", space: u.left, needed: l.width }
      ], G = y.filter((v) => v.space >= v.needed);
      return G.length > 0 ? G.sort((v, z) => z.space - v.space)[0].name : y.sort((v, z) => z.space - v.space)[0].name;
    }, be = (e, l, a) => {
      if (a === "top" || a === "bottom") {
        const u = e.left + e.width / 2, y = l.left + l.width / 2;
        return u - y;
      } else {
        const u = e.top + e.height / 2, y = l.top + l.height / 2;
        return u - y;
      }
    }, ye = L(() => {
      if (!o.value) return {};
      const e = P.value || r.value, l = D.value || N.value;
      if (!e || !l) return {};
      const a = l, u = o.value.direction, y = o.value.offsetX || 0, G = o.value.offsetY || 0, v = T.value.width > 0 ? T.value : { width: 320, height: 200 }, z = me(
        a,
        v,
        u
      );
      ne.value = z;
      let B = 0, H = 0;
      const ee = 12;
      switch (z) {
        case "top":
          B = a.top - v.height - ee + G, H = a.left + a.width / 2 - v.width / 2 + y;
          break;
        case "bottom":
          B = a.bottom + ee + G, H = a.left + a.width / 2 - v.width / 2 + y;
          break;
        case "left":
          B = a.top + a.height / 2 - v.height / 2 + G, H = a.left - v.width - ee + y;
          break;
        case "right":
          B = a.top + a.height / 2 - v.height / 2 + G, H = a.right + ee + y;
          break;
      }
      const te = {
        width: window.innerWidth,
        height: window.innerHeight
      }, M = i.viewportMargin;
      H < M ? H = M : H + v.width > te.width - M && (H = te.width - v.width - M), B < M ? B = M : B + v.height > te.height - M && (B = te.height - v.height - M);
      const Te = {
        left: H,
        top: B,
        width: v.width,
        height: v.height
      };
      return ie.value = be(
        a,
        Te,
        z
      ), {
        top: `${B}px`,
        left: `${H}px`,
        zIndex: 9999,
        transform: "none"
        // We handle positioning directly now
      };
    }), g = () => {
      if (r.value) {
        const e = r.value.getBoundingClientRect(), l = N.value;
        (!l || l.top !== e.top || l.left !== e.left || l.width !== e.width || l.height !== e.height) && (N.value = e);
      }
      if (P.value) {
        const e = P.value.getBoundingClientRect(), l = D.value;
        (!l || l.top !== e.top || l.left !== e.left || l.width !== e.width || l.height !== e.height) && (D.value = e);
      }
      if (b.value) {
        const e = {
          width: b.value.offsetWidth,
          height: b.value.offsetHeight
        };
        (T.value.width !== e.width || T.value.height !== e.height) && (T.value = e);
      }
    }, Se = () => {
      if (!i.trackAnimations) return;
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
        const u = window.getComputedStyle(a);
        (u.overflow === "auto" || u.overflow === "scroll" || u.overflowY === "auto" || u.overflowY === "scroll" || u.overflowX === "auto" || u.overflowX === "scroll") && l.push(a), a = a.parentElement;
      }
      return l;
    }, ve = () => {
      if (!r.value) return;
      window.addEventListener("scroll", g, { passive: !0 }), document.addEventListener("scroll", g, { passive: !0 }), window.addEventListener("resize", g, { passive: !0 }), ue(r.value).forEach((l) => {
        l.addEventListener("scroll", g, { passive: !0 });
      }), Se(), j.value = new MutationObserver(() => {
        g();
      }), j.value.observe(document.body, {
        childList: !0,
        // Child element additions/removals
        subtree: !0,
        // Monitor entire document tree
        attributes: !0,
        // Attribute changes
        attributeFilter: ["style", "class"]
        // Focus on styling changes
      }), typeof ResizeObserver < "u" && (W.value = new ResizeObserver(() => {
        g();
      }), W.value.observe(r.value), b.value && W.value.observe(b.value));
    }, Z = () => {
      window.removeEventListener("scroll", g), document.removeEventListener("scroll", g), window.removeEventListener("resize", g), r.value && ue(r.value).forEach((l) => {
        l.removeEventListener("scroll", g);
      }), Ce(), j.value && (j.value.disconnect(), j.value = null), W.value && (W.value.disconnect(), W.value = null);
    }, de = (e) => {
      let l = document.querySelector(e);
      return l || (l = document.querySelector(
        `[data-tour-guide="${e}"]`
      )), l;
    }, U = async () => {
      if (o.value) {
        if (r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), r.value = de(o.value.target), !r.value) {
          console.warn(
            `Tour Guide: Target element "${o.value.target}" not found`
          );
          return;
        }
        o.value.tooltipTarget ? (P.value = de(
          o.value.tooltipTarget
        ), P.value || (console.warn(
          `Tour Guide: Tooltip target element "${o.value.tooltipTarget}" not found, falling back to main target`
        ), P.value = null)) : P.value = null, i.scrollToView && (r.value.scrollIntoView({
          behavior: "smooth",
          // Smooth animation
          block: "center",
          // Center vertically in viewport
          inline: "nearest"
          // Minimal horizontal scrolling
        }), await new Promise((e) => setTimeout(e, 500))), r.value.style.position = "relative", r.value.style.zIndex = "9997", r.value.style.borderRadius = "8px", r.value.style.isolation = "isolate", r.value.setAttribute("data-tour-guide-interactive", "true"), g(), await q(), b.value ? T.value = {
          width: b.value.offsetWidth || 320,
          // fallback width
          height: b.value.offsetHeight || 200
          // fallback height
        } : T.value = { width: 320, height: 200 }, g();
      }
    }, ce = async () => {
      i.steps.length !== 0 && (h.value = !0, n.value = 0, m(), i.allowInteractions || document.body.classList.add("tour-guide-active"), await q(), await U(), T.value = { width: 320, height: 200 }, ve(), await new Promise((e) => setTimeout(e, 100)), b.value && (T.value = {
        width: b.value.offsetWidth || 320,
        height: b.value.offsetHeight || 200
      }), o.value?.beforeShow && await o.value.beforeShow(), k("start"), k("step-change", o.value, n.value), o.value?.afterShow && o.value.afterShow());
    }, le = async () => {
      o.value && c(o.value.id), o.value?.beforeHide && await o.value.beforeHide(), n.value < i.steps.length - 1 ? (n.value++, $(n.value), await q(), await U(), o.value?.beforeShow && await o.value.beforeShow(), k("step-change", o.value, n.value), o.value?.afterShow && o.value.afterShow()) : pe();
    }, ae = async () => {
      n.value > 0 && (o.value?.beforeHide && await o.value.beforeHide(), n.value--, $(n.value), await q(), await U(), o.value?.beforeShow && await o.value.beforeShow(), k("step-change", o.value, n.value), o.value?.afterShow && o.value.afterShow());
    }, _ = () => {
      r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), Z(), i.allowInteractions || document.body.classList.remove("tour-guide-active"), h.value = !1, r.value = null, P.value = null, N.value = null, D.value = null, T.value = { width: 0, height: 0 }, t(), k("skip");
    }, pe = () => {
      o.value && c(o.value.id), r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), Z(), i.allowInteractions || document.body.classList.remove("tour-guide-active"), h.value = !1, r.value = null, P.value = null, N.value = null, D.value = null, T.value = { width: 0, height: 0 }, t(), k("complete");
    }, ke = async (e) => {
      if (e >= 0 && e < i.steps.length) {
        for (let l = 0; l <= e; l++) {
          const a = i.steps[l];
          a && c(a.id);
        }
        n.value = e, $(n.value), await q(), await U(), o.value?.beforeShow && await o.value.beforeShow(), k("step-change", o.value, n.value), o.value?.afterShow && o.value.afterShow();
      }
    };
    return he(() => {
      i.autoStart && ce();
    }), He(() => {
      h.value && (Z(), i.allowInteractions || document.body.classList.remove("tour-guide-active"));
    }), oe(
      () => n.value,
      async () => {
        h.value && await U();
      }
    ), oe(r, (e, l) => {
      l && Z(), e && h.value && (g(), ve());
    }), oe(P, () => {
      h.value && g();
    }), oe(
      b,
      (e) => {
        e && h.value && q(() => {
          T.value = {
            width: e.offsetWidth || 320,
            height: e.offsetHeight || 200
          }, W.value && W.value.observe(e);
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
        style: R(ge.value),
        class: "vtg-cutout"
      }, null, 4)) : E("", !0),
      (f(), Ae(Ie, { to: "body" }, [
        h.value && r.value ? (f(), w("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: b,
          style: R(ye.value),
          class: "vtg-tooltip-anchor",
          "data-tour-guide-interactive": "true"
        }, [
          Ge(Ve, {
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
            skipLabel: o.value?.skipLabel || O.value.skip,
            nextLabel: o.value?.nextLabel || O.value.next,
            prevLabel: o.value?.prevLabel || O.value.previous,
            finishLabel: o.value?.finishLabel || O.value.finish,
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
          }, Oe({ _: 2 }, [
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
        ], 4)) : E("", !0)
      ]))
    ]));
  }
});
export {
  qe as TourGuideManager,
  Ve as TourGuideTooltip,
  Xe as useTourGuide
};
