! function() {

		e = $(".js-hero"),
		i = $(".js-hero").find(".js-hero__inner"),
		n = $(".js-hero").find(".js-hero__bg").children(),
		s = 0,
		t = $(".js-hero").find(".js-hero__bg").children().length,
  o = !1,
		a = function() {
   		 0 > $(".js-hero").find(".js-hero__bg").children().length - 1,
   			$(".js-hero").find(".js-hero__bg").children().removeClass("is-active").eq(0).addClass("is-active"),
   			s++
	 },

	r = function() {
		!1 = setInterval(function() {
   		 0 > $(".js-hero").find(".js-hero__bg").children().length - 1 ,
   			$(".js-hero").find(".js-hero__bg").children().removeClass("is-active").eq(0).addClass("is-active"),
   			s++
	 }, 5e3)
	},

 l = function() {
		var e = $(window).height();
		$(".js-hero").find(".js-hero__inner").css("height", $(window).height())
	},

  setTimeout(function() {
			a(), r()}, 1700),
 $(window).on("my_ready my_change", function(e, i) {l()}),
  $(window).on("my_resizeH", function(e, i) {
		"lg" === i.new && l()}),
 $(window).on("my_resizeW", function(e, i) {
		"sm" === i.new && l()
	}), document.addEventListener("visibilitychange", function() {
		document.hidden ? clearInterval(o) : r()
	}), $(".js-scroll-animation").each(function(e) {
		var i = $(this),
			n = $(this).hasClass("is-culture"),
			s = $(this).hasClass("is-interview"),
			t = !1,
			o = function() {
				if (!t) {
					var e = PBR.scroll.scrollTop(),
						o = $(window).height();
					e >= PBR.scroll.offsetTop(i) - o && (t = !0, i.addClass("is-animate"), s ? j.show() : n && T.init())
				}
			};
		$(window).on("my_ready my_change", function(e, i) {
			PBR.scroll.addListener(o), o()
		}), $(window).on("my_resize", function(e, i) {
			o()
		})
	});
	var e, i, n, s, t, o, a, r, l, d, c, u, w, m, p, f, v, h, g, _, y, C, j = (d = $(".js-interview-swiper"), c = "", u = !1, w = function(e) {
			return e < 10 && (e = "0" + e), e
		}, c = new Swiper(d[0], {
			loop: !0,
			loopAdditionalSlides: 2,
			centeredSlides: !0,
			slidesPerView: "auto",
			speed: 100,
			spaceBetween: 0,
			simulateTouch: !1,
			navigation: {
				nextEl: ".js-interview-swiper__next",
				prevEl: ".js-interview-swiper__prev"
			},
			pagination: {
				el: ".js-interview-swiper__pagination",
				type: "custom",
				renderCustom: function(e, i, n) {
					return '<span class="swiper-pagination-current">' + w(i) + '</span><span class="swiper-pagination-total">' + w(n) + "</span>"
				}
			},
			on: {
				destroy: function() {
					d.removeClass("is-swipable")
				},
				slideChangeTransitionStart: function() {
					d.removeClass("is-end").addClass("is-start")
				},
				slideChangeTransitionEnd: function() {
					d.removeClass("is-start").addClass("is-end")
				}
			}
		}), $(window).on("my_resize my_change", function(e, i) {
			clearTimeout(u), u = setTimeout(function() {
				c.update()
			}, 300)
		}), {
			show: function() {
				setTimeout(function() {
					d.addClass("is-swipable"), c.slideTo(1)
				}, 600)
			}
		}),
		T = (m = $(".js-crosstalk-swiper"), p = "", $(window).on("my_ready my_change", function(e, i) {
			"lg" === i.new ? "sm" === i.old && (p.destroy(!0, !0), p = "") : p = new Swiper(m[0], {
				autoHeight: !0,
				loop: !0,
				slidesPerView: 1,
				speed: 600,
				spaceBetween: 0,
				simulateTouch: !1,
				navigation: {
					nextEl: ".js-crosstalk-swiper__next",
					prevEl: ".js-crosstalk-swiper__prev"
				},
				on: {
					init: function() {
						m.addClass("is-swipable")
					},
					destroy: function() {
						m.removeClass("is-swipable")
					}
				}
			})
		}), f = $(".js-culture-swiper"), v = "", $(window).on("my_ready my_change", function(e, i) {
			"lg" === i.new ? v = new Swiper(f[0], {
				initialSlide: 1,
				allowTouchMove: !1,
				loop: !0,
				centeredSlides: !0,
				slidesPerView: "auto",
				speed: 600,
				spaceBetween: 0,
				simulateTouch: !1,
				on: {
					init: function() {
						f.addClass("is-swipable")
					},
					destroy: function() {
						f.removeClass("is-swipable")
					}
				}
			}) : "lg" === i.old && (v.destroy(!0, !0), v = "")
		}), h = $(".js-culture-image"), g = 0, _ = !1, y = function() {
			if ("lg" === PBR.ev.mediaQuery.new) var e = [4, 2, 5, 1, 0, 6, 3];
			else e = [3, 1, 2, 0];
			g > e.length - 1 && (g = 0);
			var i = e[g],
				n = h.find(".js-culture-image__item"),
				s = n.filter("[data-index=" + i + "]");
			n.removeClass("is-animate"), s.each(function() {
				var e = $(this).find("img"),
					i = e.filter(".is-active");
				e.removeClass("is-active").not(i).addClass("is-active"), $(this).addClass("is-animate")
			}), g++
		}, C = function() {
			_ = setInterval(y, 2500)
		}, document.addEventListener("visibilitychange", function() {
			document.hidden ? clearInterval(_) : C()
		}), {
			init: function() {
				setTimeout(function() {
					y(), C()
				}, 2300)
			}
		})
}();
