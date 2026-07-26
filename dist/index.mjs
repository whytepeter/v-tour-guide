import { defineComponent as me, useCssVars as Be, computed as T, createElementBlock as g, createCommentVNode as R, openBlock as f, normalizeStyle as N, normalizeClass as q, createElementVNode as j, renderSlot as S, toDisplayString as ee, Fragment as ne, createTextVNode as He, renderList as Ae, reactive as Ie, onMounted as we, readonly as ue, ref as w, onUnmounted as Ge, watch as se, nextTick as U, createBlock as Oe, Teleport as We, createVNode as Me, createSlots as Ee, withCtx as V, normalizeProps as X, guardReactiveProps as Y } from "vue";
const Re = { class: "vtg-stack" }, Ne = {
  key: 0,
  class: "vtg-title"
}, xe = ["innerHTML"], ze = {
  key: 1,
  class: "vtg-progress"
}, Fe = { class: "vtg-progress-track" }, Ve = { class: "vtg-action-group" }, Xe = /* @__PURE__ */ me({
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
    Be((t) => ({
      "056587cd": s.skipButtonHoverColor,
      "75856eae": s.buttonHoverColor
    }));
    const s = I, G = T(() => s.currentStep >= s.totalSteps), n = T(() => (t) => {
      const m = t <= s.currentStep, L = Math.abs(t - s.currentStep);
      if (m)
        return {
          backgroundColor: s.progressActiveColor,
          opacity: 1
        };
      {
        const h = Math.max(0.2, 1 - L * 0.3);
        return {
          backgroundColor: s.progressInactiveColor,
          opacity: h
        };
      }
    }), x = T(() => {
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
    }), W = T(() => {
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
    }), d = T(() => {
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
    }), C = T(() => ({
      backgroundColor: s.buttonBackgroundColor,
      color: s.buttonTextColor,
      "--hover-bg": s.buttonHoverColor
    })), c = T(() => ({
      color: s.skipButtonColor,
      "--hover-color": s.skipButtonHoverColor
    }));
    return (t, m) => t.visible ? (f(), g("div", {
      key: 0,
      class: q(["vtg-tooltip", "animate-in", s.tooltipClass]),
      style: N(x.value)
    }, [
      j("div", {
        class: q(["arrow-base", W.value]),
        style: N(d.value)
      }, null, 6),
      j("div", Re, [
        j("div", {
          class: q(["vtg-header", s.headerClass])
        }, [
          S(t.$slots, "header", {
            title: t.title,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, () => [
            t.title ? (f(), g("h3", Ne, ee(t.title), 1)) : R("", !0)
          ], !0),
          S(t.$slots, "skip-button", {
            skipLabel: t.skipLabel,
            onClose: () => t.$emit("close")
          }, () => [
            t.showClose ? (f(), g("button", {
              key: 0,
              type: "button",
              onClick: m[0] || (m[0] = (L) => t.$emit("close")),
              class: "custom-skip-btn",
              style: N(c.value)
            }, ee(t.skipLabel), 5)) : R("", !0)
          ], !0)
        ], 2),
        t.content || t.$slots.default || t.$slots.content ? (f(), g("div", {
          key: 0,
          class: q(["tour-guide-content", s.contentClass])
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
          }, void 0, !0) : t.allowHtml ? (f(), g("span", {
            key: 2,
            innerHTML: t.content
          }, null, 8, xe)) : (f(), g(ne, { key: 3 }, [
            He(ee(t.content), 1)
          ], 64))
        ], 2)) : R("", !0),
        t.showActions ? (f(), g("div", {
          key: 1,
          class: q(["vtg-actions", s.actionsClass])
        }, [
          t.$slots.progress ? S(t.$slots, "progress", {
            key: 0,
            currentStep: t.currentStep,
            totalSteps: t.totalSteps
          }, void 0, !0) : (f(), g("div", ze, [
            j("div", Fe, [
              (f(!0), g(ne, null, Ae(t.totalSteps, (L) => (f(), g("div", {
                key: L,
                class: "vtg-progress-dot",
                style: N(n.value(L))
              }, null, 4))), 128))
            ])
          ])),
          j("div", Ve, [
            t.$slots.actions ? S(t.$slots, "actions", {
              key: 0,
              showPrevious: t.showPrevious,
              isLastStep: G.value,
              prevLabel: t.prevLabel,
              nextLabel: t.nextLabel,
              finishLabel: t.finishLabel,
              onPrevious: () => t.$emit("previous"),
              onNext: () => t.$emit("next")
            }, void 0, !0) : (f(), g(ne, { key: 1 }, [
              t.showPrevious ? (f(), g("button", {
                key: 0,
                type: "button",
                onClick: m[1] || (m[1] = (L) => t.$emit("previous")),
                class: "custom-action-btn",
                style: N(C.value)
              }, ee(t.prevLabel), 5)) : R("", !0),
              j("button", {
                type: "button",
                onClick: m[2] || (m[2] = (L) => t.$emit("next")),
                class: "custom-action-btn",
                style: N(C.value)
              }, ee(G.value ? t.finishLabel : t.nextLabel), 5)
            ], 64))
          ])
        ], 2)) : R("", !0)
      ])
    ], 6)) : R("", !0);
  }
}), Ye = (I, s) => {
  const G = I.__vccOpts || I;
  for (const [n, x] of s)
    G[n] = x;
  return G;
}, qe = /* @__PURE__ */ Ye(Xe, [["__scopeId", "data-v-11b0bda2"]]), p = Ie({
  isActive: !1,
  currentStep: 0,
  completedSteps: [],
  hasSeenTourGuide: !1
}), De = () => {
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
  }, W = () => {
    p.isActive = !1, p.hasSeenTourGuide = !0, s();
  }, d = () => {
    p.isActive = !1, p.currentStep = 0, p.completedSteps = [], p.hasSeenTourGuide = !1, s();
  }, C = (c) => p.completedSteps.includes(c);
  return we(() => {
    I();
  }), {
    // State
    tourGuideState: ue(p),
    // Actions
    startTourGuide: G,
    completeStep: n,
    updateCurrentStep: x,
    finishTourGuide: W,
    resetTourGuide: d,
    isStepCompleted: C,
    // Helpers
    loadTourGuideState: I,
    saveTourGuideState: s
  };
}, je = /* @__PURE__ */ me({
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
    tooltip: {}
  },
  emits: ["start", "complete", "skip", "step-change"],
  setup(I, { expose: s, emit: G }) {
    const n = I, x = {
      skip: "Skip",
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    }, W = T(() => ({
      ...x,
      ...n.labels
    })), d = T(() => {
      const e = n.tooltip || {}, l = o.value?.tooltip || {};
      return {
        ...e,
        ...l
      };
    }), C = G, {
      completeStep: c,
      finishTourGuide: t,
      startTourGuide: m,
      updateCurrentStep: L
    } = De(), h = w(!1), i = w(0), D = w(!1);
    let $ = null;
    const r = w(null), P = w(null), b = w(), z = w(null), K = w(null), k = w({
      width: 0,
      height: 0
    }), ve = w("bottom"), de = w(0), Q = w(null), Z = w(null), M = w(null), o = T(() => n.steps[i.value]), be = T(() => {
      if (!r.value || !o.value || !z.value)
        return {};
      const e = z.value, l = n.highlightPadding, a = o.value.radius ?? 8, u = e.top - l, y = e.left - l, O = e.width + l * 2, v = e.height + l * 2;
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
    }), ye = (e) => {
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
    }, Se = (e, l, a) => {
      const u = ye(e);
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
      ], O = y.filter((v) => v.space >= v.needed);
      return O.length > 0 ? O.sort((v, F) => F.space - v.space)[0].name : y.sort((v, F) => F.space - v.space)[0].name;
    }, Ce = (e, l, a) => {
      if (a === "top" || a === "bottom") {
        const u = e.left + e.width / 2, y = l.left + l.width / 2;
        return u - y;
      } else {
        const u = e.top + e.height / 2, y = l.top + l.height / 2;
        return u - y;
      }
    }, ke = T(() => {
      if (!o.value) return {};
      const e = P.value || r.value, l = K.value || z.value;
      if (!e || !l) return {};
      const a = l, u = o.value.direction, y = o.value.offsetX || 0, O = o.value.offsetY || 0, v = k.value.width > 0 ? k.value : { width: 320, height: 200 }, F = Se(
        a,
        v,
        u
      );
      ve.value = F;
      let H = 0, A = 0;
      const le = 12;
      switch (F) {
        case "top":
          H = a.top - v.height - le + O, A = a.left + a.width / 2 - v.width / 2 + y;
          break;
        case "bottom":
          H = a.bottom + le + O, A = a.left + a.width / 2 - v.width / 2 + y;
          break;
        case "left":
          H = a.top + a.height / 2 - v.height / 2 + O, A = a.left - v.width - le + y;
          break;
        case "right":
          H = a.top + a.height / 2 - v.height / 2 + O, A = a.right + le + y;
          break;
      }
      const ae = {
        width: window.innerWidth,
        height: window.innerHeight
      }, E = n.viewportMargin;
      A < E ? A = E : A + v.width > ae.width - E && (A = ae.width - v.width - E), H < E ? H = E : H + v.height > ae.height - E && (H = ae.height - v.height - E);
      const Pe = {
        left: A,
        top: H,
        width: v.width,
        height: v.height
      };
      return de.value = Ce(
        a,
        Pe,
        F
      ), {
        top: `${H}px`,
        left: `${A}px`,
        zIndex: 9999,
        transform: "none"
        // We handle positioning directly now
      };
    }), B = () => {
      if (r.value) {
        const e = r.value.getBoundingClientRect(), l = z.value;
        (!l || l.top !== e.top || l.left !== e.left || l.width !== e.width || l.height !== e.height) && (z.value = e);
      }
      if (P.value) {
        const e = P.value.getBoundingClientRect(), l = K.value;
        (!l || l.top !== e.top || l.left !== e.left || l.width !== e.width || l.height !== e.height) && (K.value = e);
      }
      if (b.value) {
        const e = {
          width: b.value.offsetWidth,
          height: b.value.offsetHeight
        };
        (k.value.width !== e.width || k.value.height !== e.height) && (k.value = e);
      }
    }, J = () => {
      n.fluid && (D.value = !0, $ && clearTimeout($), $ = setTimeout(() => {
        D.value = !1, $ = null;
      }, 120)), B();
    }, Te = () => {
      if (!n.trackAnimations) return;
      const e = () => {
        h.value && r.value && (B(), Q.value = requestAnimationFrame(e));
      };
      Q.value = requestAnimationFrame(e);
    }, Le = () => {
      Q.value && (cancelAnimationFrame(Q.value), Q.value = null);
    }, ce = (e) => {
      const l = [];
      let a = e.parentElement;
      for (; a && a !== document.body; ) {
        const u = window.getComputedStyle(a);
        (u.overflow === "auto" || u.overflow === "scroll" || u.overflowY === "auto" || u.overflowY === "scroll" || u.overflowX === "auto" || u.overflowX === "scroll") && l.push(a), a = a.parentElement;
      }
      return l;
    }, pe = () => {
      if (!r.value) return;
      window.addEventListener("scroll", J, { passive: !0 }), document.addEventListener("scroll", J, { passive: !0 }), window.addEventListener("resize", B, { passive: !0 }), ce(r.value).forEach((l) => {
        l.addEventListener("scroll", J, { passive: !0 });
      }), Te(), Z.value = new MutationObserver(() => {
        B();
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
        B();
      }), M.value.observe(r.value), b.value && M.value.observe(b.value));
    }, te = () => {
      window.removeEventListener("scroll", J), document.removeEventListener("scroll", J), window.removeEventListener("resize", B), r.value && ce(r.value).forEach((l) => {
        l.removeEventListener("scroll", J);
      }), Le(), Z.value && (Z.value.disconnect(), Z.value = null), M.value && (M.value.disconnect(), M.value = null);
    }, fe = (e) => {
      let l = document.querySelector(e);
      return l || (l = document.querySelector(
        `[data-tour-guide="${e}"]`
      )), l;
    }, _ = async () => {
      if (o.value) {
        if (r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), r.value = fe(o.value.target), !r.value) {
          console.warn(
            `Tour Guide: Target element "${o.value.target}" not found`
          );
          return;
        }
        o.value.tooltipTarget ? (P.value = fe(
          o.value.tooltipTarget
        ), P.value || (console.warn(
          `Tour Guide: Tooltip target element "${o.value.tooltipTarget}" not found, falling back to main target`
        ), P.value = null)) : P.value = null, n.scrollToView && (r.value.scrollIntoView({
          behavior: "smooth",
          // Smooth animation
          block: "center",
          // Center vertically in viewport
          inline: "nearest"
          // Minimal horizontal scrolling
        }), await new Promise((e) => setTimeout(e, 500))), r.value.style.position = "relative", r.value.style.zIndex = "9997", r.value.style.borderRadius = "8px", r.value.style.isolation = "isolate", r.value.setAttribute("data-tour-guide-interactive", "true"), B(), await U(), b.value ? k.value = {
          width: b.value.offsetWidth || 320,
          // fallback width
          height: b.value.offsetHeight || 200
          // fallback height
        } : k.value = { width: 320, height: 200 }, B();
      }
    }, he = async () => {
      n.steps.length !== 0 && (h.value = !0, i.value = 0, m(), n.allowInteractions || document.body.classList.add("tour-guide-active"), await U(), await _(), k.value = { width: 320, height: 200 }, pe(), await new Promise((e) => setTimeout(e, 100)), b.value && (k.value = {
        width: b.value.offsetWidth || 320,
        height: b.value.offsetHeight || 200
      }), o.value?.beforeShow && await o.value.beforeShow(), C("start"), C("step-change", o.value, i.value), o.value?.afterShow && o.value.afterShow());
    }, re = async () => {
      o.value && c(o.value.id), o.value?.beforeHide && await o.value.beforeHide(), i.value < n.steps.length - 1 ? (i.value++, L(i.value), await U(), await _(), o.value?.beforeShow && await o.value.beforeShow(), C("step-change", o.value, i.value), o.value?.afterShow && o.value.afterShow()) : ge();
    }, ie = async () => {
      i.value > 0 && (o.value?.beforeHide && await o.value.beforeHide(), i.value--, L(i.value), await U(), await _(), o.value?.beforeShow && await o.value.beforeShow(), C("step-change", o.value, i.value), o.value?.afterShow && o.value.afterShow());
    }, oe = () => {
      r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), te(), n.allowInteractions || document.body.classList.remove("tour-guide-active"), h.value = !1, r.value = null, P.value = null, z.value = null, K.value = null, k.value = { width: 0, height: 0 }, $ && clearTimeout($), D.value = !1, t(), C("skip");
    }, ge = () => {
      o.value && c(o.value.id), r.value && (r.value.style.removeProperty("z-index"), r.value.style.removeProperty("position"), r.value.style.removeProperty("border-radius"), r.value.style.removeProperty("pointer-events"), r.value.style.removeProperty("isolation"), r.value.removeAttribute("data-tour-guide-interactive")), te(), n.allowInteractions || document.body.classList.remove("tour-guide-active"), h.value = !1, r.value = null, P.value = null, z.value = null, K.value = null, k.value = { width: 0, height: 0 }, $ && clearTimeout($), D.value = !1, t(), C("complete");
    }, $e = async (e) => {
      if (e >= 0 && e < n.steps.length) {
        for (let l = 0; l <= e; l++) {
          const a = n.steps[l];
          a && c(a.id);
        }
        i.value = e, L(i.value), await U(), await _(), o.value?.beforeShow && await o.value.beforeShow(), C("step-change", o.value, i.value), o.value?.afterShow && o.value.afterShow();
      }
    };
    return we(() => {
      n.autoStart && he();
    }), Ge(() => {
      $ && clearTimeout($), h.value && (te(), n.allowInteractions || document.body.classList.remove("tour-guide-active"));
    }), se(
      () => i.value,
      async () => {
        h.value && await _();
      }
    ), se(r, (e, l) => {
      l && te(), e && h.value && (B(), pe());
    }), se(P, () => {
      h.value && B();
    }), se(
      b,
      (e) => {
        e && h.value && U(() => {
          k.value = {
            width: e.offsetWidth || 320,
            height: e.offsetHeight || 200
          }, M.value && M.value.observe(e);
        });
      },
      { immediate: !0 }
    ), s({
      startTourGuide: he,
      skipTourGuide: oe,
      completeTourGuide: ge,
      nextStep: re,
      previousStep: ie,
      goToStep: $e,
      isActive: ue(h),
      currentStepIndex: ue(i)
    }), (e, l) => (f(), g("div", null, [
      h.value && r.value ? (f(), g("div", {
        key: 0,
        style: N(be.value),
        class: q(["vtg-cutout", { "vtg-animated": e.fluid && !D.value }])
      }, null, 6)) : R("", !0),
      (f(), Oe(We, { to: "body" }, [
        h.value && r.value ? (f(), g("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: b,
          style: N(ke.value),
          class: q(["vtg-tooltip-anchor", { "vtg-animated": e.fluid && !D.value }]),
          "data-tour-guide-interactive": "true"
        }, [
          Me(qe, {
            visible: h.value,
            title: o.value?.title,
            content: o.value?.content,
            "allow-html": o.value?.allowHtml ?? e.allowHtml,
            direction: ve.value,
            "current-step": i.value + 1,
            "total-steps": e.steps.length,
            "show-previous": i.value > 0,
            "show-close": e.allowSkip,
            "show-actions": o.value?.showAction,
            "arrow-offset": de.value,
            onNext: re,
            onPrevious: ie,
            onClose: oe,
            skipLabel: o.value?.skipLabel || W.value.skip,
            nextLabel: o.value?.nextLabel || W.value.next,
            prevLabel: o.value?.prevLabel || W.value.previous,
            finishLabel: o.value?.finishLabel || W.value.finish,
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
          }, Ee({ _: 2 }, [
            e.$slots.default ? {
              name: "default",
              fn: V((a) => [
                S(e.$slots, "default", X(Y({
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
                S(e.$slots, "header", X(Y({
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
                S(e.$slots, "content", X(Y({
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
                S(e.$slots, "skip-button", X(Y({
                  ...a,
                  step: o.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length,
                  onSkip: oe
                })))
              ]),
              key: "3"
            } : void 0,
            e.$slots.progress ? {
              name: "progress",
              fn: V((a) => [
                S(e.$slots, "progress", X(Y({
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
                S(e.$slots, "actions", X(Y({
                  ...a,
                  step: o.value,
                  stepIndex: i.value,
                  currentStep: i.value + 1,
                  totalSteps: e.steps.length,
                  onNext: re,
                  onPrevious: ie,
                  onSkip: oe
                })))
              ]),
              key: "5"
            } : void 0,
            e.$slots["step-content"] ? {
              name: "step-content",
              fn: V((a) => [
                S(e.$slots, "step-content", X(Y({
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
  je as TourGuideManager,
  qe as TourGuideTooltip,
  De as useTourGuide
};
