import { defineComponent as ge, useCssVars as Pe, computed as $, createElementBlock as m, createCommentVNode as R, openBlock as f, normalizeStyle as N, normalizeClass as q, createElementVNode as J, renderSlot as C, toDisplayString as _, Fragment as ie, createTextVNode as Be, renderList as He, reactive as Ae, onMounted as me, readonly as ne, ref as b, onUnmounted as Ie, watch as ae, nextTick as j, createBlock as Ge, Teleport as Me, createVNode as Oe, createSlots as We, withCtx as V, normalizeProps as X, guardReactiveProps as Y } from "vue";
const Ee = { class: "vtg-stack" }, Re = {
  key: 0,
  class: "vtg-title"
}, Ne = ["innerHTML"], xe = {
  key: 1,
  class: "vtg-progress"
}, ze = { class: "vtg-progress-track" }, Fe = { class: "vtg-action-group" }, Ve = /* @__PURE__ */ ge({
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
  setup(I) {
    Pe((t) => ({
      "056587cd": s.skipButtonHoverColor,
      "75856eae": s.buttonHoverColor
    }));
    const s = I, G = $(() => s.currentStep >= s.totalSteps), n = $(() => (t) => {
      const w = t <= s.currentStep, P = Math.abs(t - s.currentStep);
      if (w)
        return {
          backgroundColor: s.progressActiveColor,
          opacity: 1
        };
      {
        const h = Math.max(0.2, 1 - P * 0.3);
        return {
          backgroundColor: s.progressInactiveColor,
          opacity: h
        };
      }
    }), x = $(() => {
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
    }), O = $(() => {
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
    }), d = $(() => {
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
    }), k = $(() => ({
      backgroundColor: s.buttonBackgroundColor,
      color: s.buttonTextColor,
      "--hover-bg": s.buttonHoverColor
    })), c = $(() => ({
      color: s.skipButtonColor,
      "--hover-color": s.skipButtonHoverColor
    }));
    return (t, w) => t.visible ? (f(), m("div", {
      key: 0,
      class: q(["vtg-tooltip", "animate-in", s.tooltipClass]),
      style: N(x.value)
    }, [
      J("div", {
        class: q(["arrow-base", O.value]),
        style: N(d.value)
      }, null, 6),
      J("div", Ee, [
        J("div", {
          class: q(["vtg-header", s.headerClass])
        }, [
          C(t.$slots, "header", {
            title: t.title,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, () => [
            t.title ? (f(), m("h3", Re, _(t.title), 1)) : R("", !0)
          ], !0),
          C(t.$slots, "skip-button", {
            skipLabel: t.skipLabel,
            onClose: () => t.$emit("close")
          }, () => [
            t.showClose ? (f(), m("button", {
              key: 0,
              type: "button",
              onClick: w[0] || (w[0] = (P) => t.$emit("close")),
              class: "custom-skip-btn",
              style: N(c.value)
            }, _(t.skipLabel), 5)) : R("", !0)
          ], !0)
        ], 2),
        t.content || t.$slots.default || t.$slots.content ? (f(), m("div", {
          key: 0,
          class: q(["tour-guide-content", s.contentClass])
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
          }, void 0, !0) : t.allowHtml ? (f(), m("span", {
            key: 2,
            innerHTML: t.content
          }, null, 8, Ne)) : (f(), m(ie, { key: 3 }, [
            Be(_(t.content), 1)
          ], 64))
        ], 2)) : R("", !0),
        t.showActions ? (f(), m("div", {
          key: 1,
          class: q(["vtg-actions", s.actionsClass])
        }, [
          t.$slots.progress ? C(t.$slots, "progress", {
            key: 0,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, void 0, !0) : (f(), m("div", xe, [
            J("div", ze, [
              (f(!0), m(ie, null, He(t.totalSteps, (P) => (f(), m("div", {
                key: P,
                class: "vtg-progress-dot",
                style: N(n.value(P))
              }, null, 4))), 128))
            ])
          ])),
          J("div", Fe, [
            t.$slots.actions ? C(t.$slots, "actions", {
              key: 0,
              showPrevious: t.showPrevious,
              isLastStep: G.value,
              prevLabel: t.prevLabel,
              nextLabel: t.nextLabel,
              finishLabel: t.finishLabel,
              onPrevious: () => t.$emit("previous"),
              onNext: () => t.$emit("next")
            }, void 0, !0) : (f(), m(ie, { key: 1 }, [
              t.showPrevious ? (f(), m("button", {
                key: 0,
                type: "button",
                onClick: w[1] || (w[1] = (P) => t.$emit("previous")),
                class: "custom-action-btn",
                style: N(k.value)
              }, _(t.prevLabel), 5)) : R("", !0),
              J("button", {
                type: "button",
                onClick: w[2] || (w[2] = (P) => t.$emit("next")),
                class: "custom-action-btn",
                style: N(k.value)
              }, _(G.value ? t.finishLabel : t.nextLabel), 5)
            ], 64))
          ])
        ], 2)) : R("", !0)
      ])
    ], 6)) : R("", !0);
  }
}), Xe = (I, s) => {
  const G = I.__vccOpts || I;
  for (const [n, x] of s)
    G[n] = x;
  return G;
}, Ye = /* @__PURE__ */ Xe(Ve, [["__scopeId", "data-v-11b0bda2"]]), p = Ae({
  isActive: !1,
  currentStep: 0,
  completedSteps: [],
  hasSeenTourGuide: !1
}), qe = () => {
  const I = () => {
    if (typeof window < "u") {
      const c = localStorage.getItem("tour-guide-state");
      if (c) {
        const t = JSON.parse(c);
        Object.assign(p, t);
      }
    }
  }, s = () => {
    typeof window < "u" && localStorage.setItem("tour-guide-state", JSON.stringify(p));
  }, G = (c) => {
    p.isActive = !0, p.currentStep = 0, p.completedSteps = [], s();
  }, n = (c) => {
    p.completedSteps.includes(c) || (p.completedSteps.push(c), s());
  }, x = (c) => {
    p.currentStep = c, s();
  }, O = () => {
    p.isActive = !1, p.hasSeenTourGuide = !0, s();
  }, d = () => {
    p.isActive = !1, p.currentStep = 0, p.completedSteps = [], p.hasSeenTourGuide = !1, s();
  }, k = (c) => p.completedSteps.includes(c);
  return me(() => {
    I();
  }), {
    // State
    tourGuideState: ne(p),
    // Actions
    startTourGuide: G,
    completeStep: n,
    updateCurrentStep: x,
    finishTourGuide: O,
    resetTourGuide: d,
    isStepCompleted: k,
    // Helpers
    loadTourGuideState: I,
    saveTourGuideState: s
  };
}, Je = /* @__PURE__ */ ge({
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
    tooltip: {}
  },
  emits: ["start", "complete", "skip", "step-change"],
  setup(I, { expose: s, emit: G }) {
    const n = I, x = {
      skip: "Skip",
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    }, O = $(() => ({
      ...x,
      ...n.labels
    })), d = $(() => {
      const e = n.tooltip || {}, o = l.value?.tooltip || {};
      return {
        ...e,
        ...o
      };
    }), k = G, {
      completeStep: c,
      finishTourGuide: t,
      startTourGuide: w,
      updateCurrentStep: P
    } = qe(), h = b(!1), i = b(0), D = b(!1);
    let T = null;
    const r = b(null), B = b(null), y = b(), z = b(null), U = b(null), L = b({
      width: 0,
      height: 0
    }), ue = b("bottom"), ve = b(0), K = b(null), Q = b(null), W = b(null), l = $(() => n.steps[i.value]), we = $(() => {
      if (!r.value || !l.value || !z.value)
        return {};
      const e = z.value, o = n.highlightPadding, a = l.value.radius ?? 8, u = e.top - o, S = e.left - o, M = e.width + o * 2, v = e.height + o * 2;
      return {
        top: `${u}px`,
        left: `${S}px`,
        width: `${M}px`,
        height: `${v}px`,
        borderRadius: `${a}px`,
        zIndex: 9998,
        // Massive box-shadow creates the dimming overlay around the cut-out
        boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)"
      };
    }), be = (e) => {
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
    }, ye = (e, o, a) => {
      const u = be(e);
      if (a && {
        top: u.top >= o.height,
        bottom: u.bottom >= o.height,
        left: u.left >= o.width,
        right: u.right >= o.width
      }[a])
        return a;
      const S = [
        {
          name: "bottom",
          space: u.bottom,
          needed: o.height
        },
        { name: "top", space: u.top, needed: o.height },
        { name: "right", space: u.right, needed: o.width },
        { name: "left", space: u.left, needed: o.width }
      ], M = S.filter((v) => v.space >= v.needed);
      return M.length > 0 ? M.sort((v, F) => F.space - v.space)[0].name : S.sort((v, F) => F.space - v.space)[0].name;
    }, Se = (e, o, a) => {
      if (a === "top" || a === "bottom") {
        const u = e.left + e.width / 2, S = o.left + o.width / 2;
        return u - S;
      } else {
        const u = e.top + e.height / 2, S = o.top + o.height / 2;
        return u - S;
      }
    }, Ce = $(() => {
      if (!l.value) return {};
      const e = B.value || r.value, o = U.value || z.value;
      if (!e || !o) return {};
      const a = o, u = l.value.direction, S = l.value.offsetX || 0, M = l.value.offsetY || 0, v = L.value.width > 0 ? L.value : { width: 320, height: 200 }, F = ye(
        a,
        v,
        u
      );
      ue.value = F;
      let H = 0, A = 0;
      const oe = 12;
      switch (F) {
        case "top":
          H = a.top - v.height - oe + M, A = a.left + a.width / 2 - v.width / 2 + S;
          break;
        case "bottom":
          H = a.bottom + oe + M, A = a.left + a.width / 2 - v.width / 2 + S;
          break;
        case "left":
          H = a.top + a.height / 2 - v.height / 2 + M, A = a.left - v.width - oe + S;
          break;
        case "right":
          H = a.top + a.height / 2 - v.height / 2 + M, A = a.right + oe + S;
          break;
      }
      const le = {
        width: window.innerWidth,
        height: window.innerHeight
      }, E = n.viewportMargin;
      A < E ? A = E : A + v.width > le.width - E && (A = le.width - v.width - E), H < E ? H = E : H + v.height > le.height - E && (H = le.height - v.height - E);
      const $e = {
        left: A,
        top: H,
        width: v.width,
        height: v.height
      };
      return ve.value = Se(
        a,
        $e,
        F
      ), {
        top: `${H}px`,
        left: `${A}px`,
        zIndex: 9999,
        transform: "none"
        // We handle positioning directly now
      };
    }), g = () => {
      if (r.value) {
        const e = r.value.getBoundingClientRect(), o = z.value;
        (!o || o.top !== e.top || o.left !== e.left || o.width !== e.width || o.height !== e.height) && (z.value = e);
      }
      if (B.value) {
        const e = B.value.getBoundingClientRect(), o = U.value;
        (!o || o.top !== e.top || o.left !== e.left || o.width !== e.width || o.height !== e.height) && (U.value = e);
      }
      if (y.value) {
        const e = {
          width: y.value.offsetWidth,
          height: y.value.offsetHeight
        };
        (L.value.width !== e.width || L.value.height !== e.height) && (L.value = e);
      }
    }, ke = () => {
      if (!n.trackAnimations) return;
      const e = () => {
        h.value && r.value && (g(), K.value = requestAnimationFrame(e));
      };
      K.value = requestAnimationFrame(e);
    }, Te = () => {
      K.value && (cancelAnimationFrame(K.value), K.value = null);
    }, de = (e) => {
      const o = [];
      let a = e.parentElement;
      for (; a && a !== document.body; ) {
        const u = window.getComputedStyle(a);
        (u.overflow === "auto" || u.overflow === "scroll" || u.overflowY === "auto" || u.overflowY === "scroll" || u.overflowX === "auto" || u.overflowX === "scroll") && o.push(a), a = a.parentElement;
      }
      return o;
    }, ce = () => {
      if (!r.value) return;
      window.addEventListener("scroll", g, { passive: !0 }), document.addEventListener("scroll", g, { passive: !0 }), window.addEventListener("resize", g, { passive: !0 }), de(r.value).forEach((o) => {
        o.addEventListener("scroll", g, { passive: !0 });
      }), ke(), Q.value = new MutationObserver(() => {
        g();
      }), Q.value.observe(document.body, {
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
      }), W.value.observe(r.value), y.value && W.value.observe(y.value));
    }, ee = () => {
      window.removeEventListener("scroll", g), document.removeEventListener("scroll", g), window.removeEventListener("resize", g), r.value && de(r.value).forEach((o) => {
        o.removeEventListener("scroll", g);
      }), Te(), Q.value && (Q.value.disconnect(), Q.value = null), W.value && (W.value.disconnect(), W.value = null);
    }, pe = (e) => {
      let o = document.querySelector(e);
      return o || (o = document.querySelector(
        `[data-tour-guide="${e}"]`
      )), o;
    }, Z = async () => {
      if (!l.value) return;
      const e = n.animate && !!r.value;
      if (e && (T && clearTimeout(T), D.value = !0), r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), r.value = pe(l.value.target), !r.value) {
        console.warn(
          `Tour Guide: Target element "${l.value.target}" not found`
        );
        return;
      }
      l.value.tooltipTarget ? (B.value = pe(
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
      }), await new Promise((o) => setTimeout(o, 500))), r.value.style.position = "relative", r.value.style.zIndex = "9997", r.value.style.borderRadius = "8px", r.value.style.isolation = "isolate", r.value.setAttribute("data-tour-guide-interactive", "true"), g(), await j(), y.value ? L.value = {
        width: y.value.offsetWidth || 320,
        // fallback width
        height: y.value.offsetHeight || 200
        // fallback height
      } : L.value = { width: 320, height: 200 }, g(), e && (T && clearTimeout(T), T = setTimeout(() => {
        D.value = !1, T = null;
      }, 320));
    }, fe = async () => {
      n.steps.length !== 0 && (h.value = !0, i.value = 0, w(), n.allowInteractions || document.body.classList.add("tour-guide-active"), await j(), await Z(), L.value = { width: 320, height: 200 }, ce(), await new Promise((e) => setTimeout(e, 100)), y.value && (L.value = {
        width: y.value.offsetWidth || 320,
        height: y.value.offsetHeight || 200
      }), l.value?.beforeShow && await l.value.beforeShow(), k("start"), k("step-change", l.value, i.value), l.value?.afterShow && l.value.afterShow());
    }, se = async () => {
      l.value && c(l.value.id), l.value?.beforeHide && await l.value.beforeHide(), i.value < n.steps.length - 1 ? (i.value++, P(i.value), await j(), await Z(), l.value?.beforeShow && await l.value.beforeShow(), k("step-change", l.value, i.value), l.value?.afterShow && l.value.afterShow()) : he();
    }, re = async () => {
      i.value > 0 && (l.value?.beforeHide && await l.value.beforeHide(), i.value--, P(i.value), await j(), await Z(), l.value?.beforeShow && await l.value.beforeShow(), k("step-change", l.value, i.value), l.value?.afterShow && l.value.afterShow());
    }, te = () => {
      r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), ee(), n.allowInteractions || document.body.classList.remove("tour-guide-active"), h.value = !1, r.value = null, B.value = null, z.value = null, U.value = null, L.value = { width: 0, height: 0 }, T && clearTimeout(T), D.value = !1, t(), k("skip");
    }, he = () => {
      l.value && c(l.value.id), r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), ee(), n.allowInteractions || document.body.classList.remove("tour-guide-active"), h.value = !1, r.value = null, B.value = null, z.value = null, U.value = null, L.value = { width: 0, height: 0 }, T && clearTimeout(T), D.value = !1, t(), k("complete");
    }, Le = async (e) => {
      if (e >= 0 && e < n.steps.length) {
        for (let o = 0; o <= e; o++) {
          const a = n.steps[o];
          a && c(a.id);
        }
        i.value = e, P(i.value), await j(), await Z(), l.value?.beforeShow && await l.value.beforeShow(), k("step-change", l.value, i.value), l.value?.afterShow && l.value.afterShow();
      }
    };
    return me(() => {
      n.autoStart && fe();
    }), Ie(() => {
      T && clearTimeout(T), h.value && (ee(), n.allowInteractions || document.body.classList.remove("tour-guide-active"));
    }), ae(
      () => i.value,
      async () => {
        h.value && await Z();
      }
    ), ae(r, (e, o) => {
      o && ee(), e && h.value && (g(), ce());
    }), ae(B, () => {
      h.value && g();
    }), ae(
      y,
      (e) => {
        e && h.value && j(() => {
          L.value = {
            width: e.offsetWidth || 320,
            height: e.offsetHeight || 200
          }, W.value && W.value.observe(e);
        });
      },
      { immediate: !0 }
    ), s({
      startTourGuide: fe,
      skipTourGuide: te,
      completeTourGuide: he,
      nextStep: se,
      previousStep: re,
      goToStep: Le,
      isActive: ne(h),
      currentStepIndex: ne(i)
    }), (e, o) => (f(), m("div", null, [
      h.value && r.value ? (f(), m("div", {
        key: 0,
        style: N(we.value),
        class: q(["vtg-cutout", { "vtg-animated": e.animate && D.value }])
      }, null, 6)) : R("", !0),
      (f(), Ge(Me, { to: "body" }, [
        h.value && r.value ? (f(), m("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: y,
          style: N(Ce.value),
          class: q(["vtg-tooltip-anchor", { "vtg-animated": e.animate && D.value }]),
          "data-tour-guide-interactive": "true"
        }, [
          Oe(Ye, {
            visible: h.value,
            title: l.value?.title,
            content: l.value?.content,
            "allow-html": l.value?.allowHtml ?? e.allowHtml,
            direction: ue.value,
            "current-step": i.value + 1,
            "total-steps": e.steps.length,
            "show-previous": i.value > 0,
            "show-close": e.allowSkip,
            "show-actions": l.value?.showAction,
            "arrow-offset": ve.value,
            onNext: se,
            onPrevious: re,
            onClose: te,
            skipLabel: l.value?.skipLabel || O.value.skip,
            nextLabel: l.value?.nextLabel || O.value.next,
            prevLabel: l.value?.prevLabel || O.value.previous,
            finishLabel: l.value?.finishLabel || O.value.finish,
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
          }, We({ _: 2 }, [
            e.$slots.default ? {
              name: "default",
              fn: V((a) => [
                C(e.$slots, "default", X(Y({
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
              fn: V((a) => [
                C(e.$slots, "header", X(Y({
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
              fn: V((a) => [
                C(e.$slots, "content", X(Y({
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
              fn: V((a) => [
                C(e.$slots, "skip-button", X(Y({
                  ...a,
                  step: l.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length,
                  onSkip: te
                })))
              ]),
              key: "3"
            } : void 0,
            e.$slots.progress ? {
              name: "progress",
              fn: V((a) => [
                C(e.$slots, "progress", X(Y({
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
              fn: V((a) => [
                C(e.$slots, "actions", X(Y({
                  ...a,
                  step: l.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length,
                  onNext: se,
                  onPrevious: re,
                  onSkip: te
                })))
              ]),
              key: "5"
            } : void 0,
            e.$slots["step-content"] ? {
              name: "step-content",
              fn: V((a) => [
                C(e.$slots, "step-content", X(Y({
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
        ], 6)) : R("", !0)
      ]))
    ]));
  }
});
export {
  Je as TourGuideManager,
  Ye as TourGuideTooltip,
  qe as useTourGuide
};
