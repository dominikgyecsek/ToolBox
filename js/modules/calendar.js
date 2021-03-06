function isItToday() {

    var calendarToday = $("#calendar").find(".today").text();
    var today = new Date();
    today = today.getDate();
    if ( today != calendarToday ) recalculateCalendar();

}

function recalculateCalendar() {

    $("#calendar").empty();

    (function() {
      var e, t;
      e = {
        locale_name: "en",
        locale: {
          month: {
            name: [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            gen: [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            abbr: [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            abbr2: [null, "Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
          },
          day: {
            name: [null, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            abbr: [null, "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            part: {
              night: "night",
              morning: "morning",
              day: "day",
              evening: "evening"
            }
          }
        }
      }, t = typeof window == "object" ? window : global, t.DefaultMomentLocale = e
    }).call(this),
      function() {
        var e, t, n = this;
        Date.prototype.to_m = function() {
          return new e(n)
        }, Object._size = function(e) {
          var t, n;
          n = 0;
          for (t in e) e.hasOwnProperty(t) && n++;
          return n
        }, e = function() {
          function e(t) {
            var n, r, i;
            this.scope = typeof window == "object" ? window : global, Object._size(this.locales) === 0 && (i = [DefaultMomentLocale.locale_name, DefaultMomentLocale.locale], r = i[0], n = i[1], e.add_locale(r, n), e.set_default_locale(r)), this.t = this.current_locale, this.parse(t)
          }
          return e.o_mori = "Respice post te! Hominem te memento! (Look behind you! Remember that you are but a man!)", e.to_leading_zero = function(e, t) {
            var n, r, i;
            return t == null && (t = !1), n = Math.abs(e), i = e < 0 ? "-" : "", i = t ? i : "", r = Math.abs(e) < 10 ? "" + i + "0" + n : "" + i + n, r
          }, e.prototype.locales = {}, e.prototype.locale_name = null, e.prototype.current_locale = null, e["new"] = function(t) {
            return new e(t)
          }, e.add_locale = function(t, n) {
            return e.prototype.locales[t] = n, e.prototype.locale_name = t
          }, e.set_default_locale = function(t) {
            return e.prototype.locale_name = t, e.prototype.current_locale = e.prototype.locales[t]
          }, e.want = function(t) {
            return t = t instanceof e ? t : new e(t), t
          }, e.prototype.set_locale = function(e) {
            return this.locale_name = e, this.current_locale = this.locales[e], this.t = this.current_locale
          }, e.prototype.day_name = function() {
            return this.t.day.name[this.day_of_week()]
          }, e.prototype.month_name = function() {
            return this.t.month.name[this.month]
          }, e.prototype.to_i = function() {
            return this.unix
          }, e.prototype.to_a = function() {
            return [this.year, this.month, this.day, this.hours, this.mins, this.secs, this.ms, this.shift]
          }, e.prototype.to_hash = function() {
            return {
              year: this.year,
              month: this.month,
              day: this.day,
              hours: this.hours,
              mins: this.mins,
              secs: this.secs,
              ms: this.ms,
              shift: this.shift
            }
          }, e.prototype.set = function(e) {
            return this.parse(e)
          }, e.prototype.set_year = function(e) {
            var t;
            return t = this.date, t.setYear(e), this.parse(t)
          }, e.prototype.set_month = function(e) {
            var t;
            return t = this.date, t.setMonth(e - 1), this.parse(t)
          }, e.prototype.set_day = function(e) {
            var t;
            return t = this.date, t.setDate(e), this.parse(t)
          }, e.prototype.set_hours = function(e) {
            var t;
            return t = this.date, t.setHours(e), this.parse(t)
          }, e.prototype.set_mins = function(e) {
            var t;
            return t = this.date, t.setMinutes(e), this.parse(t)
          }, e.prototype.set_secs = function(e) {
            var t;
            return t = this.date, t.setSeconds(e), this.parse(t)
          }, e.prototype.set_ms = function(e) {
            var t;
            return t = this.date, t.setMilliseconds(e), this.parse(t)
          }, e.prototype.set_unix = function(e) {
            return this.parse(e)
          }, e.prototype.set_unix_ms = function(e) {
            return this.date_parse(new Date(e))
          }, e.prototype.set_date_by_instances = function() {
            var e, t;
            return e = new Date(0), t = this.month > 0 ? this.month - 1 : this.month, e.setFullYear(this.year), e.setMonth(t), e.setDate(this.day), e.setHours(this.hours), e.setMinutes(this.mins), e.setSeconds(this.secs), e.setMilliseconds(this.ms), this.date = e
          }, e.prototype._year = function(e) {
            return e == null && (e = new Date), e.getFullYear()
          }, e.prototype._month = function(e) {
            return e == null && (e = new Date), e.getMonth() + 1
          }, e.prototype._day = function(e) {
            return e == null && (e = new Date), e.getDate()
          }, e.prototype._hours = function(e) {
            return e == null && (e = new Date), e.getHours()
          }, e.prototype._mins = function(e) {
            return e == null && (e = new Date), e.getMinutes()
          }, e.prototype._secs = function(e) {
            return e == null && (e = new Date), e.getSeconds()
          }, e.prototype._ms = function(e) {
            return e == null && (e = new Date), e.getMilliseconds()
          }, e.prototype._shift = function(e) {
            return e == null && (e = new Date), -(e.getTimezoneOffset() / 60)
          }, e.prototype._unix_ms = function(e) {
            return e == null && (e = new Date), e.getTime()
          }, e.prototype.parse = function(t) {
            var n;
            t || this.date_parse(), typeof t == "string" && (n = t === "", n && this.date_parse(), n || this.string_parse(t)), typeof t == "number" && this.number_parse(t * 1e3);
            if (typeof t == "object") {
              if (t instanceof Date) return this.date_parse(t);
              if (t instanceof Array) return this.array_parse(t);
              if (t instanceof Object) return this.hash_parse(t);
              if (t instanceof e) return new e(t.to_a())
            }
            return this
          }, e.prototype.date_parse = function(e) {
            return e == null && (e = new Date), this.date = e, this.year = this._year(this.date), this.month = this._month(this.date), this.day = this._day(this.date), this.hours = this._hours(this.date), this.mins = this._mins(this.date), this.secs = this._secs(this.date), this.ms = this._ms(this.date), this.shift = this._shift(this.date), this.unix_ms = this._unix_ms(this.date), this.unix = Math.round(this.unix_ms / 1e3), this
          }, e.prototype.array_parse = function(e) {
            var t;
            return e.length === 0 ? this.date_parse() : (t = new Date(0), this.year = e[0] ? e[0] : this._year(t), this.month = e[1] ? e[1] : 1, this.day = e[2] ? e[2] : 1, this.hours = e[3] ? e[3] : 0, this.mins = e[4] ? e[4] : 0, this.secs = e[5] ? e[5] : 0, this.ms = e[6] ? e[6] : 0, this.shift = e[7] ? e[7] : this._shift(t), this.set_date_by_instances(), this.date_parse(this.date))
          }, e.prototype.hash_parse = function(e) {
            var t, n;
            return t = !e.year && !e.month && !e.day && !e.hours && !e.mins && !e.secs && !e.ms, t ? this.date_parse() : (n = new Date(0), this.year = e.year ? e.year : this._year(n), this.month = e.month ? e.month : 1, this.day = e.day ? e.day : 1, this.hours = e.hours ? e.hours : 0, this.mins = e.mins ? e.mins : 0, this.secs = e.secs ? e.secs : 0, this.ms = e.ms ? e.ms : 0, this.shift = e.shift ? e.shift : this._shift(n), this.set_date_by_instances(), this.date_parse(this.date))
          }, e.prototype.string_parse = function(e) {
            var t;
            return e.match("-") && e.match(":") && !e.match("T") && (e = e.replace(/-/g, "/")), e.match("\\.") && !e.match(":") ? this.array_parse(e.split(".")) : (t = new Date(Date.parse(e)), this.date_parse(t))
          }, e.prototype.number_parse = function(e) {
            var t;
            return t = new Date(e), this.date_parse(t)
          }, e
        }(), t = typeof window == "object" ? window : global, t.Moment = e, t.to_lz = e.to_leading_zero, e.add_locale(DefaultMomentLocale.locale_name, DefaultMomentLocale.locale), e.set_default_locale("en")
      }.call(this),
      function() {
        Moment.prototype.max_days = 42, Moment.prototype.shift_months = function(e) {
          var t;
          return t = this.month + e, t = t <= 0 ? t - 1 : t, new Moment([this.year, t])
        }, Moment.today = function(e) {
          var t;
          return t = new Moment, t.today(e)
        }, Moment.prototype.today = function(e) {
          var t;
          return t = this, e = Moment.want(e), t.year === e.year && t.month === e.month && t.day === e.day
        }, Moment.prototype.month_length = function(e, t) {
          return e == null && (e = this.year), t == null && (t = this.month), (new Date(e, t, 0)).getDate()
        }, Moment.prototype.prev_month_length = function() {
          return (new Date(this.year, this.month - 1, 0)).getDate()
        }, Moment.prototype.next_month_length = function() {
          return (new Date(this.year, this.month + 1, 0)).getDate()
        }, Moment.prototype.day_of_week = function(e) {
          var t;
          return e == null && (e = this.date), t = e.getDay(), t = t === 0 ? 7 : t, t
        }, Moment.prototype.first_day_of_month = function() {
          var e;
          return e = (new Date(this.year, this.month - 1, 1)).getDay(), e = e === 0 ? 7 : e, e
        }, Moment.prototype.last_day_of_month = function() {
          var e, t;
          return t = this.month_length(this.year, this.month), e = (new Date(this.year, this.month - 1, t)).getDay(), e = e === 0 ? 7 : e, e
        }, Moment.prototype.days_before_month = function() {
          return this.first_day_of_month() - 1
        }, Moment.prototype.days_after_month = function() {
          return this.max_days - (this.days_before_month() + this.month_length())
        }
      }.call(this),
      function() {
        Moment.prototype.part_of_day = function() {
          var e;
          return e = this.is_night() ? this.t.day.part.night : this.is_morning() ? this.t.day.part.morning : this.is_day() ? this.t.day.part.day : this.t.day.part.evening
        }, Moment.prototype.is_night = function() {
          return this.hours < 6
        }, Moment.prototype.is_morning = function() {
          return this.hours >= 6 && this.hours < 12
        }, Moment.prototype.is_day = function() {
          return this.hours >= 12 && this.hours < 18
        }, Moment.prototype.is_evening = function() {
          return this.hours >= 18
        }, Moment.prototype.is_weekend = function() {
          var e;
          return e = this.day_of_week(), e === 6 || e === 7
        }, Moment.prototype.is_monday = function() {
          return this.day_of_week() === 1
        }, Moment.prototype.is_tuesday = function() {
          return this.day_of_week() === 2
        }, Moment.prototype.is_wednesday = function() {
          return this.day_of_week() === 3
        }, Moment.prototype.is_thursday = function() {
          return this.day_of_week() === 4
        }, Moment.prototype.is_friday = function() {
          return this.day_of_week() === 5
        }, Moment.prototype.is_saturday = function() {
          return this.day_of_week() === 6
        }, Moment.prototype.is_sunday = function() {
          return this.day_of_week() === 7
        }, Moment.prototype.is_mon = function() {
          return this.is_monday()
        }, Moment.prototype.is_tue = function() {
          return this.is_tuesday()
        }, Moment.prototype.is_wed = function() {
          return this.is_wednesday()
        }, Moment.prototype.is_thu = function() {
          return this.is_thursday()
        }, Moment.prototype.is_fri = function() {
          return this.is_friday()
        }, Moment.prototype.is_sat = function() {
          return this.is_saturday()
        }, Moment.prototype.is_sun = function() {
          return this.is_sunday()
        }
      }.call(this),
      function() {
        Moment.prototype.less = function(e) {
          return e == null && (e = new Date), e = Moment.want(e), this.unix_ms < e.unix_ms
        }, Moment.prototype.less_or_equal = function(e) {
          return e == null && (e = new Date), e = Moment.want(e), this.unix_ms <= e.unix_ms
        }, Moment.prototype.equal = function(e) {
          return e == null && (e = new Date), e = Moment.want(e), this.unix_ms === e.unix_ms
        }, Moment.prototype.greater_or_equal = function(e) {
          return e == null && (e = new Date), e = Moment.want(e), this.unix_ms >= e.unix_ms
        }, Moment.prototype.greater = function(e) {
          return e == null && (e = new Date), e = Moment.want(e), this.unix_ms > e.unix_ms
        }, Moment.prototype.l = function(e) {
          return this.less(e)
        }, Moment.prototype.loe = function(e) {
          return this.less_or_equal(e)
        }, Moment.prototype.e = function(e) {
          return this.equal(e)
        }, Moment.prototype.goe = function(e) {
          return this.greater_or_equal(e)
        }, Moment.prototype.g = function(e) {
          return this.greater(e)
        }
      }.call(this),
      function() {
        this.log = function(e) {
          return console.log(e)
        }, this.CalendarItems = function() {
          function e(e) {
            this.calendar = e, this.id = this.calendar.id, this.block = this.calendar.block, this.current_month = null
          }
          return e.prototype.first_month = function() {
            return $("" + this.id + " .months .month").first()
          }, e.prototype.month_width = function() {
            return this._mwidth = this._mwidth ? this._mwidth : this.first_month().outerWidth(!0)
          }, e.prototype.viewport = function() {
            return this._viewport = this._viewport ? this._viewport : $("" + this.id + " .months .viewport")
          }, e.prototype.months = function() {
            return this._month = this._month ? this._month : $("" + this.id + " .months")
          }, e.prototype.left = function() {
            return this._left = this._left ? this._left : $("" + this.id + " .nav i")
          }, e.prototype.right = function() {
            return this._right = this._right ? this._right : $("" + this.id + " .nav b")
          }, e
        }(), this.CalendarView = function() {
          function e(e) {
            this.calendar = e, this.id = this.calendar.id
          }
          return e.prototype.template = function(e) {
            return e == null && (e = ""),
              "<div data-module='16' data-id='0' data-theme='" + m.getDefaultSkin(10) + "' class='frame cal open-module frame-mobile-center'>\
                " + m.controllers + "\
                <div class='content'>" + 
                  "<div class='calendar'>\n\
                    <div class='nav'>\n\
                      <i class='material-icons' id='previous-month'>keyboard_arrow_left</i>\
                      <b class='material-icons' id='next-month'>keyboard_arrow_right </b>\n\
                    </div>\n\
                    <div class='viewport'>\n\
                      <div class='months'>\n" + 
                        e + "\n\
                      </div>\n\
                    </div>\n\
                  </div>\
                </div>\
              </div>"
          }, e.prototype.days_names = function() {
            var e, t, n, r;
            e = "";
            for (t = r = 1; r <= 7; t = ++r) n = this.calendar.options.locale.day.abbr[t], e += "<i>" + n + "</i>";
            return e
          }, e.prototype.days = function(e) {
            var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v;
            n = "", l = new Moment, i = e.days_before_month(), f = e.prev_month_length(), u = f - i;
            if (i > 0)
              for (s = h = 0, v = i - 1; 0 <= v ? h <= v : h >= v; s = 0 <= v ? ++h : --h) a = u + s, n += "<b>" + a + "</b>";
            o = e.month_length();
            for (s = p = 1; 1 <= o ? p <= o : p >= o; s = 1 <= o ? ++p : --p) t = new Moment([e.year, e.month, s]), c = t.is_weekend() ? " class='weekend' " : "", t.today() ? n += "<a href='#' class='today'>" + s + "</a>" : t.less(l) ? n += "<i>" + s + "</i>" : n += "<a href='#' " + c + ">" + s + "</a>";
            r = e.days_after_month();
            for (s = d = 1; 1 <= r ? d <= r : d >= r; s = 1 <= r ? ++d : --d) n += "<s>" + s + "</s>";
            return n
          }, e.prototype.month = function(e) {
            return "<div class='month' data-date='" + e.year + "." + e.month + "'>\n  <div class='header'>\n    " + e.month_name() + "\n    " + e.year + "\n  </div>\n  <div class='body'>\n    <div class='day_names'>" + this.days_names() + "</div>\n    <div class='days'>" + this.days(e) + "</div>\n  </div>\n</div>"
          }, e
        }(), this.Calendar = function() {
          function e(e, t) {
            var n, r, i, s, o;
            this.id = e != null ? e : "#calendar", t == null && (t = {}), this.options = {
              mcount: 2,
              date: Moment["new"](),
              locale: DefaultMomentLocale.locale
            }, $.extend(this.options, t), this.block = $(this.id), this.init_moment = new Moment, this.items = new CalendarItems(this), this.view = new CalendarView(this), this.block.append(this.view.template()), n = Moment["new"](this.options.date);
            for (r = s = 0, o = this.options.mcount - 1; 0 <= o ? s <= o : s >= o; r = 0 <= o ? ++s : --s) i = n.shift_months(r), this.items.months().append(this.view.month(i));
            this.items.current_month = this.items.first_month()
          }
          return e
        }(), this.CalendarBehavior = function() {
          function e(e) {
            var t, n = this;
            this.calendar = e, this.items = this.calendar.items, this.view = this.calendar.view, this.animation_in_progress = !1, this.animation_speed = 400, t = this.items.month_width(), this.items.left().click(function() {
              var e, r;
              return n.animation_in_progress ? !1 : (r = n.items.current_month.prev().length > 0, r || (e = new Moment(n.items.current_month.attr("data-date")), e = e.shift_months(-1), n.items.months().prepend(n.view.month(e)), n.items.months().css({
                left: -t
              })), n.animation_in_progress = !0, n.items.months().animate({
                left: "+=" + t
              }, n.animation_speed, function() {
                return n.animation_in_progress = !1
              }), n.items.current_month = n.items.current_month.prev())
            }), this.items.right().click(function() {
              var e, r;
              return n.animation_in_progress ? !1 : (r = n.items.current_month.next().length > 0, r || (e = new Moment(n.items.current_month.attr("data-date")), e = e.shift_months(1), n.items.months().append(n.view.month(e))), n.animation_in_progress = !0, n.items.months().animate({
                left: "-=" + t
              }, n.animation_speed, function() {
                return n.animation_in_progress = !1
              }), n.items.current_month = n.items.current_month.next())
            })
          }
          return e
        }(), $(function() {
          return this.calendar = new Calendar("#calendar", {
            mcount: 3,
            date: new Moment
          }), new CalendarBehavior(this.calendar)
        })
      }.call(this)

      setTimeout(function() {

        $(".cal").draggable({ handle: '.controllers', containment: '#dashboard' }).css("position", "absolute");
        if ( m.loaded[16] != 0 ) $(".cal").show();
      }, 500);

}