"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5894], {
        63496: function(e, t, r) {
            let i, s, a;
            r.r(t), r.d(t, {
                default: function() {
                    return Hls
                }
            });
            var n, l, o, h, d, u, c, f, g, m = {
                exports: {}
            };
            n = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, l = /^(?=([^\/?#]*))\1([^]*)$/, o = /(?:\/|^)\.(?=\/)/g, h = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, d = {
                buildAbsoluteURL: function(e, t, r) {
                    if (r = r || {}, e = e.trim(), !(t = t.trim())) {
                        if (!r.alwaysNormalize) return e;
                        var i = d.parseURL(e);
                        if (!i) throw Error("Error trying to parse base URL.");
                        return i.path = d.normalizePath(i.path), d.buildURLFromParts(i)
                    }
                    var s = d.parseURL(t);
                    if (!s) throw Error("Error trying to parse relative URL.");
                    if (s.scheme) return r.alwaysNormalize ? (s.path = d.normalizePath(s.path), d.buildURLFromParts(s)) : t;
                    var a = d.parseURL(e);
                    if (!a) throw Error("Error trying to parse base URL.");
                    if (!a.netLoc && a.path && "/" !== a.path[0]) {
                        var n = l.exec(a.path);
                        a.netLoc = n[1], a.path = n[2]
                    }
                    a.netLoc && !a.path && (a.path = "/");
                    var o = {
                        scheme: a.scheme,
                        netLoc: s.netLoc,
                        path: null,
                        params: s.params,
                        query: s.query,
                        fragment: s.fragment
                    };
                    if (!s.netLoc && (o.netLoc = a.netLoc, "/" !== s.path[0])) {
                        if (s.path) {
                            var h = a.path,
                                u = h.substring(0, h.lastIndexOf("/") + 1) + s.path;
                            o.path = d.normalizePath(u)
                        } else o.path = a.path, s.params || (o.params = a.params, s.query || (o.query = a.query))
                    }
                    return null === o.path && (o.path = r.alwaysNormalize ? d.normalizePath(s.path) : s.path), d.buildURLFromParts(o)
                },
                parseURL: function(e) {
                    var t = n.exec(e);
                    return t ? {
                        scheme: t[1] || "",
                        netLoc: t[2] || "",
                        path: t[3] || "",
                        params: t[4] || "",
                        query: t[5] || "",
                        fragment: t[6] || ""
                    } : null
                },
                normalizePath: function(e) {
                    for (e = e.split("").reverse().join("").replace(o, ""); e.length !== (e = e.replace(h, "")).length;);
                    return e.split("").reverse().join("")
                },
                buildURLFromParts: function(e) {
                    return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
                }
            }, m.exports = d;
            var p = m.exports;

            function ownKeys(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function _objectSpread2(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                        var i, s;
                        i = t, s = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var i = r.call(e, t || "default");
                                    if ("object" != typeof i) return i;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : String(t)
                        }(i)) in e ? Object.defineProperty(e, i, {
                            value: s,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[i] = s
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                    }
                    return e
                }).apply(this, arguments)
            }
            let T = Number.isFinite || function(e) {
                    return "number" == typeof e && isFinite(e)
                },
                E = ((u = {}).MEDIA_ATTACHING = "hlsMediaAttaching", u.MEDIA_ATTACHED = "hlsMediaAttached", u.MEDIA_DETACHING = "hlsMediaDetaching", u.MEDIA_DETACHED = "hlsMediaDetached", u.BUFFER_RESET = "hlsBufferReset", u.BUFFER_CODECS = "hlsBufferCodecs", u.BUFFER_CREATED = "hlsBufferCreated", u.BUFFER_APPENDING = "hlsBufferAppending", u.BUFFER_APPENDED = "hlsBufferAppended", u.BUFFER_EOS = "hlsBufferEos", u.BUFFER_FLUSHING = "hlsBufferFlushing", u.BUFFER_FLUSHED = "hlsBufferFlushed", u.MANIFEST_LOADING = "hlsManifestLoading", u.MANIFEST_LOADED = "hlsManifestLoaded", u.MANIFEST_PARSED = "hlsManifestParsed", u.LEVEL_SWITCHING = "hlsLevelSwitching", u.LEVEL_SWITCHED = "hlsLevelSwitched", u.LEVEL_LOADING = "hlsLevelLoading", u.LEVEL_LOADED = "hlsLevelLoaded", u.LEVEL_UPDATED = "hlsLevelUpdated", u.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", u.LEVELS_UPDATED = "hlsLevelsUpdated", u.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", u.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", u.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", u.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", u.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", u.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", u.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", u.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", u.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", u.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", u.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", u.CUES_PARSED = "hlsCuesParsed", u.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", u.INIT_PTS_FOUND = "hlsInitPtsFound", u.FRAG_LOADING = "hlsFragLoading", u.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", u.FRAG_LOADED = "hlsFragLoaded", u.FRAG_DECRYPTED = "hlsFragDecrypted", u.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", u.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", u.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", u.FRAG_PARSED = "hlsFragParsed", u.FRAG_BUFFERED = "hlsFragBuffered", u.FRAG_CHANGED = "hlsFragChanged", u.FPS_DROP = "hlsFpsDrop", u.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", u.ERROR = "hlsError", u.DESTROYING = "hlsDestroying", u.KEY_LOADING = "hlsKeyLoading", u.KEY_LOADED = "hlsKeyLoaded", u.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", u.BACK_BUFFER_REACHED = "hlsBackBufferReached", u),
                y = ((c = {}).NETWORK_ERROR = "networkError", c.MEDIA_ERROR = "mediaError", c.KEY_SYSTEM_ERROR = "keySystemError", c.MUX_ERROR = "muxError", c.OTHER_ERROR = "otherError", c),
                v = ((f = {}).KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", f.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", f.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", f.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", f.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", f.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", f.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", f.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", f.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", f.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", f.MANIFEST_LOAD_ERROR = "manifestLoadError", f.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", f.MANIFEST_PARSING_ERROR = "manifestParsingError", f.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", f.LEVEL_EMPTY_ERROR = "levelEmptyError", f.LEVEL_LOAD_ERROR = "levelLoadError", f.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", f.LEVEL_PARSING_ERROR = "levelParsingError", f.LEVEL_SWITCH_ERROR = "levelSwitchError", f.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", f.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", f.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", f.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", f.FRAG_LOAD_ERROR = "fragLoadError", f.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", f.FRAG_DECRYPT_ERROR = "fragDecryptError", f.FRAG_PARSING_ERROR = "fragParsingError", f.FRAG_GAP = "fragGap", f.REMUX_ALLOC_ERROR = "remuxAllocError", f.KEY_LOAD_ERROR = "keyLoadError", f.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", f.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", f.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", f.BUFFER_APPEND_ERROR = "bufferAppendError", f.BUFFER_APPENDING_ERROR = "bufferAppendingError", f.BUFFER_STALLED_ERROR = "bufferStalledError", f.BUFFER_FULL_ERROR = "bufferFullError", f.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", f.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", f.INTERNAL_EXCEPTION = "internalException", f.INTERNAL_ABORTED = "aborted", f.UNKNOWN = "unknown", f),
                noop = function() {},
                S = {
                    trace: noop,
                    debug: noop,
                    log: noop,
                    warn: noop,
                    info: noop,
                    error: noop
                },
                A = S,
                L = A,
                R = /^(\d+)x(\d+)$/,
                I = /(.+?)=(".*?"|.*?)(?:,|$)/g;
            let AttrList = class AttrList {
                constructor(e) {
                    for (let t in "string" == typeof e && (e = AttrList.parseAttrList(e)), e) e.hasOwnProperty(t) && ("X-" === t.substring(0, 2) && (this.clientAttrs = this.clientAttrs || [], this.clientAttrs.push(t)), this[t] = e[t])
                }
                decimalInteger(e) {
                    let t = parseInt(this[e], 10);
                    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                }
                hexadecimalInteger(e) {
                    if (!this[e]) return null; {
                        let t = (this[e] || "0x").slice(2);
                        t = (1 & t.length ? "0" : "") + t;
                        let r = new Uint8Array(t.length / 2);
                        for (let e = 0; e < t.length / 2; e++) r[e] = parseInt(t.slice(2 * e, 2 * e + 2), 16);
                        return r
                    }
                }
                hexadecimalIntegerAsNumber(e) {
                    let t = parseInt(this[e], 16);
                    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                }
                decimalFloatingPoint(e) {
                    return parseFloat(this[e])
                }
                optionalFloat(e, t) {
                    let r = this[e];
                    return r ? parseFloat(r) : t
                }
                enumeratedString(e) {
                    return this[e]
                }
                bool(e) {
                    return "YES" === this[e]
                }
                decimalResolution(e) {
                    let t = R.exec(this[e]);
                    if (null !== t) return {
                        width: parseInt(t[1], 10),
                        height: parseInt(t[2], 10)
                    }
                }
                static parseAttrList(e) {
                    let t;
                    let r = {};
                    for (I.lastIndex = 0; null !== (t = I.exec(e));) {
                        let e = t[2];
                        0 === e.indexOf('"') && e.lastIndexOf('"') === e.length - 1 && (e = e.slice(1, -1));
                        let i = t[1].trim();
                        r[i] = e
                    }
                    return r
                }
            };
            let DateRange = class DateRange {
                constructor(e, t) {
                    if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, t) {
                        let r = t.attr;
                        for (let t in r)
                            if (Object.prototype.hasOwnProperty.call(e, t) && e[t] !== r[t]) {
                                L.warn(`DATERANGE tag attribute: "${t}" does not match for tags with ID: "${e.ID}"`), this._badValueForSameId = t;
                                break
                            }
                        e = _extends(new AttrList({}), r, e)
                    }
                    if (this.attr = e, this._startDate = new Date(e["START-DATE"]), "END-DATE" in this.attr) {
                        let e = new Date(this.attr["END-DATE"]);
                        T(e.getTime()) && (this._endDate = e)
                    }
                }
                get id() {
                    return this.attr.ID
                }
                get class() {
                    return this.attr.CLASS
                }
                get startDate() {
                    return this._startDate
                }
                get endDate() {
                    if (this._endDate) return this._endDate;
                    let e = this.duration;
                    return null !== e ? new Date(this._startDate.getTime() + 1e3 * e) : null
                }
                get duration() {
                    if ("DURATION" in this.attr) {
                        let e = this.attr.decimalFloatingPoint("DURATION");
                        if (T(e)) return e
                    } else if (this._endDate) return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
                    return null
                }
                get plannedDuration() {
                    return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null
                }
                get endOnNext() {
                    return this.attr.bool("END-ON-NEXT")
                }
                get isValid() {
                    return !!this.id && !this._badValueForSameId && T(this.startDate.getTime()) && (null === this.duration || this.duration >= 0) && (!this.endOnNext || !!this.class)
                }
            };
            let LoadStats = class LoadStats {
                constructor() {
                    this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
                        start: 0,
                        first: 0,
                        end: 0
                    }, this.parsing = {
                        start: 0,
                        end: 0
                    }, this.buffering = {
                        start: 0,
                        first: 0,
                        end: 0
                    }
                }
            };
            var D = {
                AUDIO: "audio",
                VIDEO: "video",
                AUDIOVIDEO: "audiovideo"
            };
            let BaseSegment = class BaseSegment {
                constructor(e) {
                    this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = {
                        [D.AUDIO]: null,
                        [D.VIDEO]: null,
                        [D.AUDIOVIDEO]: null
                    }, this.baseurl = e
                }
                setByteRange(e, t) {
                    let r = e.split("@", 2),
                        i = [];
                    1 === r.length ? i[0] = t ? t.byteRangeEndOffset : 0 : i[0] = parseInt(r[1]), i[1] = parseInt(r[0]) + i[0], this._byteRange = i
                }
                get byteRange() {
                    return this._byteRange ? this._byteRange : []
                }
                get byteRangeStartOffset() {
                    return this.byteRange[0]
                }
                get byteRangeEndOffset() {
                    return this.byteRange[1]
                }
                get url() {
                    return !this._url && this.baseurl && this.relurl && (this._url = p.buildAbsoluteURL(this.baseurl, this.relurl, {
                        alwaysNormalize: !0
                    })), this._url || ""
                }
                set url(e) {
                    this._url = e
                }
            };
            let Fragment = class Fragment extends BaseSegment {
                constructor(e, t) {
                    super(t), this._decryptdata = null, this.rawProgramDateTime = null, this.programDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.stats = new LoadStats, this.urlId = 0, this.data = void 0, this.bitrateTest = !1, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.type = e
                }
                get decryptdata() {
                    let {
                        levelkeys: e
                    } = this;
                    if (!e && !this._decryptdata) return null;
                    if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
                        let e = this.levelkeys.identity;
                        if (e) this._decryptdata = e.getDecryptData(this.sn);
                        else {
                            let e = Object.keys(this.levelkeys);
                            if (1 === e.length) return this._decryptdata = this.levelkeys[e[0]].getDecryptData(this.sn)
                        }
                    }
                    return this._decryptdata
                }
                get end() {
                    return this.start + this.duration
                }
                get endProgramDateTime() {
                    if (null === this.programDateTime || !T(this.programDateTime)) return null;
                    let e = T(this.duration) ? this.duration : 0;
                    return this.programDateTime + 1e3 * e
                }
                get encrypted() {
                    var e;
                    if (null != (e = this._decryptdata) && e.encrypted) return !0;
                    if (this.levelkeys) {
                        let e = Object.keys(this.levelkeys),
                            t = e.length;
                        if (t > 1 || 1 === t && this.levelkeys[e[0]].encrypted) return !0
                    }
                    return !1
                }
                setKeyFormat(e) {
                    if (this.levelkeys) {
                        let t = this.levelkeys[e];
                        t && !this._decryptdata && (this._decryptdata = t.getDecryptData(this.sn))
                    }
                }
                abortRequests() {
                    var e, t;
                    null == (e = this.loader) || e.abort(), null == (t = this.keyLoader) || t.abort()
                }
                setElementaryStreamInfo(e, t, r, i, s, a = !1) {
                    let {
                        elementaryStreams: n
                    } = this, l = n[e];
                    if (!l) {
                        n[e] = {
                            startPTS: t,
                            endPTS: r,
                            startDTS: i,
                            endDTS: s,
                            partial: a
                        };
                        return
                    }
                    l.startPTS = Math.min(l.startPTS, t), l.endPTS = Math.max(l.endPTS, r), l.startDTS = Math.min(l.startDTS, i), l.endDTS = Math.max(l.endDTS, s)
                }
                clearElementaryStreamInfo() {
                    let {
                        elementaryStreams: e
                    } = this;
                    e[D.AUDIO] = null, e[D.VIDEO] = null, e[D.AUDIOVIDEO] = null
                }
            };
            let Part = class Part extends BaseSegment {
                constructor(e, t, r, i, s) {
                    super(r), this.fragOffset = 0, this.duration = 0, this.gap = !1, this.independent = !1, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.stats = new LoadStats, this.duration = e.decimalFloatingPoint("DURATION"), this.gap = e.bool("GAP"), this.independent = e.bool("INDEPENDENT"), this.relurl = e.enumeratedString("URI"), this.fragment = t, this.index = i;
                    let a = e.enumeratedString("BYTERANGE");
                    a && this.setByteRange(a, s), s && (this.fragOffset = s.fragOffset + s.duration)
                }
                get start() {
                    return this.fragment.start + this.fragOffset
                }
                get end() {
                    return this.start + this.duration
                }
                get loaded() {
                    let {
                        elementaryStreams: e
                    } = this;
                    return !!(e.audio || e.video || e.audiovideo)
                }
            };
            let LevelDetails = class LevelDetails {
                constructor(e) {
                    this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = e
                }
                reloaded(e) {
                    if (!e) {
                        this.advanced = !0, this.updated = !0;
                        return
                    }
                    let t = this.lastPartSn - e.lastPartSn,
                        r = this.lastPartIndex - e.lastPartIndex;
                    this.updated = this.endSN !== e.endSN || !!r || !!t || !this.live, this.advanced = this.endSN > e.endSN || t > 0 || 0 === t && r > 0, this.updated || this.advanced ? this.misses = Math.floor(.6 * e.misses) : this.misses = e.misses + 1, this.availabilityDelay = e.availabilityDelay
                }
                get hasProgramDateTime() {
                    return !!this.fragments.length && T(this.fragments[this.fragments.length - 1].programDateTime)
                }
                get levelTargetDuration() {
                    return this.averagetargetduration || this.targetduration || 10
                }
                get drift() {
                    let e = this.driftEndTime - this.driftStartTime;
                    if (e > 0) {
                        let t = this.driftEnd - this.driftStart;
                        return 1e3 * t / e
                    }
                    return 1
                }
                get edge() {
                    return this.partEnd || this.fragmentEnd
                }
                get partEnd() {
                    var e;
                    return null != (e = this.partList) && e.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd
                }
                get fragmentEnd() {
                    var e;
                    return null != (e = this.fragments) && e.length ? this.fragments[this.fragments.length - 1].end : 0
                }
                get age() {
                    return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
                }
                get lastPartIndex() {
                    var e;
                    return null != (e = this.partList) && e.length ? this.partList[this.partList.length - 1].index : -1
                }
                get lastPartSn() {
                    var e;
                    return null != (e = this.partList) && e.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN
                }
            };

            function base64Decode(e) {
                return Uint8Array.from(atob(e), e => e.charCodeAt(0))
            }

            function strToUtf8array(e) {
                return Uint8Array.from(unescape(encodeURIComponent(e)), e => e.charCodeAt(0))
            }
            var b = {
                    CLEARKEY: "org.w3.clearkey",
                    FAIRPLAY: "com.apple.fps",
                    PLAYREADY: "com.microsoft.playready",
                    WIDEVINE: "com.widevine.alpha"
                },
                C = {
                    CLEARKEY: "org.w3.clearkey",
                    FAIRPLAY: "com.apple.streamingkeydelivery",
                    PLAYREADY: "com.microsoft.playready",
                    WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
                };

            function keySystemFormatToKeySystemDomain(e) {
                switch (e) {
                    case C.FAIRPLAY:
                        return b.FAIRPLAY;
                    case C.PLAYREADY:
                        return b.PLAYREADY;
                    case C.WIDEVINE:
                        return b.WIDEVINE;
                    case C.CLEARKEY:
                        return b.CLEARKEY
                }
            }
            var k = {
                WIDEVINE: "edef8ba979d64acea3c827dcd51d21ed"
            };

            function keySystemDomainToKeySystemFormat(e) {
                switch (e) {
                    case b.FAIRPLAY:
                        return C.FAIRPLAY;
                    case b.PLAYREADY:
                        return C.PLAYREADY;
                    case b.WIDEVINE:
                        return C.WIDEVINE;
                    case b.CLEARKEY:
                        return C.CLEARKEY
                }
            }

            function getKeySystemsForConfig(e) {
                let {
                    drmSystems: t,
                    widevineLicenseUrl: r
                } = e, i = t ? [b.FAIRPLAY, b.WIDEVINE, b.PLAYREADY, b.CLEARKEY].filter(e => !!t[e]) : [];
                return !i[b.WIDEVINE] && r && i.push(b.WIDEVINE), i
            }
            let P = "undefined" != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;

            function sliceUint8(e, t, r) {
                return Uint8Array.prototype.slice ? e.slice(t, r) : new Uint8Array(Array.prototype.slice.call(e, t, r))
            }
            let isHeader$2 = (e, t) => t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128,
                isFooter = (e, t) => t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128,
                getID3Data = (e, t) => {
                    let r = t,
                        i = 0;
                    for (; isHeader$2(e, t);) {
                        i += 10;
                        let r = readSize(e, t + 6);
                        i += r, isFooter(e, t + 10) && (i += 10), t += i
                    }
                    if (i > 0) return e.subarray(r, r + i)
                },
                readSize = (e, t) => (127 & e[t]) << 21 | (127 & e[t + 1]) << 14 | (127 & e[t + 2]) << 7 | 127 & e[t + 3],
                canParse$2 = (e, t) => isHeader$2(e, t) && readSize(e, t + 6) + 10 <= e.length - t,
                getTimeStamp = e => {
                    let t = getID3Frames(e);
                    for (let e = 0; e < t.length; e++) {
                        let r = t[e];
                        if (isTimeStampFrame(r)) return readTimeStamp(r)
                    }
                },
                isTimeStampFrame = e => e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info,
                getFrameData = e => {
                    let t = String.fromCharCode(e[0], e[1], e[2], e[3]),
                        r = readSize(e, 4);
                    return {
                        type: t,
                        size: r,
                        data: e.subarray(10, 10 + r)
                    }
                },
                getID3Frames = e => {
                    let t = 0,
                        r = [];
                    for (; isHeader$2(e, t);) {
                        let i = readSize(e, t + 6);
                        t += 10;
                        let s = t + i;
                        for (; t + 8 < s;) {
                            let i = getFrameData(e.subarray(t)),
                                s = decodeFrame(i);
                            s && r.push(s), t += i.size + 10
                        }
                        isFooter(e, t) && (t += 10)
                    }
                    return r
                },
                decodeFrame = e => "PRIV" === e.type ? decodePrivFrame(e) : "W" === e.type[0] ? decodeURLFrame(e) : decodeTextFrame(e),
                decodePrivFrame = e => {
                    if (e.size < 2) return;
                    let t = utf8ArrayToStr(e.data, !0),
                        r = new Uint8Array(e.data.subarray(t.length + 1));
                    return {
                        key: e.type,
                        info: t,
                        data: r.buffer
                    }
                },
                decodeTextFrame = e => {
                    if (e.size < 2) return;
                    if ("TXXX" === e.type) {
                        let t = 1,
                            r = utf8ArrayToStr(e.data.subarray(t), !0);
                        t += r.length + 1;
                        let i = utf8ArrayToStr(e.data.subarray(t));
                        return {
                            key: e.type,
                            info: r,
                            data: i
                        }
                    }
                    let t = utf8ArrayToStr(e.data.subarray(1));
                    return {
                        key: e.type,
                        data: t
                    }
                },
                decodeURLFrame = e => {
                    if ("WXXX" === e.type) {
                        if (e.size < 2) return;
                        let t = 1,
                            r = utf8ArrayToStr(e.data.subarray(t), !0);
                        t += r.length + 1;
                        let i = utf8ArrayToStr(e.data.subarray(t));
                        return {
                            key: e.type,
                            info: r,
                            data: i
                        }
                    }
                    let t = utf8ArrayToStr(e.data);
                    return {
                        key: e.type,
                        data: t
                    }
                },
                readTimeStamp = e => {
                    if (8 === e.data.byteLength) {
                        let t = new Uint8Array(e.data),
                            r = 1 & t[3],
                            i = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
                        return i /= 45, r && (i += 47721858.84), Math.round(i)
                    }
                },
                utf8ArrayToStr = (e, t = !1) => {
                    let r, s;
                    let a = (i || void 0 === self.TextDecoder || (i = new self.TextDecoder("utf-8")), i);
                    if (a) {
                        let r = a.decode(e);
                        if (t) {
                            let e = r.indexOf("\x00");
                            return -1 !== e ? r.substring(0, e) : r
                        }
                        return r.replace(/\0/g, "")
                    }
                    let n = e.length,
                        l = "",
                        o = 0;
                    for (; o < n && (0 !== (r = e[o++]) || !t);)
                        if (0 !== r && 3 !== r) switch (r >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                l += String.fromCharCode(r);
                                break;
                            case 12:
                            case 13:
                                l += String.fromCharCode((31 & r) << 6 | 63 & e[o++]);
                                break;
                            case 14:
                                l += String.fromCharCode((15 & r) << 12 | (63 & e[o++]) << 6 | (63 & e[o++]) << 0)
                        }
                    return l
                },
                _ = {
                    hexDump: function(e) {
                        let t = "";
                        for (let r = 0; r < e.length; r++) {
                            let i = e[r].toString(16);
                            i.length < 2 && (i = "0" + i), t += i
                        }
                        return t
                    }
                },
                M = [].push,
                w = {
                    video: 1,
                    audio: 2,
                    id3: 3,
                    text: 4
                };

            function bin2str(e) {
                return String.fromCharCode.apply(null, e)
            }

            function readUint16(e, t) {
                let r = e[t] << 8 | e[t + 1];
                return r < 0 ? 65536 + r : r
            }

            function readUint32(e, t) {
                let r = readSint32(e, t);
                return r < 0 ? 4294967296 + r : r
            }

            function readSint32(e, t) {
                return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
            }

            function writeUint32(e, t, r) {
                e[t] = r >> 24, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r
            }

            function findBox(e, t) {
                let r = [];
                if (!t.length) return r;
                let i = e.byteLength;
                for (let s = 0; s < i;) {
                    let a = readUint32(e, s),
                        n = bin2str(e.subarray(s + 4, s + 8)),
                        l = a > 1 ? s + a : i;
                    if (n === t[0]) {
                        if (1 === t.length) r.push(e.subarray(s + 8, l));
                        else {
                            let i = findBox(e.subarray(s + 8, l), t.slice(1));
                            i.length && M.apply(r, i)
                        }
                    }
                    s = l
                }
                return r
            }

            function parseInitSegment(e) {
                let t = [],
                    r = findBox(e, ["moov", "trak"]);
                for (let e = 0; e < r.length; e++) {
                    let i = r[e],
                        s = findBox(i, ["tkhd"])[0];
                    if (s) {
                        let e = s[0],
                            r = 0 === e ? 12 : 20,
                            a = readUint32(s, r),
                            n = findBox(i, ["mdia", "mdhd"])[0];
                        if (n) {
                            r = 0 === (e = n[0]) ? 12 : 20;
                            let s = readUint32(n, r),
                                l = findBox(i, ["mdia", "hdlr"])[0];
                            if (l) {
                                let e = bin2str(l.subarray(8, 12)),
                                    r = {
                                        soun: D.AUDIO,
                                        vide: D.VIDEO
                                    }[e];
                                if (r) {
                                    let e;
                                    let n = findBox(i, ["mdia", "minf", "stbl", "stsd"])[0];
                                    n && (e = bin2str(n.subarray(12, 16))), t[a] = {
                                        timescale: s,
                                        type: r
                                    }, t[r] = {
                                        timescale: s,
                                        id: a,
                                        codec: e
                                    }
                                }
                            }
                        }
                    }
                }
                let i = findBox(e, ["moov", "mvex", "trex"]);
                return i.forEach(e => {
                    let r = readUint32(e, 4),
                        i = t[r];
                    i && (i.default = {
                        duration: readUint32(e, 12),
                        flags: readUint32(e, 20)
                    })
                }), t
            }

            function parseSinf(e) {
                let t = findBox(e, ["schm"])[0];
                if (t) {
                    let r = bin2str(t.subarray(4, 8));
                    if ("cbcs" === r || "cenc" === r) return findBox(e, ["schi", "tenc"])[0]
                }
                return L.error("[eme] missing 'schm' box"), null
            }

            function appendUint8Array(e, t) {
                let r = new Uint8Array(e.length + t.length);
                return r.set(e), r.set(t, e.length), r
            }

            function parseSamples(e, t) {
                let r = [],
                    i = t.samples,
                    s = t.timescale,
                    a = t.id,
                    n = !1,
                    l = findBox(i, ["moof"]);
                return l.map(l => {
                    let o = l.byteOffset - 8,
                        h = findBox(l, ["traf"]);
                    h.map(l => {
                        let h = findBox(l, ["tfdt"]).map(e => {
                            let t = e[0],
                                r = readUint32(e, 4);
                            return 1 === t && (r *= 4294967296, r += readUint32(e, 8)), r / s
                        })[0];
                        return void 0 !== h && (e = h), findBox(l, ["tfhd"]).map(h => {
                            let d = readUint32(h, 4),
                                u = 16777215 & readUint32(h, 0),
                                c = 0,
                                f = 0,
                                g = 8;
                            d === a && ((1 & u) != 0 && (g += 8), (2 & u) != 0 && (g += 4), (8 & u) != 0 && (c = readUint32(h, g), g += 4), (16 & u) != 0 && (f = readUint32(h, g), g += 4), (32 & u) != 0 && (g += 4), "video" === t.type && (n = function(e) {
                                if (!e) return !1;
                                let t = e.indexOf("."),
                                    r = t < 0 ? e : e.substring(0, t);
                                return "hvc1" === r || "hev1" === r || "dvh1" === r || "dvhe" === r
                            }(t.codec)), findBox(l, ["trun"]).map(a => {
                                let l = a[0],
                                    h = 16777215 & readUint32(a, 0),
                                    d = 0,
                                    u = (256 & h) != 0,
                                    g = 0,
                                    m = (512 & h) != 0,
                                    p = 0,
                                    T = (1024 & h) != 0,
                                    E = (2048 & h) != 0,
                                    y = 0,
                                    v = readUint32(a, 4),
                                    S = 8;
                                (1 & h) != 0 && (d = readUint32(a, S), S += 4), (4 & h) != 0 && (S += 4);
                                let A = d + o;
                                for (let o = 0; o < v; o++) {
                                    if (u ? (g = readUint32(a, S), S += 4) : g = c, m ? (p = readUint32(a, S), S += 4) : p = f, T && (S += 4), E && (y = 0 === l ? readUint32(a, S) : readSint32(a, S), S += 4), t.type === D.VIDEO) {
                                        let t = 0;
                                        for (; t < p;) {
                                            let a = readUint32(i, A);
                                            if (A += 4, function(e, t) {
                                                    if (!e) return 6 == (31 & t); {
                                                        let e = t >> 1 & 63;
                                                        return 39 === e || 40 === e
                                                    }
                                                }(n, i[A])) {
                                                let t = i.subarray(A, A + a);
                                                parseSEIMessageFromNALu(t, n ? 2 : 1, e + y / s, r)
                                            }
                                            A += a, t += a + 4
                                        }
                                    }
                                    e += g / s
                                }
                            }))
                        })
                    })
                }), r
            }

            function parseSEIMessageFromNALu(e, t, r, i) {
                let s;
                let a = discardEPB(e);
                s = 0 + t;
                let n = 0,
                    l = 0,
                    o = !1,
                    h = 0;
                for (; s < a.length;) {
                    n = 0;
                    do {
                        if (s >= a.length) break;
                        n += h = a[s++]
                    } while (255 === h);
                    l = 0;
                    do {
                        if (s >= a.length) break;
                        l += h = a[s++]
                    } while (255 === h);
                    let e = a.length - s;
                    if (!o && 4 === n && s < a.length) {
                        o = !0;
                        let e = a[s++];
                        if (181 === e) {
                            let e = readUint16(a, s);
                            if (s += 2, 49 === e) {
                                let e = readUint32(a, s);
                                if (s += 4, 1195456820 === e) {
                                    let e = a[s++];
                                    if (3 === e) {
                                        let t = a[s++],
                                            l = 31 & t,
                                            o = 64 & t,
                                            h = o ? 2 + 3 * l : 0,
                                            d = new Uint8Array(h);
                                        if (o) {
                                            d[0] = t;
                                            for (let e = 1; e < h; e++) d[e] = a[s++]
                                        }
                                        i.push({
                                            type: e,
                                            payloadType: n,
                                            pts: r,
                                            bytes: d
                                        })
                                    }
                                }
                            }
                        }
                    } else if (5 === n && l < e) {
                        if (o = !0, l > 16) {
                            let e = [];
                            for (let t = 0; t < 16; t++) {
                                let r = a[s++].toString(16);
                                e.push(1 == r.length ? "0" + r : r), (3 === t || 5 === t || 7 === t || 9 === t) && e.push("-")
                            }
                            let t = l - 16,
                                o = new Uint8Array(t);
                            for (let e = 0; e < t; e++) o[e] = a[s++];
                            i.push({
                                payloadType: n,
                                pts: r,
                                uuid: e.join(""),
                                userData: utf8ArrayToStr(o),
                                userDataBytes: o
                            })
                        }
                    } else if (l < e) s += l;
                    else if (l > e) break
                }
            }

            function discardEPB(e) {
                let t = e.byteLength,
                    r = [],
                    i = 1;
                for (; i < t - 2;) 0 === e[i] && 0 === e[i + 1] && 3 === e[i + 2] ? (r.push(i + 2), i += 2) : i++;
                if (0 === r.length) return e;
                let s = t - r.length,
                    a = new Uint8Array(s),
                    n = 0;
                for (i = 0; i < s; n++, i++) n === r[0] && (n++, r.shift()), a[i] = e[n];
                return a
            }
            let x = {};
            let LevelKey = class LevelKey {
                static clearKeyUriToKeyIdMap() {
                    x = {}
                }
                constructor(e, t, r, i = [1], s = null) {
                    this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = e, this.uri = t, this.keyFormat = r, this.keyFormatVersions = i, this.iv = s, this.encrypted = !!e && "NONE" !== e, this.isCommonEncryption = this.encrypted && "AES-128" !== e
                }
                isSupported() {
                    if (this.method) {
                        if ("AES-128" === this.method || "NONE" === this.method) return !0;
                        if ("identity" === this.keyFormat) return "SAMPLE-AES" === this.method;
                        switch (this.keyFormat) {
                            case C.FAIRPLAY:
                            case C.WIDEVINE:
                            case C.PLAYREADY:
                            case C.CLEARKEY:
                                return -1 !== ["ISO-23001-7", "SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method)
                        }
                    }
                    return !1
                }
                getDecryptData(e) {
                    if (!this.encrypted || !this.uri) return null;
                    if ("AES-128" === this.method && this.uri && !this.iv) {
                        "number" != typeof e && ("AES-128" !== this.method || this.iv || L.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), e = 0);
                        let t = function(e) {
                                let t = new Uint8Array(16);
                                for (let r = 12; r < 16; r++) t[r] = e >> 8 * (15 - r) & 255;
                                return t
                            }(e),
                            r = new LevelKey(this.method, this.uri, "identity", this.keyFormatVersions, t);
                        return r
                    }
                    let t = function(e) {
                        let t = e.split(":"),
                            r = null;
                        if ("data" === t[0] && 2 === t.length) {
                            let e = t[1].split(";"),
                                i = e[e.length - 1].split(",");
                            if (2 === i.length) {
                                let t = "base64" === i[0],
                                    s = i[1];
                                t ? (e.splice(-1, 1), r = base64Decode(s)) : r = function(e) {
                                    let t = strToUtf8array(e).subarray(0, 16),
                                        r = new Uint8Array(16);
                                    return r.set(t, 16 - t.length), r
                                }(s)
                            }
                        }
                        return r
                    }(this.uri);
                    if (t) switch (this.keyFormat) {
                        case C.WIDEVINE:
                            this.pssh = t, t.length >= 22 && (this.keyId = t.subarray(t.length - 22, t.length - 6));
                            break;
                        case C.PLAYREADY:
                            {
                                let e = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);this.pssh = function(e, t, r) {
                                    let i, s, a;
                                    if (16 !== e.byteLength) throw RangeError("Invalid system id");
                                    if (t) {
                                        i = 1, s = new Uint8Array(16 * t.length);
                                        for (let e = 0; e < t.length; e++) {
                                            let r = t[e];
                                            if (16 !== r.byteLength) throw RangeError("Invalid key");
                                            s.set(r, 16 * e)
                                        }
                                    } else i = 0, s = new Uint8Array;
                                    i > 0 ? (a = new Uint8Array(4), t.length > 0 && new DataView(a.buffer).setUint32(0, t.length, !1)) : a = new Uint8Array;
                                    let n = new Uint8Array(4);
                                    return r && r.byteLength > 0 && new DataView(n.buffer).setUint32(0, r.byteLength, !1),
                                        function(e, ...t) {
                                            let r = t.length,
                                                i = 8,
                                                s = r;
                                            for (; s--;) i += t[s].byteLength;
                                            let a = new Uint8Array(i);
                                            for (a[0] = i >> 24 & 255, a[1] = i >> 16 & 255, a[2] = i >> 8 & 255, a[3] = 255 & i, a.set(e, 4), s = 0, i = 8; s < r; s++) a.set(t[s], i), i += t[s].byteLength;
                                            return a
                                        }([112, 115, 115, 104], new Uint8Array([i, 0, 0, 0]), e, a, s, n, r || new Uint8Array)
                                }(e, null, t);
                                let r = new Uint16Array(t.buffer, t.byteOffset, t.byteLength / 2),
                                    i = String.fromCharCode.apply(null, Array.from(r)),
                                    s = i.substring(i.indexOf("<"), i.length),
                                    a = new DOMParser,
                                    n = a.parseFromString(s, "text/xml"),
                                    l = n.getElementsByTagName("KID")[0];
                                if (l) {
                                    let e = l.childNodes[0] ? l.childNodes[0].nodeValue : l.getAttribute("VALUE");
                                    if (e) {
                                        let t = base64Decode(e).subarray(0, 16);
                                        ! function(e) {
                                            let swap = function(e, t, r) {
                                                let i = e[t];
                                                e[t] = e[r], e[r] = i
                                            };
                                            swap(e, 0, 3), swap(e, 1, 2), swap(e, 4, 5), swap(e, 6, 7)
                                        }(t), this.keyId = t
                                    }
                                }
                                break
                            }
                        default:
                            {
                                let e = t.subarray(0, 16);
                                if (16 !== e.length) {
                                    let t = new Uint8Array(16);
                                    t.set(e, 16 - e.length), e = t
                                }
                                this.keyId = e
                            }
                    }
                    if (!this.keyId || 16 !== this.keyId.byteLength) {
                        let e = x[this.uri];
                        if (!e) {
                            let t = Object.keys(x).length % Number.MAX_SAFE_INTEGER;
                            e = new Uint8Array(16);
                            let r = new DataView(e.buffer, 12, 4);
                            r.setUint32(0, t), x[this.uri] = e
                        }
                        this.keyId = e
                    }
                    return this
                }
            };
            let F = /\{\$([a-zA-Z0-9-_]+)\}/g;

            function substituteVariablesInAttributes(e, t, r) {
                if (null !== e.variableList || e.hasVariableRefs)
                    for (let i = r.length; i--;) {
                        let s = r[i],
                            a = t[s];
                        a && (t[s] = substituteVariables(e, a))
                    }
            }

            function substituteVariables(e, t) {
                if (null !== e.variableList || e.hasVariableRefs) {
                    let r = e.variableList;
                    return t.replace(F, t => {
                        let i = t.substring(2, t.length - 1),
                            s = null == r ? void 0 : r[i];
                        return void 0 === s ? (e.playlistParsingError || (e.playlistParsingError = Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)), t) : s
                    })
                }
                return t
            }

            function addVariableDefinition(e, t, r) {
                let i, s, a = e.variableList;
                if (a || (e.variableList = a = {}), "QUERYPARAM" in t) {
                    i = t.QUERYPARAM;
                    try {
                        let e = new self.URL(r).searchParams;
                        if (e.has(i)) s = e.get(i);
                        else throw Error(`"${i}" does not match any query parameter in URI: "${r}"`)
                    } catch (t) {
                        e.playlistParsingError || (e.playlistParsingError = Error(`EXT-X-DEFINE QUERYPARAM: ${t.message}`))
                    }
                } else i = t.NAME, s = t.VALUE;
                i in a ? e.playlistParsingError || (e.playlistParsingError = Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`)) : a[i] = s || ""
            }

            function getMediaSource() {
                if ("undefined" != typeof self) return self.MediaSource || self.WebKitMediaSource
            }
            let O = {
                    audio: {
                        a3ds: !0,
                        "ac-3": !0,
                        "ac-4": !0,
                        alac: !0,
                        alaw: !0,
                        dra1: !0,
                        "dts+": !0,
                        "dts-": !0,
                        dtsc: !0,
                        dtse: !0,
                        dtsh: !0,
                        "ec-3": !0,
                        enca: !0,
                        g719: !0,
                        g726: !0,
                        m4ae: !0,
                        mha1: !0,
                        mha2: !0,
                        mhm1: !0,
                        mhm2: !0,
                        mlpa: !0,
                        mp4a: !0,
                        "raw ": !0,
                        Opus: !0,
                        opus: !0,
                        samr: !0,
                        sawb: !0,
                        sawp: !0,
                        sevc: !0,
                        sqcp: !0,
                        ssmv: !0,
                        twos: !0,
                        ulaw: !0
                    },
                    video: {
                        avc1: !0,
                        avc2: !0,
                        avc3: !0,
                        avc4: !0,
                        avcp: !0,
                        av01: !0,
                        drac: !0,
                        dva1: !0,
                        dvav: !0,
                        dvh1: !0,
                        dvhe: !0,
                        encv: !0,
                        hev1: !0,
                        hvc1: !0,
                        mjp2: !0,
                        mp4v: !0,
                        mvc1: !0,
                        mvc2: !0,
                        mvc3: !0,
                        mvc4: !0,
                        resv: !0,
                        rv60: !0,
                        s263: !0,
                        svc1: !0,
                        svc2: !0,
                        "vc-1": !0,
                        vp08: !0,
                        vp09: !0
                    },
                    text: {
                        stpp: !0,
                        wvtt: !0
                    }
                },
                N = getMediaSource();

            function isCodecSupportedInMp4(e, t) {
                var r;
                return null != (r = null == N ? void 0 : N.isTypeSupported(`${t||"video"}/mp4;codecs="${e}"`)) && r
            }
            let U = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,
                B = /#EXT-X-MEDIA:(.*)/g,
                $ = /^#EXT(?:INF|-X-TARGETDURATION):/m,
                G = RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"),
                K = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
            let M3U8Parser = class M3U8Parser {
                static findGroup(e, t) {
                    for (let r = 0; r < e.length; r++) {
                        let i = e[r];
                        if (i.id === t) return i
                    }
                }
                static convertAVC1ToAVCOTI(e) {
                    let t = e.split(".");
                    return t.length > 2 ? t.shift() + "." + (parseInt(t.shift()).toString(16) + ("000" + parseInt(t.shift()).toString(16)).slice(-4)) : e
                }
                static resolve(e, t) {
                    return p.buildAbsoluteURL(t, e, {
                        alwaysNormalize: !0
                    })
                }
                static isMediaPlaylist(e) {
                    return $.test(e)
                }
                static parseMasterPlaylist(e, t) {
                    var r;
                    let i;
                    let s = F.test(e),
                        a = {
                            contentSteering: null,
                            levels: [],
                            playlistParsingError: null,
                            sessionData: null,
                            sessionKeys: null,
                            startTimeOffset: null,
                            variableList: null,
                            hasVariableRefs: s
                        },
                        n = [];
                    for (U.lastIndex = 0; null != (i = U.exec(e));)
                        if (i[1]) {
                            let e = new AttrList(i[1]);
                            substituteVariablesInAttributes(a, e, ["CODECS", "SUPPLEMENTAL-CODECS", "ALLOWED-CPC", "PATHWAY-ID", "STABLE-VARIANT-ID", "AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS", "NAME"]);
                            let s = substituteVariables(a, i[2]),
                                l = {
                                    attrs: e,
                                    bitrate: e.decimalInteger("AVERAGE-BANDWIDTH") || e.decimalInteger("BANDWIDTH"),
                                    name: e.NAME,
                                    url: M3U8Parser.resolve(s, t)
                                },
                                o = e.decimalResolution("RESOLUTION");
                            o && (l.width = o.width, l.height = o.height),
                                function(e, t) {
                                    ["video", "audio", "text"].forEach(r => {
                                        let i = e.filter(e => (function(e, t) {
                                            let r = O[t];
                                            return !!r && !0 === r[e.slice(0, 4)]
                                        })(e, r));
                                        if (i.length) {
                                            let s = i.filter(e => 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0));
                                            t[`${r}Codec`] = s.length > 0 ? s[0] : i[0], e = e.filter(e => -1 === i.indexOf(e))
                                        }
                                    }), t.unknownCodecs = e
                                }((e.CODECS || "").split(/[ ,]+/).filter(e => e), l), l.videoCodec && -1 !== l.videoCodec.indexOf("avc1") && (l.videoCodec = M3U8Parser.convertAVC1ToAVCOTI(l.videoCodec)), null != (r = l.unknownCodecs) && r.length || n.push(l), a.levels.push(l)
                        } else if (i[3]) {
                        let e = i[3],
                            r = i[4];
                        switch (e) {
                            case "SESSION-DATA":
                                {
                                    let e = new AttrList(r);substituteVariablesInAttributes(a, e, ["DATA-ID", "LANGUAGE", "VALUE", "URI"]);
                                    let t = e["DATA-ID"];t && (null === a.sessionData && (a.sessionData = {}), a.sessionData[t] = e);
                                    break
                                }
                            case "SESSION-KEY":
                                {
                                    let e = parseKey(r, t, a);e.encrypted && e.isSupported() ? (null === a.sessionKeys && (a.sessionKeys = []), a.sessionKeys.push(e)) : L.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${r}"`);
                                    break
                                }
                            case "DEFINE":
                                {
                                    let e = new AttrList(r);substituteVariablesInAttributes(a, e, ["NAME", "VALUE", "QUERYPARAM"]),
                                    addVariableDefinition(a, e, t)
                                }
                                break;
                            case "CONTENT-STEERING":
                                {
                                    let e = new AttrList(r);substituteVariablesInAttributes(a, e, ["SERVER-URI", "PATHWAY-ID"]),
                                    a.contentSteering = {
                                        uri: M3U8Parser.resolve(e["SERVER-URI"], t),
                                        pathwayId: e["PATHWAY-ID"] || "."
                                    };
                                    break
                                }
                            case "START":
                                a.startTimeOffset = parseStartTimeOffset(r)
                        }
                    }
                    let l = n.length > 0 && n.length < a.levels.length;
                    return a.levels = l ? n : a.levels, 0 === a.levels.length && (a.playlistParsingError = Error("no levels found in manifest")), a
                }
                static parseMasterPlaylistMedia(e, t, r) {
                    let i;
                    let s = {},
                        a = r.levels,
                        n = {
                            AUDIO: a.map(e => ({
                                id: e.attrs.AUDIO,
                                audioCodec: e.audioCodec
                            })),
                            SUBTITLES: a.map(e => ({
                                id: e.attrs.SUBTITLES,
                                textCodec: e.textCodec
                            })),
                            "CLOSED-CAPTIONS": []
                        },
                        l = 0;
                    for (B.lastIndex = 0; null !== (i = B.exec(e));) {
                        let e = new AttrList(i[1]),
                            a = e.TYPE;
                        if (a) {
                            let i = n[a],
                                o = s[a] || [];
                            s[a] = o, substituteVariablesInAttributes(r, e, ["URI", "GROUP-ID", "LANGUAGE", "ASSOC-LANGUAGE", "STABLE-RENDITION-ID", "NAME", "INSTREAM-ID", "CHARACTERISTICS", "CHANNELS"]);
                            let h = {
                                attrs: e,
                                bitrate: 0,
                                id: l++,
                                groupId: e["GROUP-ID"] || "",
                                instreamId: e["INSTREAM-ID"],
                                name: e.NAME || e.LANGUAGE || "",
                                type: a,
                                default: e.bool("DEFAULT"),
                                autoselect: e.bool("AUTOSELECT"),
                                forced: e.bool("FORCED"),
                                lang: e.LANGUAGE,
                                url: e.URI ? M3U8Parser.resolve(e.URI, t) : ""
                            };
                            if (null != i && i.length) {
                                let e = M3U8Parser.findGroup(i, h.groupId) || i[0];
                                assignCodec(h, e, "audioCodec"), assignCodec(h, e, "textCodec")
                            }
                            o.push(h)
                        }
                    }
                    return s
                }
                static parseLevelPlaylist(e, t, r, i, s, a) {
                    let n, l, o;
                    let h = new LevelDetails(t),
                        d = h.fragments,
                        u = null,
                        c = 0,
                        f = 0,
                        g = 0,
                        m = 0,
                        p = null,
                        E = new Fragment(i, t),
                        y = -1,
                        v = !1;
                    for (G.lastIndex = 0, h.m3u8 = e, h.hasVariableRefs = F.test(e); null !== (n = G.exec(e));) {
                        v && (v = !1, (E = new Fragment(i, t)).start = g, E.sn = c, E.cc = m, E.level = r, u && (E.initSegment = u, E.rawProgramDateTime = u.rawProgramDateTime, u.rawProgramDateTime = null));
                        let e = n[1];
                        if (e) {
                            E.duration = parseFloat(e);
                            let t = (" " + n[2]).slice(1);
                            E.title = t || null, E.tagList.push(t ? ["INF", e, t] : ["INF", e])
                        } else if (n[3]) {
                            if (T(E.duration)) {
                                E.start = g, o && setFragLevelKeys(E, o, h), E.sn = c, E.level = r, E.cc = m, E.urlId = s, d.push(E);
                                let e = (" " + n[3]).slice(1);
                                E.relurl = substituteVariables(h, e), assignProgramDateTime(E, p), p = E, g += E.duration, c++, f = 0, v = !0
                            }
                        } else if (n[4]) {
                            let e = (" " + n[4]).slice(1);
                            p ? E.setByteRange(e, p) : E.setByteRange(e)
                        } else if (n[5]) E.rawProgramDateTime = (" " + n[5]).slice(1), E.tagList.push(["PROGRAM-DATE-TIME", E.rawProgramDateTime]), -1 === y && (y = d.length);
                        else {
                            if (!(n = n[0].match(K))) {
                                L.warn("No matches on slow regex match for level playlist!");
                                continue
                            }
                            for (l = 1; l < n.length && void 0 === n[l]; l++);
                            let e = (" " + n[l]).slice(1),
                                s = (" " + n[l + 1]).slice(1),
                                g = n[l + 2] ? (" " + n[l + 2]).slice(1) : "";
                            switch (e) {
                                case "PLAYLIST-TYPE":
                                    h.type = s.toUpperCase();
                                    break;
                                case "MEDIA-SEQUENCE":
                                    c = h.startSN = parseInt(s);
                                    break;
                                case "SKIP":
                                    {
                                        let e = new AttrList(s);substituteVariablesInAttributes(h, e, ["RECENTLY-REMOVED-DATERANGES"]);
                                        let t = e.decimalInteger("SKIPPED-SEGMENTS");
                                        if (T(t)) {
                                            h.skippedSegments = t;
                                            for (let e = t; e--;) d.unshift(null);
                                            c += t
                                        }
                                        let r = e.enumeratedString("RECENTLY-REMOVED-DATERANGES");r && (h.recentlyRemovedDateranges = r.split("	"));
                                        break
                                    }
                                case "TARGETDURATION":
                                    h.targetduration = Math.max(parseInt(s), 1);
                                    break;
                                case "VERSION":
                                    h.version = parseInt(s);
                                    break;
                                case "EXTM3U":
                                    break;
                                case "ENDLIST":
                                    h.live = !1;
                                    break;
                                case "#":
                                    (s || g) && E.tagList.push(g ? [s, g] : [s]);
                                    break;
                                case "DISCONTINUITY":
                                    m++, E.tagList.push(["DIS"]);
                                    break;
                                case "GAP":
                                    E.gap = !0, E.tagList.push([e]);
                                    break;
                                case "BITRATE":
                                    E.tagList.push([e, s]);
                                    break;
                                case "DATERANGE":
                                    {
                                        let e = new AttrList(s);substituteVariablesInAttributes(h, e, ["ID", "CLASS", "START-DATE", "END-DATE", "SCTE35-CMD", "SCTE35-OUT", "SCTE35-IN"]),
                                        substituteVariablesInAttributes(h, e, e.clientAttrs);
                                        let t = new DateRange(e, h.dateRanges[e.ID]);t.isValid || h.skippedSegments ? h.dateRanges[t.id] = t : L.warn(`Ignoring invalid DATERANGE tag: "${s}"`),
                                        E.tagList.push(["EXT-X-DATERANGE", s]);
                                        break
                                    }
                                case "DEFINE":
                                    {
                                        let e = new AttrList(s);substituteVariablesInAttributes(h, e, ["NAME", "VALUE", "IMPORT", "QUERYPARAM"]),
                                        "IMPORT" in e ? function(e, t, r) {
                                            let i = t.IMPORT;
                                            if (r && i in r) {
                                                let t = e.variableList;
                                                t || (e.variableList = t = {}), t[i] = r[i]
                                            } else e.playlistParsingError || (e.playlistParsingError = Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${i}"`))
                                        }(h, e, a) : addVariableDefinition(h, e, t)
                                    }
                                    break;
                                case "DISCONTINUITY-SEQUENCE":
                                    m = parseInt(s);
                                    break;
                                case "KEY":
                                    {
                                        let e = parseKey(s, t, h);
                                        if (e.isSupported()) {
                                            if ("NONE" === e.method) {
                                                o = void 0;
                                                break
                                            }
                                            o || (o = {}), o[e.keyFormat] && (o = _extends({}, o)), o[e.keyFormat] = e
                                        } else L.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${s}"`);
                                        break
                                    }
                                case "START":
                                    h.startTimeOffset = parseStartTimeOffset(s);
                                    break;
                                case "MAP":
                                    {
                                        let e = new AttrList(s);
                                        if (substituteVariablesInAttributes(h, e, ["BYTERANGE", "URI"]), E.duration) {
                                            let s = new Fragment(i, t);
                                            setInitSegment(s, e, r, o), u = s, E.initSegment = u, u.rawProgramDateTime && !E.rawProgramDateTime && (E.rawProgramDateTime = u.rawProgramDateTime)
                                        } else setInitSegment(E, e, r, o),
                                        u = E,
                                        v = !0;
                                        break
                                    }
                                case "SERVER-CONTROL":
                                    {
                                        let e = new AttrList(s);h.canBlockReload = e.bool("CAN-BLOCK-RELOAD"),
                                        h.canSkipUntil = e.optionalFloat("CAN-SKIP-UNTIL", 0),
                                        h.canSkipDateRanges = h.canSkipUntil > 0 && e.bool("CAN-SKIP-DATERANGES"),
                                        h.partHoldBack = e.optionalFloat("PART-HOLD-BACK", 0),
                                        h.holdBack = e.optionalFloat("HOLD-BACK", 0);
                                        break
                                    }
                                case "PART-INF":
                                    {
                                        let e = new AttrList(s);h.partTarget = e.decimalFloatingPoint("PART-TARGET");
                                        break
                                    }
                                case "PART":
                                    {
                                        let e = h.partList;e || (e = h.partList = []);
                                        let r = f > 0 ? e[e.length - 1] : void 0,
                                            i = f++,
                                            a = new AttrList(s);substituteVariablesInAttributes(h, a, ["BYTERANGE", "URI"]);
                                        let n = new Part(a, E, t, i, r);e.push(n),
                                        E.duration += n.duration;
                                        break
                                    }
                                case "PRELOAD-HINT":
                                    {
                                        let e = new AttrList(s);substituteVariablesInAttributes(h, e, ["URI"]),
                                        h.preloadHint = e;
                                        break
                                    }
                                case "RENDITION-REPORT":
                                    {
                                        let e = new AttrList(s);substituteVariablesInAttributes(h, e, ["URI"]),
                                        h.renditionReports = h.renditionReports || [],
                                        h.renditionReports.push(e);
                                        break
                                    }
                                default:
                                    L.warn(`line parsed but not handled: ${n}`)
                            }
                        }
                    }
                    p && !p.relurl ? (d.pop(), g -= p.duration, h.partList && (h.fragmentHint = p)) : h.partList && (assignProgramDateTime(E, p), E.cc = m, h.fragmentHint = E, o && setFragLevelKeys(E, o, h));
                    let S = d.length,
                        A = d[0],
                        R = d[S - 1];
                    if ((g += h.skippedSegments * h.targetduration) > 0 && S && R) {
                        h.averagetargetduration = g / S;
                        let e = R.sn;
                        h.endSN = "initSegment" !== e ? e : 0, h.live || (R.endList = !0), A && (h.startCC = A.cc)
                    } else h.endSN = 0, h.startCC = 0;
                    return h.fragmentHint && (g += h.fragmentHint.duration), h.totalduration = g, h.endCC = m, y > 0 && function(e, t) {
                        let r = e[t];
                        for (let i = t; i--;) {
                            let t = e[i];
                            if (!t) return;
                            t.programDateTime = r.programDateTime - 1e3 * t.duration, r = t
                        }
                    }(d, y), h
                }
            };

            function parseKey(e, t, r) {
                var i, s;
                let a = new AttrList(e);
                substituteVariablesInAttributes(r, a, ["KEYFORMAT", "KEYFORMATVERSIONS", "URI", "IV", "URI"]);
                let n = null != (i = a.METHOD) ? i : "",
                    l = a.URI,
                    o = a.hexadecimalInteger("IV"),
                    h = a.KEYFORMATVERSIONS,
                    d = null != (s = a.KEYFORMAT) ? s : "identity";
                l && a.IV && !o && L.error(`Invalid IV: ${a.IV}`);
                let u = l ? M3U8Parser.resolve(l, t) : "",
                    c = (h || "1").split("/").map(Number).filter(Number.isFinite);
                return new LevelKey(n, u, d, c, o)
            }

            function parseStartTimeOffset(e) {
                let t = new AttrList(e),
                    r = t.decimalFloatingPoint("TIME-OFFSET");
                return T(r) ? r : null
            }

            function assignCodec(e, t, r) {
                let i = t[r];
                i && (e[r] = i)
            }

            function assignProgramDateTime(e, t) {
                e.rawProgramDateTime ? e.programDateTime = Date.parse(e.rawProgramDateTime) : null != t && t.programDateTime && (e.programDateTime = t.endProgramDateTime), T(e.programDateTime) || (e.programDateTime = null, e.rawProgramDateTime = null)
            }

            function setInitSegment(e, t, r, i) {
                e.relurl = t.URI, t.BYTERANGE && e.setByteRange(t.BYTERANGE), e.level = r, e.sn = "initSegment", i && (e.levelkeys = i), e.initSegment = null
            }

            function setFragLevelKeys(e, t, r) {
                e.levelkeys = t;
                let {
                    encryptedFragments: i
                } = r;
                (!i.length || i[i.length - 1].levelkeys !== t) && Object.keys(t).some(e => t[e].isCommonEncryption) && i.push(e)
            }
            var H = {
                    MANIFEST: "manifest",
                    LEVEL: "level",
                    AUDIO_TRACK: "audioTrack",
                    SUBTITLE_TRACK: "subtitleTrack"
                },
                V = {
                    MAIN: "main",
                    AUDIO: "audio",
                    SUBTITLE: "subtitle"
                };

            function mapContextToLevelType(e) {
                let {
                    type: t
                } = e;
                switch (t) {
                    case H.AUDIO_TRACK:
                        return V.AUDIO;
                    case H.SUBTITLE_TRACK:
                        return V.SUBTITLE;
                    default:
                        return V.MAIN
                }
            }

            function getResponseUrl(e, t) {
                let r = e.url;
                return (void 0 === r || 0 === r.indexOf("data:")) && (r = t.url), r
            }
            let PlaylistLoader = class PlaylistLoader {
                constructor(e) {
                    this.hls = void 0, this.loaders = Object.create(null), this.variableList = null, this.hls = e, this.registerListeners()
                }
                startLoad(e) {}
                stopLoad() {
                    this.destroyInternalLoaders()
                }
                registerListeners() {
                    let {
                        hls: e
                    } = this;
                    e.on(E.MANIFEST_LOADING, this.onManifestLoading, this), e.on(E.LEVEL_LOADING, this.onLevelLoading, this), e.on(E.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.on(E.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
                }
                unregisterListeners() {
                    let {
                        hls: e
                    } = this;
                    e.off(E.MANIFEST_LOADING, this.onManifestLoading, this), e.off(E.LEVEL_LOADING, this.onLevelLoading, this), e.off(E.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.off(E.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
                }
                createInternalLoader(e) {
                    let t = this.hls.config,
                        r = t.pLoader,
                        i = t.loader,
                        s = new(r || i)(t);
                    return this.loaders[e.type] = s, s
                }
                getInternalLoader(e) {
                    return this.loaders[e.type]
                }
                resetInternalLoader(e) {
                    this.loaders[e] && delete this.loaders[e]
                }
                destroyInternalLoaders() {
                    for (let e in this.loaders) {
                        let t = this.loaders[e];
                        t && t.destroy(), this.resetInternalLoader(e)
                    }
                }
                destroy() {
                    this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders()
                }
                onManifestLoading(e, t) {
                    let {
                        url: r
                    } = t;
                    this.variableList = null, this.load({
                        id: null,
                        level: 0,
                        responseType: "text",
                        type: H.MANIFEST,
                        url: r,
                        deliveryDirectives: null
                    })
                }
                onLevelLoading(e, t) {
                    let {
                        id: r,
                        level: i,
                        url: s,
                        deliveryDirectives: a
                    } = t;
                    this.load({
                        id: r,
                        level: i,
                        responseType: "text",
                        type: H.LEVEL,
                        url: s,
                        deliveryDirectives: a
                    })
                }
                onAudioTrackLoading(e, t) {
                    let {
                        id: r,
                        groupId: i,
                        url: s,
                        deliveryDirectives: a
                    } = t;
                    this.load({
                        id: r,
                        groupId: i,
                        level: null,
                        responseType: "text",
                        type: H.AUDIO_TRACK,
                        url: s,
                        deliveryDirectives: a
                    })
                }
                onSubtitleTrackLoading(e, t) {
                    let {
                        id: r,
                        groupId: i,
                        url: s,
                        deliveryDirectives: a
                    } = t;
                    this.load({
                        id: r,
                        groupId: i,
                        level: null,
                        responseType: "text",
                        type: H.SUBTITLE_TRACK,
                        url: s,
                        deliveryDirectives: a
                    })
                }
                load(e) {
                    var t;
                    let r;
                    let i = this.hls.config,
                        s = this.getInternalLoader(e);
                    if (s) {
                        let t = s.context;
                        if (t && t.url === e.url) {
                            L.trace("[playlist-loader]: playlist request ongoing");
                            return
                        }
                        L.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), s.abort()
                    }
                    if (r = e.type === H.MANIFEST ? i.manifestLoadPolicy.default : _extends({}, i.playlistLoadPolicy.default, {
                            timeoutRetry: null,
                            errorRetry: null
                        }), s = this.createInternalLoader(e), null != (t = e.deliveryDirectives) && t.part) {
                        let t;
                        if (e.type === H.LEVEL && null !== e.level ? t = this.hls.levels[e.level].details : e.type === H.AUDIO_TRACK && null !== e.id ? t = this.hls.audioTracks[e.id].details : e.type === H.SUBTITLE_TRACK && null !== e.id && (t = this.hls.subtitleTracks[e.id].details), t) {
                            let e = t.partTarget,
                                i = t.targetduration;
                            if (e && i) {
                                let t = 1e3 * Math.max(3 * e, .8 * i);
                                r = _extends({}, r, {
                                    maxTimeToFirstByteMs: Math.min(t, r.maxTimeToFirstByteMs),
                                    maxLoadTimeMs: Math.min(t, r.maxTimeToFirstByteMs)
                                })
                            }
                        }
                    }
                    let a = r.errorRetry || r.timeoutRetry || {},
                        n = {
                            loadPolicy: r,
                            timeout: r.maxLoadTimeMs,
                            maxRetry: a.maxNumRetry || 0,
                            retryDelay: a.retryDelayMs || 0,
                            maxRetryDelay: a.maxRetryDelayMs || 0
                        };
                    s.load(e, n, {
                        onSuccess: (e, t, r, i) => {
                            let s = this.getInternalLoader(r);
                            this.resetInternalLoader(r.type);
                            let a = e.data;
                            if (0 !== a.indexOf("#EXTM3U")) {
                                this.handleManifestParsingError(e, r, Error("no EXTM3U delimiter"), i || null, t);
                                return
                            }
                            t.parsing.start = performance.now(), M3U8Parser.isMediaPlaylist(a) ? this.handleTrackOrLevelPlaylist(e, t, r, i || null, s) : this.handleMasterPlaylist(e, t, r, i)
                        },
                        onError: (e, t, r, i) => {
                            this.handleNetworkError(t, r, !1, e, i)
                        },
                        onTimeout: (e, t, r) => {
                            this.handleNetworkError(t, r, !0, void 0, e)
                        }
                    })
                }
                handleMasterPlaylist(e, t, r, i) {
                    let s = this.hls,
                        a = e.data,
                        n = getResponseUrl(e, r),
                        l = M3U8Parser.parseMasterPlaylist(a, n);
                    if (l.playlistParsingError) {
                        this.handleManifestParsingError(e, r, l.playlistParsingError, i, t);
                        return
                    }
                    let {
                        contentSteering: o,
                        levels: h,
                        sessionData: d,
                        sessionKeys: u,
                        startTimeOffset: c,
                        variableList: f
                    } = l;
                    this.variableList = f;
                    let {
                        AUDIO: g = [],
                        SUBTITLES: m,
                        "CLOSED-CAPTIONS": p
                    } = M3U8Parser.parseMasterPlaylistMedia(a, n, l);
                    if (g.length) {
                        let e = g.some(e => !e.url);
                        e || !h[0].audioCodec || h[0].attrs.AUDIO || (L.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), g.unshift({
                            type: "main",
                            name: "main",
                            groupId: "main",
                            default: !1,
                            autoselect: !1,
                            forced: !1,
                            id: -1,
                            attrs: new AttrList({}),
                            bitrate: 0,
                            url: ""
                        }))
                    }
                    s.trigger(E.MANIFEST_LOADED, {
                        levels: h,
                        audioTracks: g,
                        subtitles: m,
                        captions: p,
                        contentSteering: o,
                        url: n,
                        stats: t,
                        networkDetails: i,
                        sessionData: d,
                        sessionKeys: u,
                        startTimeOffset: c,
                        variableList: f
                    })
                }
                handleTrackOrLevelPlaylist(e, t, r, i, s) {
                    let a = this.hls,
                        {
                            id: n,
                            level: l,
                            type: o
                        } = r,
                        h = getResponseUrl(e, r),
                        d = T(n) ? n : 0,
                        u = T(l) ? l : d,
                        c = mapContextToLevelType(r),
                        f = M3U8Parser.parseLevelPlaylist(e.data, h, u, c, d, this.variableList);
                    if (o === H.MANIFEST) {
                        let e = {
                            attrs: new AttrList({}),
                            bitrate: 0,
                            details: f,
                            name: "",
                            url: h
                        };
                        a.trigger(E.MANIFEST_LOADED, {
                            levels: [e],
                            audioTracks: [],
                            url: h,
                            stats: t,
                            networkDetails: i,
                            sessionData: null,
                            sessionKeys: null,
                            contentSteering: null,
                            startTimeOffset: null,
                            variableList: null
                        })
                    }
                    t.parsing.end = performance.now(), r.levelDetails = f, this.handlePlaylistLoaded(f, e, t, r, i, s)
                }
                handleManifestParsingError(e, t, r, i, s) {
                    this.hls.trigger(E.ERROR, {
                        type: y.NETWORK_ERROR,
                        details: v.MANIFEST_PARSING_ERROR,
                        fatal: t.type === H.MANIFEST,
                        url: e.url,
                        err: r,
                        error: r,
                        reason: r.message,
                        response: e,
                        context: t,
                        networkDetails: i,
                        stats: s
                    })
                }
                handleNetworkError(e, t, r = !1, i, s) {
                    let a = `A network ${r?"timeout":"error"+(i?" (status "+i.code+")":"")} occurred while loading ${e.type}`;
                    e.type === H.LEVEL ? a += `: ${e.level} id: ${e.id}` : (e.type === H.AUDIO_TRACK || e.type === H.SUBTITLE_TRACK) && (a += ` id: ${e.id} group-id: "${e.groupId}"`);
                    let n = Error(a);
                    L.warn(`[playlist-loader]: ${a}`);
                    let l = v.UNKNOWN,
                        o = !1,
                        h = this.getInternalLoader(e);
                    switch (e.type) {
                        case H.MANIFEST:
                            l = r ? v.MANIFEST_LOAD_TIMEOUT : v.MANIFEST_LOAD_ERROR, o = !0;
                            break;
                        case H.LEVEL:
                            l = r ? v.LEVEL_LOAD_TIMEOUT : v.LEVEL_LOAD_ERROR, o = !1;
                            break;
                        case H.AUDIO_TRACK:
                            l = r ? v.AUDIO_TRACK_LOAD_TIMEOUT : v.AUDIO_TRACK_LOAD_ERROR, o = !1;
                            break;
                        case H.SUBTITLE_TRACK:
                            l = r ? v.SUBTITLE_TRACK_LOAD_TIMEOUT : v.SUBTITLE_LOAD_ERROR, o = !1
                    }
                    h && this.resetInternalLoader(e.type);
                    let d = {
                        type: y.NETWORK_ERROR,
                        details: l,
                        fatal: o,
                        url: e.url,
                        loader: h,
                        context: e,
                        error: n,
                        networkDetails: t,
                        stats: s
                    };
                    if (i) {
                        let r = (null == t ? void 0 : t.url) || e.url;
                        d.response = _objectSpread2({
                            url: r,
                            data: void 0
                        }, i)
                    }
                    this.hls.trigger(E.ERROR, d)
                }
                handlePlaylistLoaded(e, t, r, i, s, a) {
                    let n = this.hls,
                        {
                            type: l,
                            level: o,
                            id: h,
                            groupId: d,
                            deliveryDirectives: u
                        } = i,
                        c = getResponseUrl(t, i),
                        f = mapContextToLevelType(i),
                        g = "number" == typeof i.level && f === V.MAIN ? o : void 0;
                    if (!e.fragments.length) {
                        let e = Error("No Segments found in Playlist");
                        n.trigger(E.ERROR, {
                            type: y.NETWORK_ERROR,
                            details: v.LEVEL_EMPTY_ERROR,
                            fatal: !1,
                            url: c,
                            error: e,
                            reason: e.message,
                            response: t,
                            context: i,
                            level: g,
                            parent: f,
                            networkDetails: s,
                            stats: r
                        });
                        return
                    }
                    e.targetduration || (e.playlistParsingError = Error("Missing Target Duration"));
                    let m = e.playlistParsingError;
                    if (m) {
                        n.trigger(E.ERROR, {
                            type: y.NETWORK_ERROR,
                            details: v.LEVEL_PARSING_ERROR,
                            fatal: !1,
                            url: c,
                            error: m,
                            reason: m.message,
                            response: t,
                            context: i,
                            level: g,
                            parent: f,
                            networkDetails: s,
                            stats: r
                        });
                        return
                    }
                    switch (e.live && a && (a.getCacheAge && (e.ageHeader = a.getCacheAge() || 0), (!a.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)), l) {
                        case H.MANIFEST:
                        case H.LEVEL:
                            n.trigger(E.LEVEL_LOADED, {
                                details: e,
                                level: g || 0,
                                id: h || 0,
                                stats: r,
                                networkDetails: s,
                                deliveryDirectives: u
                            });
                            break;
                        case H.AUDIO_TRACK:
                            n.trigger(E.AUDIO_TRACK_LOADED, {
                                details: e,
                                id: h || 0,
                                groupId: d || "",
                                stats: r,
                                networkDetails: s,
                                deliveryDirectives: u
                            });
                            break;
                        case H.SUBTITLE_TRACK:
                            n.trigger(E.SUBTITLE_TRACK_LOADED, {
                                details: e,
                                id: h || 0,
                                groupId: d || "",
                                stats: r,
                                networkDetails: s,
                                deliveryDirectives: u
                            })
                    }
                }
            };

            function sendAddTrackEvent(e, t) {
                let r;
                try {
                    r = new Event("addtrack")
                } catch (e) {
                    (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
                }
                r.track = e, t.dispatchEvent(r)
            }

            function addCueToTrack(e, t) {
                let r = e.mode;
                if ("disabled" === r && (e.mode = "hidden"), e.cues && !e.cues.getCueById(t.id)) try {
                    if (e.addCue(t), !e.cues.getCueById(t.id)) throw Error(`addCue is failed for: ${t}`)
                } catch (r) {
                    L.debug(`[texttrack-utils]: ${r}`);
                    try {
                        let r = new self.TextTrackCue(t.startTime, t.endTime, t.text);
                        r.id = t.id, e.addCue(r)
                    } catch (e) {
                        L.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${e}`)
                    }
                }
                "disabled" === r && (e.mode = r)
            }

            function clearCurrentCues(e) {
                let t = e.mode;
                if ("disabled" === t && (e.mode = "hidden"), e.cues)
                    for (let t = e.cues.length; t--;) e.removeCue(e.cues[t]);
                "disabled" === t && (e.mode = t)
            }

            function removeCuesInRange(e, t, r, i) {
                let s = e.mode;
                if ("disabled" === s && (e.mode = "hidden"), e.cues && e.cues.length > 0) {
                    let s = function(e, t, r) {
                        let i = [],
                            s = function(e, t) {
                                if (t < e[0].startTime) return 0;
                                let r = e.length - 1;
                                if (t > e[r].endTime) return -1;
                                let i = 0,
                                    s = r;
                                for (; i <= s;) {
                                    let a = Math.floor((s + i) / 2);
                                    if (t < e[a].startTime) s = a - 1;
                                    else {
                                        if (!(t > e[a].startTime) || !(i < r)) return a;
                                        i = a + 1
                                    }
                                }
                                return e[i].startTime - t < t - e[s].startTime ? i : s
                            }(e, t);
                        if (s > -1)
                            for (let a = s, n = e.length; a < n; a++) {
                                let s = e[a];
                                if (s.startTime >= t && s.endTime <= r) i.push(s);
                                else if (s.startTime > r) break
                            }
                        return i
                    }(e.cues, t, r);
                    for (let t = 0; t < s.length; t++)(!i || i(s[t])) && e.removeCue(s[t])
                }
                "disabled" === s && (e.mode = s)
            }
            var W = {
                audioId3: "org.id3",
                dateRange: "com.apple.quicktime.HLS",
                emsg: "https://aomedia.org/emsg/ID3"
            };

            function getCueClass() {
                if ("undefined" != typeof self) return self.WebKitDataCue || self.VTTCue || self.TextTrackCue
            }
            let Y = (() => {
                let e = getCueClass();
                try {
                    new e(0, Number.POSITIVE_INFINITY, "")
                } catch (e) {
                    return Number.MAX_VALUE
                }
                return Number.POSITIVE_INFINITY
            })();

            function dateRangeDateToTimelineSeconds(e, t) {
                return e.getTime() / 1e3 - t
            }
            let ID3TrackController = class ID3TrackController {
                constructor(e) {
                    this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = e, this._registerListeners()
                }
                destroy() {
                    this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null
                }
                _registerListeners() {
                    let {
                        hls: e
                    } = this;
                    e.on(E.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(E.MANIFEST_LOADING, this.onManifestLoading, this), e.on(E.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.on(E.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(E.LEVEL_UPDATED, this.onLevelUpdated, this)
                }
                _unregisterListeners() {
                    let {
                        hls: e
                    } = this;
                    e.off(E.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(E.MANIFEST_LOADING, this.onManifestLoading, this), e.off(E.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.off(E.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(E.LEVEL_UPDATED, this.onLevelUpdated, this)
                }
                onMediaAttached(e, t) {
                    this.media = t.media
                }
                onMediaDetaching() {
                    this.id3Track && (clearCurrentCues(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {})
                }
                onManifestLoading() {
                    this.dateRangeCuesAppended = {}
                }
                createTrack(e) {
                    let t = this.getID3Track(e.textTracks);
                    return t.mode = "hidden", t
                }
                getID3Track(e) {
                    if (this.media) {
                        for (let t = 0; t < e.length; t++) {
                            let r = e[t];
                            if ("metadata" === r.kind && "id3" === r.label) return sendAddTrackEvent(r, this.media), r
                        }
                        return this.media.addTextTrack("metadata", "id3")
                    }
                }
                onFragParsingMetadata(e, t) {
                    if (!this.media) return;
                    let {
                        hls: {
                            config: {
                                enableEmsgMetadataCues: r,
                                enableID3MetadataCues: i
                            }
                        }
                    } = this;
                    if (!r && !i) return;
                    let {
                        samples: s
                    } = t;
                    this.id3Track || (this.id3Track = this.createTrack(this.media));
                    let a = getCueClass();
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e].type;
                        if (t === W.emsg && !r || !i) continue;
                        let n = getID3Frames(s[e].data);
                        if (n) {
                            let r = s[e].pts,
                                i = r + s[e].duration;
                            i > Y && (i = Y);
                            let l = i - r;
                            l <= 0 && (i = r + .25);
                            for (let e = 0; e < n.length; e++) {
                                let s = n[e];
                                if (!isTimeStampFrame(s)) {
                                    this.updateId3CueEnds(r, t);
                                    let e = new a(r, i, "");
                                    e.value = s, t && (e.type = t), this.id3Track.addCue(e)
                                }
                            }
                        }
                    }
                }
                updateId3CueEnds(e, t) {
                    var r;
                    let i = null == (r = this.id3Track) ? void 0 : r.cues;
                    if (i)
                        for (let r = i.length; r--;) {
                            let s = i[r];
                            s.type === t && s.startTime < e && s.endTime === Y && (s.endTime = e)
                        }
                }
                onBufferFlushing(e, {
                    startOffset: t,
                    endOffset: r,
                    type: i
                }) {
                    let {
                        id3Track: s,
                        hls: a
                    } = this;
                    if (!a) return;
                    let {
                        config: {
                            enableEmsgMetadataCues: n,
                            enableID3MetadataCues: l
                        }
                    } = a;
                    s && (n || l) && removeCuesInRange(s, t, r, "audio" === i ? e => e.type === W.audioId3 && l : "video" === i ? e => e.type === W.emsg && n : e => e.type === W.audioId3 && l || e.type === W.emsg && n)
                }
                onLevelUpdated(e, {
                    details: t
                }) {
                    if (!this.media || !t.hasProgramDateTime || !this.hls.config.enableDateRangeMetadataCues) return;
                    let {
                        dateRangeCuesAppended: r,
                        id3Track: i
                    } = this, {
                        dateRanges: s
                    } = t, a = Object.keys(s);
                    if (i) {
                        let e = Object.keys(r).filter(e => !a.includes(e));
                        for (let t = e.length; t--;) {
                            let s = e[t];
                            Object.keys(r[s].cues).forEach(e => {
                                i.removeCue(r[s].cues[e])
                            }), delete r[s]
                        }
                    }
                    let n = t.fragments[t.fragments.length - 1];
                    if (0 === a.length || !T(null == n ? void 0 : n.programDateTime)) return;
                    this.id3Track || (this.id3Track = this.createTrack(this.media));
                    let l = n.programDateTime / 1e3 - n.start,
                        o = getCueClass();
                    for (let e = 0; e < a.length; e++) {
                        let t = a[e],
                            i = s[t],
                            n = r[t],
                            d = (null == n ? void 0 : n.cues) || {},
                            u = (null == n ? void 0 : n.durationKnown) || !1,
                            c = dateRangeDateToTimelineSeconds(i.startDate, l),
                            f = Y,
                            g = i.endDate;
                        if (g) f = dateRangeDateToTimelineSeconds(g, l), u = !0;
                        else if (i.endOnNext && !u) {
                            let e = a.reduce((e, t) => {
                                let r = s[t];
                                return r.class === i.class && r.id !== t && r.startDate > i.startDate && e.push(r), e
                            }, []).sort((e, t) => e.startDate.getTime() - t.startDate.getTime())[0];
                            e && (f = dateRangeDateToTimelineSeconds(e.startDate, l), u = !0)
                        }
                        let m = Object.keys(i.attr);
                        for (let e = 0; e < m.length; e++) {
                            var h;
                            let r = m[e];
                            if (!("ID" !== r && "CLASS" !== r && "START-DATE" !== r && "DURATION" !== r && "END-DATE" !== r && "END-ON-NEXT" !== r)) continue;
                            let s = d[r];
                            if (s) u && !n.durationKnown && (s.endTime = f);
                            else {
                                let e = i.attr[r];
                                s = new o(c, f, ""), ("SCTE35-OUT" === r || "SCTE35-IN" === r) && (h = e, e = Uint8Array.from(h.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer), s.value = {
                                    key: r,
                                    data: e
                                }, s.type = W.dateRange, s.id = t, this.id3Track.addCue(s), d[r] = s
                            }
                        }
                        r[t] = {
                            cues: d,
                            dateRange: i,
                            durationKnown: u
                        }
                    }
                }
            };
            let LatencyController = class LatencyController {
                constructor(e) {
                    this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = () => this.timeupdate(), this.hls = e, this.config = e.config, this.registerListeners()
                }
                get latency() {
                    return this._latency || 0
                }
                get maxLatency() {
                    let {
                        config: e,
                        levelDetails: t
                    } = this;
                    return void 0 !== e.liveMaxLatencyDuration ? e.liveMaxLatencyDuration : t ? e.liveMaxLatencyDurationCount * t.targetduration : 0
                }
                get targetLatency() {
                    let {
                        levelDetails: e
                    } = this;
                    if (null === e) return null;
                    let {
                        holdBack: t,
                        partHoldBack: r,
                        targetduration: i
                    } = e, {
                        liveSyncDuration: s,
                        liveSyncDurationCount: a,
                        lowLatencyMode: n
                    } = this.config, l = this.hls.userConfig, o = n && r || t;
                    return (l.liveSyncDuration || l.liveSyncDurationCount || 0 === o) && (o = void 0 !== s ? s : a * i), o + Math.min(1 * this.stallCount, i)
                }
                get liveSyncPosition() {
                    let e = this.estimateLiveEdge(),
                        t = this.targetLatency,
                        r = this.levelDetails;
                    if (null === e || null === t || null === r) return null;
                    let i = r.edge,
                        s = e - t - this.edgeStalled,
                        a = i - r.totalduration,
                        n = i - (this.config.lowLatencyMode && r.partTarget || r.targetduration);
                    return Math.min(Math.max(a, s), n)
                }
                get drift() {
                    let {
                        levelDetails: e
                    } = this;
                    return null === e ? 1 : e.drift
                }
                get edgeStalled() {
                    let {
                        levelDetails: e
                    } = this;
                    if (null === e) return 0;
                    let t = 3 * (this.config.lowLatencyMode && e.partTarget || e.targetduration);
                    return Math.max(e.age - t, 0)
                }
                get forwardBufferLength() {
                    let {
                        media: e,
                        levelDetails: t
                    } = this;
                    if (!e || !t) return 0;
                    let r = e.buffered.length;
                    return (r ? e.buffered.end(r - 1) : t.edge) - this.currentTime
                }
                destroy() {
                    this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null
                }
                registerListeners() {
                    this.hls.on(E.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(E.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(E.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(E.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(E.ERROR, this.onError, this)
                }
                unregisterListeners() {
                    this.hls.off(E.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(E.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.off(E.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(E.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.off(E.ERROR, this.onError, this)
                }
                onMediaAttached(e, t) {
                    this.media = t.media, this.media.addEventListener("timeupdate", this.timeupdateHandler)
                }
                onMediaDetaching() {
                    this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null)
                }
                onManifestLoading() {
                    this.levelDetails = null, this._latency = null, this.stallCount = 0
                }
                onLevelUpdated(e, {
                    details: t
                }) {
                    this.levelDetails = t, t.advanced && this.timeupdate(), !t.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler)
                }
                onError(e, t) {
                    var r;
                    t.details === v.BUFFER_STALLED_ERROR && (this.stallCount++, null != (r = this.levelDetails) && r.live && L.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))
                }
                timeupdate() {
                    let {
                        media: e,
                        levelDetails: t
                    } = this;
                    if (!e || !t) return;
                    this.currentTime = e.currentTime;
                    let r = this.computeLatency();
                    if (null === r) return;
                    this._latency = r;
                    let {
                        lowLatencyMode: i,
                        maxLiveSyncPlaybackRate: s
                    } = this.config;
                    if (!i || 1 === s) return;
                    let a = this.targetLatency;
                    if (null === a) return;
                    let n = r - a,
                        l = Math.min(this.maxLatency, a + t.targetduration);
                    if (t.live && n < l && n > .05 && this.forwardBufferLength > 1) {
                        let t = Math.round(2 / (1 + Math.exp(-.75 * n - this.edgeStalled)) * 20) / 20;
                        e.playbackRate = Math.min(Math.min(2, Math.max(1, s)), Math.max(1, t))
                    } else 1 !== e.playbackRate && 0 !== e.playbackRate && (e.playbackRate = 1)
                }
                estimateLiveEdge() {
                    let {
                        levelDetails: e
                    } = this;
                    return null === e ? null : e.edge + e.age
                }
                computeLatency() {
                    let e = this.estimateLiveEdge();
                    return null === e ? null : e - this.currentTime
                }
            };
            let j = ["NONE", "TYPE-0", "TYPE-1", null];
            var q = {
                No: "",
                Yes: "YES",
                v2: "v2"
            };
            let HlsUrlParameters = class HlsUrlParameters {
                constructor(e, t, r) {
                    this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = e, this.part = t, this.skip = r
                }
                addDirectives(e) {
                    let t = new self.URL(e);
                    return void 0 !== this.msn && t.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && t.searchParams.set("_HLS_part", this.part.toString()), this.skip && t.searchParams.set("_HLS_skip", this.skip), t.href
                }
            };
            let Level = class Level {
                constructor(e) {
                    this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [e.url], this._attrs = [e.attrs], this.bitrate = e.bitrate, e.details && (this.details = e.details), this.id = e.id || 0, this.name = e.name, this.width = e.width || 0, this.height = e.height || 0, this.audioCodec = e.audioCodec, this.videoCodec = e.videoCodec, this.unknownCodecs = e.unknownCodecs, this.codecSet = [e.videoCodec, e.audioCodec].filter(e => e).join(",").replace(/\.[^.,]+/g, "")
                }
                get maxBitrate() {
                    return Math.max(this.realBitrate, this.bitrate)
                }
                get attrs() {
                    return this._attrs[this._urlId]
                }
                get pathwayId() {
                    return this.attrs["PATHWAY-ID"] || "."
                }
                get uri() {
                    return this.url[this._urlId] || ""
                }
                get urlId() {
                    return this._urlId
                }
                set urlId(e) {
                    let t = e % this.url.length;
                    this._urlId !== t && (this.fragmentError = 0, this.loadError = 0, this.details = void 0, this._urlId = t)
                }
                get audioGroupId() {
                    var e;
                    return null == (e = this.audioGroupIds) ? void 0 : e[this.urlId]
                }
                get textGroupId() {
                    var e;
                    return null == (e = this.textGroupIds) ? void 0 : e[this.urlId]
                }
                addFallback(e) {
                    this.url.push(e.url), this._attrs.push(e.attrs)
                }
            };

            function updateFromToPTS(e, t) {
                let r = t.startPTS;
                if (T(r)) {
                    let i, s = 0;
                    t.sn > e.sn ? (s = r - e.start, i = e) : (s = e.start - r, i = t), i.duration !== s && (i.duration = s)
                } else if (t.sn > e.sn) {
                    let r = e.cc === t.cc;
                    r && e.minEndPTS ? t.start = e.start + (e.minEndPTS - e.start) : t.start = e.start + e.duration
                } else t.start = Math.max(e.start - t.duration, 0)
            }

            function updateFragPTSDTS(e, t, r, i, s, a) {
                let n;
                let l = i - r;
                l <= 0 && (L.warn("Fragment should have a positive duration", t), i = r + t.duration, a = s + t.duration);
                let o = r,
                    h = i,
                    d = t.startPTS,
                    u = t.endPTS;
                if (T(d)) {
                    let e = Math.abs(d - r);
                    T(t.deltaPTS) ? t.deltaPTS = Math.max(e, t.deltaPTS) : t.deltaPTS = e, o = Math.max(r, d), r = Math.min(r, d), s = Math.min(s, t.startDTS), h = Math.min(i, u), i = Math.max(i, u), a = Math.max(a, t.endDTS)
                }
                let c = r - t.start;
                0 !== t.start && (t.start = r), t.duration = i - t.start, t.startPTS = r, t.maxStartPTS = o, t.startDTS = s, t.endPTS = i, t.minEndPTS = h, t.endDTS = a;
                let f = t.sn;
                if (!e || f < e.startSN || f > e.endSN) return 0;
                let g = f - e.startSN,
                    m = e.fragments;
                for (m[g] = t, n = g; n > 0; n--) updateFromToPTS(m[n], m[n - 1]);
                for (n = g; n < m.length - 1; n++) updateFromToPTS(m[n], m[n + 1]);
                return e.fragmentHint && updateFromToPTS(m[m.length - 1], e.fragmentHint), e.PTSKnown = e.alignedSliding = !0, c
            }

            function adjustSliding(e, t) {
                let r = t.startSN + t.skippedSegments - e.startSN,
                    i = e.fragments;
                r < 0 || r >= i.length || addSliding(t, i[r].start)
            }

            function addSliding(e, t) {
                if (t) {
                    let r = e.fragments;
                    for (let i = e.skippedSegments; i < r.length; i++) r[i].start += t;
                    e.fragmentHint && (e.fragmentHint.start += t)
                }
            }

            function getPartWith(e, t, r) {
                var i;
                return null != e && e.details ? findPart(null == (i = e.details) ? void 0 : i.partList, t, r) : null
            }

            function findPart(e, t, r) {
                if (e)
                    for (let i = e.length; i--;) {
                        let s = e[i];
                        if (s.index === r && s.fragment.sn === t) return s
                    }
                return null
            }

            function isTimeoutError(e) {
                switch (e.details) {
                    case v.FRAG_LOAD_TIMEOUT:
                    case v.KEY_LOAD_TIMEOUT:
                    case v.LEVEL_LOAD_TIMEOUT:
                    case v.MANIFEST_LOAD_TIMEOUT:
                        return !0
                }
                return !1
            }

            function getRetryConfig(e, t) {
                let r = isTimeoutError(t);
                return e.default[`${r?"timeout":"error"}Retry`]
            }

            function getRetryDelay(e, t) {
                let r = "linear" === e.backoff ? 1 : Math.pow(2, t);
                return Math.min(r * e.retryDelayMs, e.maxRetryDelayMs)
            }

            function getLoaderConfigWithoutReties(e) {
                return _objectSpread2(_objectSpread2({}, e), {
                    errorRetry: null,
                    timeoutRetry: null
                })
            }

            function shouldRetry(e, t, r, i) {
                return !!e && t < e.maxNumRetry && (0 === i && !1 === navigator.onLine || !!i && (i < 400 || i > 499) || !!r)
            }
            let z = {
                search: function(e, t) {
                    let r = 0,
                        i = e.length - 1,
                        s = null,
                        a = null;
                    for (; r <= i;) {
                        a = e[s = (r + i) / 2 | 0];
                        let n = t(a);
                        if (n > 0) r = s + 1;
                        else {
                            if (!(n < 0)) return a;
                            i = s - 1
                        }
                    }
                    return null
                }
            };

            function findFragmentByPTS(e, t, r = 0, i = 0) {
                let s = null;
                if (e ? s = t[e.sn - t[0].sn + 1] || null : 0 === r && 0 === t[0].start && (s = t[0]), s && 0 === fragmentWithinToleranceTest(r, i, s)) return s;
                let a = z.search(t, fragmentWithinToleranceTest.bind(null, r, i));
                return a && (a !== e || !s) ? a : s
            }

            function fragmentWithinToleranceTest(e = 0, t = 0, r) {
                if (r.start <= e && r.start + r.duration > e) return 0;
                let i = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
                return r.start + r.duration - i <= e ? 1 : r.start - i > e && r.start ? -1 : 0
            }
            var X = {
                    DoNothing: 0,
                    SendAlternateToPenaltyBox: 2,
                    RetryRequest: 5
                },
                Q = {
                    None: 0,
                    MoveAllAlternatesMatchingHost: 1,
                    MoveAllAlternatesMatchingHDCP: 2
                };
            let BasePlaylistController = class BasePlaylistController {
                constructor(e, t) {
                    this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = !1, this.log = void 0, this.warn = void 0, this.log = L.log.bind(L, `${t}:`), this.warn = L.warn.bind(L, `${t}:`), this.hls = e
                }
                destroy() {
                    this.clearTimer(), this.hls = this.log = this.warn = null
                }
                clearTimer() {
                    clearTimeout(this.timer), this.timer = -1
                }
                startLoad() {
                    this.canLoad = !0, this.requestScheduled = -1, this.loadPlaylist()
                }
                stopLoad() {
                    this.canLoad = !1, this.clearTimer()
                }
                switchParams(e, t) {
                    let r = null == t ? void 0 : t.renditionReports;
                    if (r) {
                        let i = -1;
                        for (let s = 0; s < r.length; s++) {
                            let a;
                            let n = r[s];
                            try {
                                a = new self.URL(n.URI, t.url).href
                            } catch (e) {
                                L.warn(`Could not construct new URL for Rendition Report: ${e}`), a = n.URI || ""
                            }
                            if (a === e) {
                                i = s;
                                break
                            }
                            a === e.substring(0, a.length) && (i = s)
                        }
                        if (-1 !== i) {
                            let e = r[i],
                                s = parseInt(e["LAST-MSN"]) || (null == t ? void 0 : t.lastPartSn),
                                a = parseInt(e["LAST-PART"]) || (null == t ? void 0 : t.lastPartIndex);
                            if (this.hls.config.lowLatencyMode) {
                                let e = Math.min(t.age - t.partTarget, t.targetduration);
                                a >= 0 && e > t.partTarget && (a += 1)
                            }
                            return new HlsUrlParameters(s, a >= 0 ? a : void 0, q.No)
                        }
                    }
                }
                loadPlaylist(e) {
                    -1 === this.requestScheduled && (this.requestScheduled = self.performance.now())
                }
                shouldLoadPlaylist(e) {
                    return this.canLoad && !!e && !!e.url && (!e.details || e.details.live)
                }
                shouldReloadPlaylist(e) {
                    return -1 === this.timer && -1 === this.requestScheduled && this.shouldLoadPlaylist(e)
                }
                playlistLoaded(e, t, r) {
                    let {
                        details: i,
                        stats: s
                    } = t, a = self.performance.now(), n = s.loading.first ? Math.max(0, a - s.loading.first) : 0;
                    if (i.advancedDateTime = Date.now() - n, i.live || null != r && r.live) {
                        let n, l, o;
                        if (i.reloaded(r), r && this.log(`live playlist ${e} ${i.advanced?"REFRESHED "+i.lastPartSn+"-"+i.lastPartIndex:i.updated?"UPDATED":"MISSED"}`), r && i.fragments.length > 0 && function(e, t) {
                                let r, i = null,
                                    s = e.fragments;
                                for (let e = s.length - 1; e >= 0; e--) {
                                    let t = s[e].initSegment;
                                    if (t) {
                                        i = t;
                                        break
                                    }
                                }
                                e.fragmentHint && delete e.fragmentHint.endPTS;
                                let a = 0;
                                if (function(e, t, r) {
                                        let i = t.skippedSegments,
                                            s = Math.max(e.startSN, t.startSN) - t.startSN,
                                            a = (e.fragmentHint ? 1 : 0) + (i ? t.endSN : Math.min(e.endSN, t.endSN)) - t.startSN,
                                            n = t.startSN - e.startSN,
                                            l = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments,
                                            o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments;
                                        for (let e = s; e <= a; e++) {
                                            let s = o[n + e],
                                                a = l[e];
                                            i && !a && e < i && (a = t.fragments[e] = s), s && a && r(s, a)
                                        }
                                    }(e, t, (e, s) => {
                                        e.relurl && (a = e.cc - s.cc), T(e.startPTS) && T(e.endPTS) && (s.start = s.startPTS = e.startPTS, s.startDTS = e.startDTS, s.maxStartPTS = e.maxStartPTS, s.endPTS = e.endPTS, s.endDTS = e.endDTS, s.minEndPTS = e.minEndPTS, s.duration = e.endPTS - e.startPTS, s.duration && (r = s), t.PTSKnown = t.alignedSliding = !0), s.elementaryStreams = e.elementaryStreams, s.loader = e.loader, s.stats = e.stats, s.urlId = e.urlId, e.initSegment && (s.initSegment = e.initSegment, i = e.initSegment)
                                    }), i) {
                                    let e = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments;
                                    e.forEach(e => {
                                        var t;
                                        e.initSegment && e.initSegment.relurl !== (null == (t = i) ? void 0 : t.relurl) || (e.initSegment = i)
                                    })
                                }
                                if (t.skippedSegments) {
                                    if (t.deltaUpdateFailed = t.fragments.some(e => !e), t.deltaUpdateFailed) {
                                        L.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
                                        for (let e = t.skippedSegments; e--;) t.fragments.shift();
                                        t.startSN = t.fragments[0].sn, t.startCC = t.fragments[0].cc
                                    } else t.canSkipDateRanges && (t.dateRanges = function(e, t, r) {
                                        let i = _extends({}, e);
                                        return r && r.forEach(e => {
                                            delete i[e]
                                        }), Object.keys(t).forEach(e => {
                                            let r = new DateRange(t[e].attr, i[e]);
                                            r.isValid ? i[e] = r : L.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(t[e].attr)}"`)
                                        }), i
                                    }(e.dateRanges, t.dateRanges, t.recentlyRemovedDateranges))
                                }
                                let n = t.fragments;
                                if (a) {
                                    L.warn("discontinuity sliding from playlist, take drift into account");
                                    for (let e = 0; e < n.length; e++) n[e].cc += a
                                }
                                t.skippedSegments && (t.startCC = t.fragments[0].cc),
                                    function(e, t, r) {
                                        if (e && t) {
                                            let i = 0;
                                            for (let s = 0, a = e.length; s <= a; s++) {
                                                let a = e[s],
                                                    n = t[s + i];
                                                a && n && a.index === n.index && a.fragment.sn === n.fragment.sn ? r(a, n) : i--
                                            }
                                        }
                                    }(e.partList, t.partList, (e, t) => {
                                        t.elementaryStreams = e.elementaryStreams, t.stats = e.stats
                                    }), r ? updateFragPTSDTS(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : adjustSliding(e, t), n.length && (t.totalduration = t.edge - n[0].start), t.driftStartTime = e.driftStartTime, t.driftStart = e.driftStart;
                                let l = t.advancedDateTime;
                                if (t.advanced && l) {
                                    let e = t.edge;
                                    t.driftStart || (t.driftStartTime = l, t.driftStart = e), t.driftEndTime = l, t.driftEnd = e
                                } else t.driftEndTime = e.driftEndTime, t.driftEnd = e.driftEnd, t.advancedDateTime = e.advancedDateTime
                            }(r, i), !this.canLoad || !i.live) return;
                        if (i.canBlockReload && i.endSN && i.advanced) {
                            let e = this.hls.config.lowLatencyMode,
                                s = i.lastPartSn,
                                a = i.endSN,
                                h = i.lastPartIndex,
                                d = s === a; - 1 !== h ? (l = d ? a + 1 : s, o = d ? e ? 0 : h : h + 1) : l = a + 1;
                            let u = i.age,
                                c = u + i.ageHeader,
                                f = Math.min(c - i.partTarget, 1.5 * i.targetduration);
                            if (f > 0) {
                                if (r && f > r.tuneInGoal) this.warn(`CDN Tune-in goal increased from: ${r.tuneInGoal} to: ${f} with playlist age: ${i.age}`), f = 0;
                                else {
                                    let e = Math.floor(f / i.targetduration);
                                    if (l += e, void 0 !== o) {
                                        let e = Math.round(f % i.targetduration / i.partTarget);
                                        o += e
                                    }
                                    this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${u.toFixed(2)}s goal: ${f} skip sn ${e} to part ${o}`)
                                }
                                i.tuneInGoal = f
                            }
                            if (n = this.getDeliveryDirectives(i, t.deliveryDirectives, l, o), e || !d) {
                                this.loadPlaylist(n);
                                return
                            }
                        } else(i.canBlockReload || i.canSkipUntil) && (n = this.getDeliveryDirectives(i, t.deliveryDirectives, l, o));
                        let h = this.hls.mainForwardBufferInfo,
                            d = h ? h.end - h.len : 0,
                            u = (i.edge - d) * 1e3,
                            c = function(e, t = 1 / 0) {
                                let r = 1e3 * e.targetduration;
                                if (e.updated) {
                                    let i = e.fragments;
                                    if (i.length && 4 * r > t) {
                                        let e = 1e3 * i[i.length - 1].duration;
                                        e < r && (r = e)
                                    }
                                } else r /= 2;
                                return Math.round(r)
                            }(i, u);
                        i.updated && a > this.requestScheduled + c && (this.requestScheduled = s.loading.start), void 0 !== l && i.canBlockReload ? this.requestScheduled = s.loading.first + c - (1e3 * i.partTarget || 1e3) : -1 === this.requestScheduled || this.requestScheduled + c < a ? this.requestScheduled = a : this.requestScheduled - a <= 0 && (this.requestScheduled += c);
                        let f = this.requestScheduled - a;
                        f = Math.max(0, f), this.log(`reload live playlist ${e} in ${Math.round(f)} ms`), this.timer = self.setTimeout(() => this.loadPlaylist(n), f)
                    } else this.clearTimer()
                }
                getDeliveryDirectives(e, t, r, i) {
                    let s = function(e, t) {
                        let {
                            canSkipUntil: r,
                            canSkipDateRanges: i,
                            endSN: s
                        } = e;
                        return r && (void 0 !== t ? t - s : 0) < r ? i ? q.v2 : q.Yes : q.No
                    }(e, r);
                    return null != t && t.skip && e.deltaUpdateFailed && (r = t.msn, i = t.part, s = q.No), new HlsUrlParameters(r, i, s)
                }
                checkRetry(e) {
                    let t = e.details,
                        r = isTimeoutError(e),
                        i = e.errorAction,
                        {
                            action: s,
                            retryCount: a = 0,
                            retryConfig: n
                        } = i || {},
                        l = !!i && !!n && (s === X.RetryRequest || !i.resolved && s === X.SendAlternateToPenaltyBox);
                    if (l) {
                        var o;
                        if (this.requestScheduled = -1, a >= n.maxNumRetry) return !1;
                        if (r && null != (o = e.context) && o.deliveryDirectives) this.warn(`Retrying playlist loading ${a+1}/${n.maxNumRetry} after "${t}" without delivery-directives`), this.loadPlaylist();
                        else {
                            let e = getRetryDelay(n, a);
                            this.timer = self.setTimeout(() => this.loadPlaylist(), e), this.warn(`Retrying playlist loading ${a+1}/${n.maxNumRetry} after "${t}" in ${e}ms`)
                        }
                        e.levelRetry = !0, i.resolved = !0
                    }
                    return l
                }
            };
            let LevelController = class LevelController extends BasePlaylistController {
                constructor(e, t) {
                    super(e, "[level-controller]"), this._levels = [], this._firstLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = t, this._registerListeners()
                }
                _registerListeners() {
                    let {
                        hls: e
                    } = this;
                    e.on(E.MANIFEST_LOADING, this.onManifestLoading, this), e.on(E.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(E.LEVEL_LOADED, this.onLevelLoaded, this), e.on(E.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(E.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(E.FRAG_LOADED, this.onFragLoaded, this), e.on(E.ERROR, this.onError, this)
                }
                _unregisterListeners() {
                    let {
                        hls: e
                    } = this;
                    e.off(E.MANIFEST_LOADING, this.onManifestLoading, this), e.off(E.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(E.LEVEL_LOADED, this.onLevelLoaded, this), e.off(E.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(E.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(E.FRAG_LOADED, this.onFragLoaded, this), e.off(E.ERROR, this.onError, this)
                }
                destroy() {
                    this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy()
                }
                startLoad() {
                    let e = this._levels;
                    e.forEach(e => {
                        e.loadError = 0, e.fragmentError = 0
                    }), super.startLoad()
                }
                resetLevels() {
                    this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = []
                }
                onManifestLoading(e, t) {
                    this.resetLevels()
                }
                onManifestLoaded(e, t) {
                    let r;
                    let i = [],
                        a = {};
                    t.levels.forEach(e => {
                        var t;
                        let n = e.attrs;
                        (null == (t = e.audioCodec) ? void 0 : t.indexOf("mp4a.40.34")) !== -1 && (s || (s = /chrome|firefox/i.test(navigator.userAgent)), s && (e.audioCodec = void 0));
                        let {
                            AUDIO: l,
                            CODECS: o,
                            "FRAME-RATE": h,
                            "PATHWAY-ID": d,
                            RESOLUTION: u,
                            SUBTITLES: c
                        } = n, f = `${d||"."}-`, g = `${f}${e.bitrate}-${u}-${h}-${o}`;
                        (r = a[g]) ? r.addFallback(e): (r = new Level(e), a[g] = r, i.push(r)), addGroupId(r, "audio", l), addGroupId(r, "text", c)
                    }), this.filterAndSortMediaOptions(i, t)
                }
                filterAndSortMediaOptions(e, t) {
                    let r = [],
                        i = [],
                        s = !1,
                        a = !1,
                        n = !1,
                        l = e.filter(({
                            audioCodec: e,
                            videoCodec: t,
                            width: r,
                            height: i,
                            unknownCodecs: l
                        }) => (s || (s = !!(r && i)), a || (a = !!t), n || (n = !!e), !(null != l && l.length) && (!e || isCodecSupportedInMp4(e, "audio")) && (!t || isCodecSupportedInMp4(t, "video"))));
                    if ((s || a) && n && (l = l.filter(({
                            videoCodec: e,
                            width: t,
                            height: r
                        }) => !!e || !!(t && r))), 0 === l.length) {
                        Promise.resolve().then(() => {
                            if (this.hls) {
                                let e = Error("no level with compatible codecs found in manifest");
                                this.hls.trigger(E.ERROR, {
                                    type: y.MEDIA_ERROR,
                                    details: v.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                                    fatal: !0,
                                    url: t.url,
                                    error: e,
                                    reason: e.message
                                })
                            }
                        });
                        return
                    }
                    t.audioTracks && assignTrackIdsByGroup(r = t.audioTracks.filter(e => !e.audioCodec || isCodecSupportedInMp4(e.audioCodec, "audio"))), t.subtitles && assignTrackIdsByGroup(i = t.subtitles);
                    let o = l.slice(0);
                    l.sort((e, t) => e.attrs["HDCP-LEVEL"] !== t.attrs["HDCP-LEVEL"] ? (e.attrs["HDCP-LEVEL"] || "") > (t.attrs["HDCP-LEVEL"] || "") ? 1 : -1 : e.bitrate !== t.bitrate ? e.bitrate - t.bitrate : e.attrs["FRAME-RATE"] !== t.attrs["FRAME-RATE"] ? e.attrs.decimalFloatingPoint("FRAME-RATE") - t.attrs.decimalFloatingPoint("FRAME-RATE") : e.attrs.SCORE !== t.attrs.SCORE ? e.attrs.decimalFloatingPoint("SCORE") - t.attrs.decimalFloatingPoint("SCORE") : s && e.height !== t.height ? e.height - t.height : 0);
                    let h = o[0];
                    if (this.steering && (l = this.steering.filterParsedLevels(l)).length !== o.length) {
                        for (let e = 0; e < o.length; e++)
                            if (o[e].pathwayId === l[0].pathwayId) {
                                h = o[e];
                                break
                            }
                    }
                    this._levels = l;
                    for (let e = 0; e < l.length; e++)
                        if (l[e] === h) {
                            this._firstLevel = e, this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${h.bitrate}`);
                            break
                        }
                    let d = n && !a,
                        u = {
                            levels: l,
                            audioTracks: r,
                            subtitleTracks: i,
                            sessionData: t.sessionData,
                            sessionKeys: t.sessionKeys,
                            firstLevel: this._firstLevel,
                            stats: t.stats,
                            audio: n,
                            video: a,
                            altAudio: !d && r.some(e => !!e.url)
                        };
                    this.hls.trigger(E.MANIFEST_PARSED, u), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition)
                }
                get levels() {
                    return 0 === this._levels.length ? null : this._levels
                }
                get level() {
                    return this.currentLevelIndex
                }
                set level(e) {
                    let t = this._levels;
                    if (0 === t.length) return;
                    if (e < 0 || e >= t.length) {
                        let r = Error("invalid level idx"),
                            i = e < 0;
                        if (this.hls.trigger(E.ERROR, {
                                type: y.OTHER_ERROR,
                                details: v.LEVEL_SWITCH_ERROR,
                                level: e,
                                fatal: i,
                                error: r,
                                reason: r.message
                            }), i) return;
                        e = Math.min(e, t.length - 1)
                    }
                    let r = this.currentLevelIndex,
                        i = this.currentLevel,
                        s = i ? i.attrs["PATHWAY-ID"] : void 0,
                        a = t[e],
                        n = a.attrs["PATHWAY-ID"];
                    if (this.currentLevelIndex = e, this.currentLevel = a, r === e && a.details && i && s === n) return;
                    this.log(`Switching to level ${e}${n?" with Pathway "+n:""} from level ${r}${s?" with Pathway "+s:""}`);
                    let l = _extends({}, a, {
                        level: e,
                        maxBitrate: a.maxBitrate,
                        attrs: a.attrs,
                        uri: a.uri,
                        urlId: a.urlId
                    });
                    delete l._attrs, delete l._urlId, this.hls.trigger(E.LEVEL_SWITCHING, l);
                    let o = a.details;
                    if (!o || o.live) {
                        let e = this.switchParams(a.uri, null == i ? void 0 : i.details);
                        this.loadPlaylist(e)
                    }
                }
                get manualLevel() {
                    return this.manualLevelIndex
                }
                set manualLevel(e) {
                    this.manualLevelIndex = e, void 0 === this._startLevel && (this._startLevel = e), -1 !== e && (this.level = e)
                }
                get firstLevel() {
                    return this._firstLevel
                }
                set firstLevel(e) {
                    this._firstLevel = e
                }
                get startLevel() {
                    if (void 0 !== this._startLevel) return this._startLevel; {
                        let e = this.hls.config.startLevel;
                        return void 0 !== e ? e : this._firstLevel
                    }
                }
                set startLevel(e) {
                    this._startLevel = e
                }
                onError(e, t) {
                    !t.fatal && t.context && t.context.type === H.LEVEL && t.context.level === this.level && this.checkRetry(t)
                }
                onFragLoaded(e, {
                    frag: t
                }) {
                    if (void 0 !== t && t.type === V.MAIN) {
                        let e = this._levels[t.level];
                        void 0 !== e && (e.loadError = 0)
                    }
                }
                onLevelLoaded(e, t) {
                    var r, i;
                    let {
                        level: s,
                        details: a
                    } = t, n = this._levels[s];
                    if (!n) {
                        this.warn(`Invalid level index ${s}`), null != (i = t.deliveryDirectives) && i.skip && (a.deltaUpdateFailed = !0);
                        return
                    }
                    s === this.currentLevelIndex ? (0 === n.fragmentError && (n.loadError = 0), this.playlistLoaded(s, t, n.details)) : null != (r = t.deliveryDirectives) && r.skip && (a.deltaUpdateFailed = !0)
                }
                onAudioTrackSwitched(e, t) {
                    let r = this.currentLevel;
                    if (!r) return;
                    let i = this.hls.audioTracks[t.id].groupId;
                    if (r.audioGroupIds && r.audioGroupId !== i) {
                        let e = -1;
                        for (let t = 0; t < r.audioGroupIds.length; t++)
                            if (r.audioGroupIds[t] === i) {
                                e = t;
                                break
                            } - 1 !== e && e !== r.urlId && (r.urlId = e, this.canLoad && this.startLoad())
                    }
                }
                loadPlaylist(e) {
                    super.loadPlaylist();
                    let t = this.currentLevelIndex,
                        r = this.currentLevel;
                    if (r && this.shouldLoadPlaylist(r)) {
                        let i = r.urlId,
                            s = r.uri;
                        if (e) try {
                            s = e.addDirectives(s)
                        } catch (e) {
                            this.warn(`Could not construct new URL with HLS Delivery Directives: ${e}`)
                        }
                        let a = r.attrs["PATHWAY-ID"];
                        this.log(`Loading level index ${t}${(null==e?void 0:e.msn)!==void 0?" at sn "+e.msn+" part "+e.part:""} with${a?" Pathway "+a:""} URI ${i+1}/${r.url.length} ${s}`), this.clearTimer(), this.hls.trigger(E.LEVEL_LOADING, {
                            url: s,
                            level: t,
                            id: i,
                            deliveryDirectives: e || null
                        })
                    }
                }
                get nextLoadLevel() {
                    return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                }
                set nextLoadLevel(e) {
                    this.level = e, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
                }
                removeLevel(e, t) {
                    let filterLevelAndGroupByIdIndex = (e, r) => r !== t,
                        r = this._levels.filter((r, i) => i !== e || (r.url.length > 1 && void 0 !== t ? (r.url = r.url.filter(filterLevelAndGroupByIdIndex), r.audioGroupIds && (r.audioGroupIds = r.audioGroupIds.filter(filterLevelAndGroupByIdIndex)), r.textGroupIds && (r.textGroupIds = r.textGroupIds.filter(filterLevelAndGroupByIdIndex)), r.urlId = 0, !0) : (this.steering && this.steering.removeLevel(r), !1)));
                    this.hls.trigger(E.LEVELS_UPDATED, {
                        levels: r
                    })
                }
                onLevelsUpdated(e, {
                    levels: t
                }) {
                    t.forEach((e, t) => {
                        let {
                            details: r
                        } = e;
                        null != r && r.fragments && r.fragments.forEach(e => {
                            e.level = t
                        })
                    }), this._levels = t
                }
            };

            function addGroupId(e, t, r) {
                r && ("audio" === t ? (e.audioGroupIds || (e.audioGroupIds = []), e.audioGroupIds[e.url.length - 1] = r) : "text" === t && (e.textGroupIds || (e.textGroupIds = []), e.textGroupIds[e.url.length - 1] = r))
            }

            function assignTrackIdsByGroup(e) {
                let t = {};
                e.forEach(e => {
                    let r = e.groupId || "";
                    e.id = t[r] = t[r] || 0, t[r]++
                })
            }
            var J = {
                NOT_LOADED: "NOT_LOADED",
                APPENDING: "APPENDING",
                PARTIAL: "PARTIAL",
                OK: "OK"
            };
            let FragmentTracker = class FragmentTracker {
                constructor(e) {
                    this.activePartLists = Object.create(null), this.endListFragments = Object.create(null), this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = .2, this.hls = void 0, this.hasGaps = !1, this.hls = e, this._registerListeners()
                }
                _registerListeners() {
                    let {
                        hls: e
                    } = this;
                    e.on(E.BUFFER_APPENDED, this.onBufferAppended, this), e.on(E.FRAG_BUFFERED, this.onFragBuffered, this), e.on(E.FRAG_LOADED, this.onFragLoaded, this)
                }
                _unregisterListeners() {
                    let {
                        hls: e
                    } = this;
                    e.off(E.BUFFER_APPENDED, this.onBufferAppended, this), e.off(E.FRAG_BUFFERED, this.onFragBuffered, this), e.off(E.FRAG_LOADED, this.onFragLoaded, this)
                }
                destroy() {
                    this._unregisterListeners(), this.fragments = this.activePartLists = this.endListFragments = this.timeRanges = null
                }
                getAppendedFrag(e, t) {
                    let r = this.activePartLists[t];
                    if (r)
                        for (let t = r.length; t--;) {
                            let i = r[t];
                            if (!i) break;
                            let s = i.end;
                            if (i.start <= e && null !== s && e <= s) return i
                        }
                    return this.getBufferedFrag(e, t)
                }
                getBufferedFrag(e, t) {
                    let {
                        fragments: r
                    } = this, i = Object.keys(r);
                    for (let s = i.length; s--;) {
                        let a = r[i[s]];
                        if ((null == a ? void 0 : a.body.type) === t && a.buffered) {
                            let t = a.body;
                            if (t.start <= e && e <= t.end) return t
                        }
                    }
                    return null
                }
                detectEvictedFragments(e, t, r, i) {
                    this.timeRanges && (this.timeRanges[e] = t);
                    let s = (null == i ? void 0 : i.fragment.sn) || -1;
                    Object.keys(this.fragments).forEach(i => {
                        let a = this.fragments[i];
                        if (!a || s >= a.body.sn) return;
                        if (!a.buffered && !a.loaded) {
                            a.body.type === r && this.removeFragment(a.body);
                            return
                        }
                        let n = a.range[e];
                        n && n.time.some(e => {
                            let r = !this.isTimeBuffered(e.startPTS, e.endPTS, t);
                            return r && this.removeFragment(a.body), r
                        })
                    })
                }
                detectPartialFragments(e) {
                    let t = this.timeRanges,
                        {
                            frag: r,
                            part: i
                        } = e;
                    if (!t || "initSegment" === r.sn) return;
                    let s = getFragmentKey(r),
                        a = this.fragments[s];
                    if (!a || a.buffered && r.gap) return;
                    let n = !r.relurl;
                    if (Object.keys(t).forEach(e => {
                            let s = r.elementaryStreams[e];
                            if (!s) return;
                            let l = t[e],
                                o = n || !0 === s.partial;
                            a.range[e] = this.getBufferedTimes(r, i, o, l)
                        }), a.loaded = null, Object.keys(a.range).length) {
                        a.buffered = !0;
                        let e = a.body.endList = r.endList || a.body.endList;
                        e && (this.endListFragments[a.body.type] = a), isPartial(a) || this.removeParts(r.sn - 1, r.type)
                    } else this.removeFragment(a.body)
                }
                removeParts(e, t) {
                    let r = this.activePartLists[t];
                    r && (this.activePartLists[t] = r.filter(t => t.fragment.sn >= e))
                }
                fragBuffered(e, t) {
                    let r = getFragmentKey(e),
                        i = this.fragments[r];
                    !i && t && (i = this.fragments[r] = {
                        body: e,
                        appendedPTS: null,
                        loaded: null,
                        buffered: !1,
                        range: Object.create(null)
                    }, e.gap && (this.hasGaps = !0)), i && (i.loaded = null, i.buffered = !0)
                }
                getBufferedTimes(e, t, r, i) {
                    let s = {
                            time: [],
                            partial: r
                        },
                        a = e.start,
                        n = e.end,
                        l = e.minEndPTS || n,
                        o = e.maxStartPTS || a;
                    for (let e = 0; e < i.length; e++) {
                        let t = i.start(e) - this.bufferPadding,
                            r = i.end(e) + this.bufferPadding;
                        if (o >= t && l <= r) {
                            s.time.push({
                                startPTS: Math.max(a, i.start(e)),
                                endPTS: Math.min(n, i.end(e))
                            });
                            break
                        }
                        if (a < r && n > t) s.partial = !0, s.time.push({
                            startPTS: Math.max(a, i.start(e)),
                            endPTS: Math.min(n, i.end(e))
                        });
                        else if (n <= t) break
                    }
                    return s
                }
                getPartialFragment(e) {
                    let t, r, i, s = null,
                        a = 0,
                        {
                            bufferPadding: n,
                            fragments: l
                        } = this;
                    return Object.keys(l).forEach(o => {
                        let h = l[o];
                        h && isPartial(h) && (r = h.body.start - n, i = h.body.end + n, e >= r && e <= i && a <= (t = Math.min(e - r, i - e)) && (s = h.body, a = t))
                    }), s
                }
                isEndListAppended(e) {
                    let t = this.endListFragments[e];
                    return void 0 !== t && (t.buffered || isPartial(t))
                }
                getState(e) {
                    let t = getFragmentKey(e),
                        r = this.fragments[t];
                    return r ? r.buffered ? isPartial(r) ? J.PARTIAL : J.OK : J.APPENDING : J.NOT_LOADED
                }
                isTimeBuffered(e, t, r) {
                    let i, s;
                    for (let a = 0; a < r.length; a++) {
                        if (i = r.start(a) - this.bufferPadding, s = r.end(a) + this.bufferPadding, e >= i && t <= s) return !0;
                        if (t <= i) break
                    }
                    return !1
                }
                onFragLoaded(e, t) {
                    let {
                        frag: r,
                        part: i
                    } = t;
                    if ("initSegment" === r.sn || r.bitrateTest) return;
                    let s = getFragmentKey(r);
                    this.fragments[s] = {
                        body: r,
                        appendedPTS: null,
                        loaded: i ? null : t,
                        buffered: !1,
                        range: Object.create(null)
                    }
                }
                onBufferAppended(e, t) {
                    let {
                        frag: r,
                        part: i,
                        timeRanges: s
                    } = t;
                    if ("initSegment" === r.sn) return;
                    let a = r.type;
                    if (i) {
                        let e = this.activePartLists[a];
                        e || (this.activePartLists[a] = e = []), e.push(i)
                    }
                    this.timeRanges = s, Object.keys(s).forEach(e => {
                        let t = s[e];
                        this.detectEvictedFragments(e, t, a, i)
                    })
                }
                onFragBuffered(e, t) {
                    this.detectPartialFragments(t)
                }
                hasFragment(e) {
                    let t = getFragmentKey(e);
                    return !!this.fragments[t]
                }
                hasParts(e) {
                    var t;
                    return !!(null != (t = this.activePartLists[e]) && t.length)
                }
                removeFragmentsInRange(e, t, r, i, s) {
                    (!i || this.hasGaps) && Object.keys(this.fragments).forEach(a => {
                        let n = this.fragments[a];
                        if (!n) return;
                        let l = n.body;
                        l.type === r && (!i || l.gap) && l.start < t && l.end > e && (n.buffered || s) && this.removeFragment(l)
                    })
                }
                removeFragment(e) {
                    let t = getFragmentKey(e);
                    e.stats.loaded = 0, e.clearElementaryStreamInfo();
                    let r = this.activePartLists[e.type];
                    if (r) {
                        let t = e.sn;
                        this.activePartLists[e.type] = r.filter(e => e.fragment.sn !== t)
                    }
                    delete this.fragments[t], e.endList && delete this.endListFragments[e.type]
                }
                removeAllFragments() {
                    this.fragments = Object.create(null), this.endListFragments = Object.create(null), this.activePartLists = Object.create(null), this.hasGaps = !1
                }
            };

            function isPartial(e) {
                var t, r, i;
                return e.buffered && (e.body.gap || (null == (t = e.range.video) ? void 0 : t.partial) || (null == (r = e.range.audio) ? void 0 : r.partial) || (null == (i = e.range.audiovideo) ? void 0 : i.partial))
            }

            function getFragmentKey(e) {
                return `${e.type}_${e.level}_${e.urlId}_${e.sn}`
            }
            let FragmentLoader = class FragmentLoader {
                constructor(e) {
                    this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = e
                }
                destroy() {
                    this.loader && (this.loader.destroy(), this.loader = null)
                }
                abort() {
                    this.loader && this.loader.abort()
                }
                load(e, t) {
                    let r = e.url;
                    if (!r) return Promise.reject(new LoadError({
                        type: y.NETWORK_ERROR,
                        details: v.FRAG_LOAD_ERROR,
                        fatal: !1,
                        frag: e,
                        error: Error(`Fragment does not have a ${r?"part list":"url"}`),
                        networkDetails: null
                    }));
                    this.abort();
                    let i = this.config,
                        s = i.fLoader,
                        a = i.loader;
                    return new Promise((n, l) => {
                        if (this.loader && this.loader.destroy(), e.gap) {
                            if (e.tagList.some(e => "GAP" === e[0])) {
                                l(createGapLoadError(e));
                                return
                            }
                            e.gap = !1
                        }
                        let o = this.loader = e.loader = s ? new s(i) : new a(i),
                            h = createLoaderContext(e),
                            d = getLoaderConfigWithoutReties(i.fragLoadPolicy.default),
                            u = {
                                loadPolicy: d,
                                timeout: d.maxLoadTimeMs,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: 0,
                                highWaterMark: "initSegment" === e.sn ? 1 / 0 : 131072
                            };
                        e.stats = o.stats, o.load(h, u, {
                            onSuccess: (t, r, i, s) => {
                                this.resetLoader(e, o);
                                let a = t.data;
                                i.resetIV && e.decryptdata && (e.decryptdata.iv = new Uint8Array(a.slice(0, 16)), a = a.slice(16)), n({
                                    frag: e,
                                    part: null,
                                    payload: a,
                                    networkDetails: s
                                })
                            },
                            onError: (t, i, s, a) => {
                                this.resetLoader(e, o), l(new LoadError({
                                    type: y.NETWORK_ERROR,
                                    details: v.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: e,
                                    response: _objectSpread2({
                                        url: r,
                                        data: void 0
                                    }, t),
                                    error: Error(`HTTP Error ${t.code} ${t.text}`),
                                    networkDetails: s,
                                    stats: a
                                }))
                            },
                            onAbort: (t, r, i) => {
                                this.resetLoader(e, o), l(new LoadError({
                                    type: y.NETWORK_ERROR,
                                    details: v.INTERNAL_ABORTED,
                                    fatal: !1,
                                    frag: e,
                                    error: Error("Aborted"),
                                    networkDetails: i,
                                    stats: t
                                }))
                            },
                            onTimeout: (t, r, i) => {
                                this.resetLoader(e, o), l(new LoadError({
                                    type: y.NETWORK_ERROR,
                                    details: v.FRAG_LOAD_TIMEOUT,
                                    fatal: !1,
                                    frag: e,
                                    error: Error(`Timeout after ${u.timeout}ms`),
                                    networkDetails: i,
                                    stats: t
                                }))
                            },
                            onProgress: (r, i, s, a) => {
                                t && t({
                                    frag: e,
                                    part: null,
                                    payload: s,
                                    networkDetails: a
                                })
                            }
                        })
                    })
                }
                loadPart(e, t, r) {
                    this.abort();
                    let i = this.config,
                        s = i.fLoader,
                        a = i.loader;
                    return new Promise((n, l) => {
                        if (this.loader && this.loader.destroy(), e.gap || t.gap) {
                            l(createGapLoadError(e, t));
                            return
                        }
                        let o = this.loader = e.loader = s ? new s(i) : new a(i),
                            h = createLoaderContext(e, t),
                            d = getLoaderConfigWithoutReties(i.fragLoadPolicy.default),
                            u = {
                                loadPolicy: d,
                                timeout: d.maxLoadTimeMs,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: 0,
                                highWaterMark: 131072
                            };
                        t.stats = o.stats, o.load(h, u, {
                            onSuccess: (i, s, a, l) => {
                                this.resetLoader(e, o), this.updateStatsFromPart(e, t);
                                let h = {
                                    frag: e,
                                    part: t,
                                    payload: i.data,
                                    networkDetails: l
                                };
                                r(h), n(h)
                            },
                            onError: (r, i, s, a) => {
                                this.resetLoader(e, o), l(new LoadError({
                                    type: y.NETWORK_ERROR,
                                    details: v.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: e,
                                    part: t,
                                    response: _objectSpread2({
                                        url: h.url,
                                        data: void 0
                                    }, r),
                                    error: Error(`HTTP Error ${r.code} ${r.text}`),
                                    networkDetails: s,
                                    stats: a
                                }))
                            },
                            onAbort: (r, i, s) => {
                                e.stats.aborted = t.stats.aborted, this.resetLoader(e, o), l(new LoadError({
                                    type: y.NETWORK_ERROR,
                                    details: v.INTERNAL_ABORTED,
                                    fatal: !1,
                                    frag: e,
                                    part: t,
                                    error: Error("Aborted"),
                                    networkDetails: s,
                                    stats: r
                                }))
                            },
                            onTimeout: (r, i, s) => {
                                this.resetLoader(e, o), l(new LoadError({
                                    type: y.NETWORK_ERROR,
                                    details: v.FRAG_LOAD_TIMEOUT,
                                    fatal: !1,
                                    frag: e,
                                    part: t,
                                    error: Error(`Timeout after ${u.timeout}ms`),
                                    networkDetails: s,
                                    stats: r
                                }))
                            }
                        })
                    })
                }
                updateStatsFromPart(e, t) {
                    let r = e.stats,
                        i = t.stats,
                        s = i.total;
                    if (r.loaded += i.loaded, s) {
                        let i = Math.round(e.duration / t.duration),
                            a = Math.min(Math.round(r.loaded / s), i),
                            n = (i - a) * Math.round(r.loaded / a);
                        r.total = r.loaded + n
                    } else r.total = Math.max(r.loaded, r.total);
                    let a = r.loading,
                        n = i.loading;
                    a.start ? a.first += n.first - n.start : (a.start = n.start, a.first = n.first), a.end = n.end
                }
                resetLoader(e, t) {
                    e.loader = null, this.loader === t && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t.destroy()
                }
            };

            function createLoaderContext(e, t = null) {
                let r = t || e,
                    i = {
                        frag: e,
                        part: t,
                        responseType: "arraybuffer",
                        url: r.url,
                        headers: {},
                        rangeStart: 0,
                        rangeEnd: 0
                    },
                    s = r.byteRangeStartOffset,
                    a = r.byteRangeEndOffset;
                if (T(s) && T(a)) {
                    var n;
                    let t = s,
                        r = a;
                    if ("initSegment" === e.sn && (null == (n = e.decryptdata) ? void 0 : n.method) === "AES-128") {
                        let e = a - s;
                        e % 16 && (r = a + (16 - e % 16)), 0 !== s && (i.resetIV = !0, t = s - 16)
                    }
                    i.rangeStart = t, i.rangeEnd = r
                }
                return i
            }

            function createGapLoadError(e, t) {
                let r = Error(`GAP ${e.gap?"tag":"attribute"} found`),
                    i = {
                        type: y.MEDIA_ERROR,
                        details: v.FRAG_GAP,
                        fatal: !1,
                        frag: e,
                        error: r,
                        networkDetails: null
                    };
                return t && (i.part = t), (t || e).stats.aborted = !0, new LoadError(i)
            }
            let LoadError = class LoadError extends Error {
                constructor(e) {
                    super(e.error.message), this.data = void 0, this.data = e
                }
            };
            let KeyLoader = class KeyLoader {
                constructor(e) {
                    this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = e
                }
                abort(e) {
                    for (let t in this.keyUriToKeyInfo) {
                        let r = this.keyUriToKeyInfo[t].loader;
                        if (r) {
                            if (e && e !== r.context.frag.type) return;
                            r.abort()
                        }
                    }
                }
                detach() {
                    for (let e in this.keyUriToKeyInfo) {
                        let t = this.keyUriToKeyInfo[e];
                        (t.mediaKeySessionContext || t.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[e]
                    }
                }
                destroy() {
                    for (let e in this.detach(), this.keyUriToKeyInfo) {
                        let t = this.keyUriToKeyInfo[e].loader;
                        t && t.destroy()
                    }
                    this.keyUriToKeyInfo = {}
                }
                createKeyLoadError(e, t = v.KEY_LOAD_ERROR, r, i, s) {
                    return new LoadError({
                        type: y.NETWORK_ERROR,
                        details: t,
                        fatal: !1,
                        frag: e,
                        response: s,
                        error: r,
                        networkDetails: i
                    })
                }
                loadClear(e, t) {
                    if (this.emeController && this.config.emeEnabled) {
                        let {
                            sn: r,
                            cc: i
                        } = e;
                        for (let e = 0; e < t.length; e++) {
                            let s = t[e];
                            if (i <= s.cc && ("initSegment" === r || "initSegment" === s.sn || r < s.sn)) {
                                this.emeController.selectKeySystemFormat(s).then(e => {
                                    s.setKeyFormat(e)
                                });
                                break
                            }
                        }
                    }
                }
                load(e) {
                    return !e.decryptdata && e.encrypted && this.emeController ? this.emeController.selectKeySystemFormat(e).then(t => this.loadInternal(e, t)) : this.loadInternal(e)
                }
                loadInternal(e, t) {
                    var r, i, s;
                    t && e.setKeyFormat(t);
                    let a = e.decryptdata;
                    if (!a) {
                        let r = Error(t ? `Expected frag.decryptdata to be defined after setting format ${t}` : "Missing decryption data on fragment in onKeyLoading");
                        return Promise.reject(this.createKeyLoadError(e, v.KEY_LOAD_ERROR, r))
                    }
                    let n = a.uri;
                    if (!n) return Promise.reject(this.createKeyLoadError(e, v.KEY_LOAD_ERROR, Error(`Invalid key URI: "${n}"`)));
                    let l = this.keyUriToKeyInfo[n];
                    if (null != (r = l) && r.decryptdata.key) return a.key = l.decryptdata.key, Promise.resolve({
                        frag: e,
                        keyInfo: l
                    });
                    if (null != (i = l) && i.keyLoadPromise) switch (null == (s = l.mediaKeySessionContext) ? void 0 : s.keyStatus) {
                        case void 0:
                        case "status-pending":
                        case "usable":
                        case "usable-in-future":
                            return l.keyLoadPromise.then(t => (a.key = t.keyInfo.decryptdata.key, {
                                frag: e,
                                keyInfo: l
                            }))
                    }
                    switch (l = this.keyUriToKeyInfo[n] = {
                        decryptdata: a,
                        keyLoadPromise: null,
                        loader: null,
                        mediaKeySessionContext: null
                    }, a.method) {
                        case "ISO-23001-7":
                        case "SAMPLE-AES":
                        case "SAMPLE-AES-CENC":
                        case "SAMPLE-AES-CTR":
                            if ("identity" === a.keyFormat) return this.loadKeyHTTP(l, e);
                            return this.loadKeyEME(l, e);
                        case "AES-128":
                            return this.loadKeyHTTP(l, e);
                        default:
                            return Promise.reject(this.createKeyLoadError(e, v.KEY_LOAD_ERROR, Error(`Key supplied with unsupported METHOD: "${a.method}"`)))
                    }
                }
                loadKeyEME(e, t) {
                    let r = {
                        frag: t,
                        keyInfo: e
                    };
                    if (this.emeController && this.config.emeEnabled) {
                        let t = this.emeController.loadKey(r);
                        if (t) return (e.keyLoadPromise = t.then(t => (e.mediaKeySessionContext = t, r))).catch(t => {
                            throw e.keyLoadPromise = null, t
                        })
                    }
                    return Promise.resolve(r)
                }
                loadKeyHTTP(e, t) {
                    let r = this.config,
                        i = r.loader,
                        s = new i(r);
                    return t.keyLoader = e.loader = s, e.keyLoadPromise = new Promise((i, a) => {
                        let n = {
                                keyInfo: e,
                                frag: t,
                                responseType: "arraybuffer",
                                url: e.decryptdata.uri
                            },
                            l = r.keyLoadPolicy.default,
                            o = {
                                loadPolicy: l,
                                timeout: l.maxLoadTimeMs,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: 0
                            };
                        s.load(n, o, {
                            onSuccess: (e, t, r, s) => {
                                let {
                                    frag: n,
                                    keyInfo: l,
                                    url: o
                                } = r;
                                if (!n.decryptdata || l !== this.keyUriToKeyInfo[o]) return a(this.createKeyLoadError(n, v.KEY_LOAD_ERROR, Error("after key load, decryptdata unset or changed"), s));
                                l.decryptdata.key = n.decryptdata.key = new Uint8Array(e.data), n.keyLoader = null, l.loader = null, i({
                                    frag: n,
                                    keyInfo: l
                                })
                            },
                            onError: (e, r, i, s) => {
                                this.resetLoader(r), a(this.createKeyLoadError(t, v.KEY_LOAD_ERROR, Error(`HTTP Error ${e.code} loading key ${e.text}`), i, _objectSpread2({
                                    url: n.url,
                                    data: void 0
                                }, e)))
                            },
                            onTimeout: (e, r, i) => {
                                this.resetLoader(r), a(this.createKeyLoadError(t, v.KEY_LOAD_TIMEOUT, Error("key loading timed out"), i))
                            },
                            onAbort: (e, r, i) => {
                                this.resetLoader(r), a(this.createKeyLoadError(t, v.INTERNAL_ABORTED, Error("key loading aborted"), i))
                            }
                        })
                    })
                }
                resetLoader(e) {
                    let {
                        frag: t,
                        keyInfo: r,
                        url: i
                    } = e, s = r.loader;
                    t.keyLoader === s && (t.keyLoader = null, r.loader = null), delete this.keyUriToKeyInfo[i], s && s.destroy()
                }
            };
            let TaskLoop = class TaskLoop {
                constructor() {
                    this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this)
                }
                destroy() {
                    this.onHandlerDestroying(), this.onHandlerDestroyed()
                }
                onHandlerDestroying() {
                    this.clearNextTick(), this.clearInterval()
                }
                onHandlerDestroyed() {}
                hasInterval() {
                    return !!this._tickInterval
                }
                hasNextTick() {
                    return !!this._tickTimer
                }
                setInterval(e) {
                    return !this._tickInterval && (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, e), !0)
                }
                clearInterval() {
                    return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0)
                }
                clearNextTick() {
                    return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0)
                }
                tick() {
                    this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0)
                }
                tickImmediate() {
                    this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)
                }
                doTick() {}
            };
            let Z = {
                length: 0,
                start: () => 0,
                end: () => 0
            };
            let BufferHelper = class BufferHelper {
                static isBuffered(e, t) {
                    try {
                        if (e) {
                            let r = BufferHelper.getBuffered(e);
                            for (let e = 0; e < r.length; e++)
                                if (t >= r.start(e) && t <= r.end(e)) return !0
                        }
                    } catch (e) {}
                    return !1
                }
                static bufferInfo(e, t, r) {
                    try {
                        if (e) {
                            let i;
                            let s = BufferHelper.getBuffered(e),
                                a = [];
                            for (i = 0; i < s.length; i++) a.push({
                                start: s.start(i),
                                end: s.end(i)
                            });
                            return this.bufferedInfo(a, t, r)
                        }
                    } catch (e) {}
                    return {
                        len: 0,
                        start: t,
                        end: t,
                        nextStart: void 0
                    }
                }
                static bufferedInfo(e, t, r) {
                    let i;
                    t = Math.max(0, t), e.sort(function(e, t) {
                        let r = e.start - t.start;
                        return r || t.end - e.end
                    });
                    let s = [];
                    if (r)
                        for (let t = 0; t < e.length; t++) {
                            let i = s.length;
                            if (i) {
                                let a = s[i - 1].end;
                                e[t].start - a < r ? e[t].end > a && (s[i - 1].end = e[t].end) : s.push(e[t])
                            } else s.push(e[t])
                        } else s = e;
                    let a = 0,
                        n = t,
                        l = t;
                    for (let e = 0; e < s.length; e++) {
                        let o = s[e].start,
                            h = s[e].end;
                        if (t + r >= o && t < h) n = o, a = (l = h) - t;
                        else if (t + r < o) {
                            i = o;
                            break
                        }
                    }
                    return {
                        len: a,
                        start: n || 0,
                        end: l || 0,
                        nextStart: i
                    }
                }
                static getBuffered(e) {
                    try {
                        return e.buffered
                    } catch (e) {
                        return L.log("failed to get media.buffered", e), Z
                    }
                }
            };
            let ChunkMetadata = class ChunkMetadata {
                constructor(e, t, r, i = 0, s = -1, a = !1) {
                    this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = getNewPerformanceTiming(), this.buffering = {
                        audio: getNewPerformanceTiming(),
                        video: getNewPerformanceTiming(),
                        audiovideo: getNewPerformanceTiming()
                    }, this.level = e, this.sn = t, this.id = r, this.size = i, this.part = s, this.partial = a
                }
            };

            function getNewPerformanceTiming() {
                return {
                    start: 0,
                    executeStart: 0,
                    executeEnd: 0,
                    end: 0
                }
            }

            function findFirstFragWithCC(e, t) {
                let r = null;
                for (let i = 0, s = e.length; i < s; i++) {
                    let s = e[i];
                    if (s && s.cc === t) {
                        r = s;
                        break
                    }
                }
                return r
            }

            function adjustFragmentStart(e, t) {
                if (e) {
                    let r = e.start + t;
                    e.start = e.startPTS = r, e.endPTS = r + e.duration
                }
            }

            function adjustSlidingStart(e, t) {
                let r = t.fragments;
                for (let t = 0, i = r.length; t < i; t++) adjustFragmentStart(r[t], e);
                t.fragmentHint && adjustFragmentStart(t.fragmentHint, e), t.alignedSliding = !0
            }

            function alignMediaPlaylistByPDT(e, t) {
                if (!e.hasProgramDateTime || !t.hasProgramDateTime) return;
                let r = e.fragments,
                    i = t.fragments;
                if (!r.length || !i.length) return;
                let s = Math.round(i.length / 2) - 1,
                    a = i[s],
                    n = findFirstFragWithCC(r, a.cc) || r[Math.round(r.length / 2) - 1],
                    l = a.programDateTime,
                    o = n.programDateTime;
                if (null === l || null === o) return;
                let h = (o - l) / 1e3 - (n.start - a.start);
                adjustSlidingStart(h, e)
            }
            let AESCrypto = class AESCrypto {
                constructor(e, t) {
                    this.subtle = void 0, this.aesIV = void 0, this.subtle = e, this.aesIV = t
                }
                decrypt(e, t) {
                    return this.subtle.decrypt({
                        name: "AES-CBC",
                        iv: this.aesIV
                    }, t, e)
                }
            };
            let FastAESKey = class FastAESKey {
                constructor(e, t) {
                    this.subtle = void 0, this.key = void 0, this.subtle = e, this.key = t
                }
                expandKey() {
                    return this.subtle.importKey("raw", this.key, {
                        name: "AES-CBC"
                    }, !1, ["encrypt", "decrypt"])
                }
            };
            let AESDecryptor = class AESDecryptor {
                constructor() {
                    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable()
                }
                uint8ArrayToUint32Array_(e) {
                    let t = new DataView(e),
                        r = new Uint32Array(4);
                    for (let e = 0; e < 4; e++) r[e] = t.getUint32(4 * e);
                    return r
                }
                initTable() {
                    let e = this.sBox,
                        t = this.invSBox,
                        r = this.subMix,
                        i = r[0],
                        s = r[1],
                        a = r[2],
                        n = r[3],
                        l = this.invSubMix,
                        o = l[0],
                        h = l[1],
                        d = l[2],
                        u = l[3],
                        c = new Uint32Array(256),
                        f = 0,
                        g = 0,
                        m = 0;
                    for (m = 0; m < 256; m++) m < 128 ? c[m] = m << 1 : c[m] = m << 1 ^ 283;
                    for (m = 0; m < 256; m++) {
                        let r = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                        r = r >>> 8 ^ 255 & r ^ 99, e[f] = r, t[r] = f;
                        let l = c[f],
                            m = c[l],
                            p = c[m],
                            T = 257 * c[r] ^ 16843008 * r;
                        i[f] = T << 24 | T >>> 8, s[f] = T << 16 | T >>> 16, a[f] = T << 8 | T >>> 24, n[f] = T, T = 16843009 * p ^ 65537 * m ^ 257 * l ^ 16843008 * f, o[r] = T << 24 | T >>> 8, h[r] = T << 16 | T >>> 16, d[r] = T << 8 | T >>> 24, u[r] = T, f ? (f = l ^ c[c[c[p ^ l]]], g ^= c[c[g]]) : f = g = 1
                    }
                }
                expandKey(e) {
                    let t, r, i, s;
                    let a = this.uint8ArrayToUint32Array_(e),
                        n = !0,
                        l = 0;
                    for (; l < a.length && n;) n = a[l] === this.key[l], l++;
                    if (n) return;
                    this.key = a;
                    let o = this.keySize = a.length;
                    if (4 !== o && 6 !== o && 8 !== o) throw Error("Invalid aes key size=" + o);
                    let h = this.ksRows = (o + 6 + 1) * 4,
                        d = this.keySchedule = new Uint32Array(h),
                        u = this.invKeySchedule = new Uint32Array(h),
                        c = this.sBox,
                        f = this.rcon,
                        g = this.invSubMix,
                        m = g[0],
                        p = g[1],
                        T = g[2],
                        E = g[3];
                    for (t = 0; t < h; t++) {
                        if (t < o) {
                            i = d[t] = a[t];
                            continue
                        }
                        s = i, t % o == 0 ? s = (c[(s = s << 8 | s >>> 24) >>> 24] << 24 | c[s >>> 16 & 255] << 16 | c[s >>> 8 & 255] << 8 | c[255 & s]) ^ f[t / o | 0] << 24 : o > 6 && t % o == 4 && (s = c[s >>> 24] << 24 | c[s >>> 16 & 255] << 16 | c[s >>> 8 & 255] << 8 | c[255 & s]), d[t] = i = (d[t - o] ^ s) >>> 0
                    }
                    for (r = 0; r < h; r++) t = h - r, s = 3 & r ? d[t] : d[t - 4], r < 4 || t <= 4 ? u[r] = s : u[r] = m[c[s >>> 24]] ^ p[c[s >>> 16 & 255]] ^ T[c[s >>> 8 & 255]] ^ E[c[255 & s]], u[r] = u[r] >>> 0
                }
                networkToHostOrderSwap(e) {
                    return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
                }
                decrypt(e, t, r) {
                    let i, s, a, n, l, o, h, d, u, c, f, g, m, p;
                    let T = this.keySize + 6,
                        E = this.invKeySchedule,
                        y = this.invSBox,
                        v = this.invSubMix,
                        S = v[0],
                        A = v[1],
                        L = v[2],
                        R = v[3],
                        I = this.uint8ArrayToUint32Array_(r),
                        D = I[0],
                        b = I[1],
                        C = I[2],
                        k = I[3],
                        P = new Int32Array(e),
                        _ = new Int32Array(P.length),
                        M = this.networkToHostOrderSwap;
                    for (; t < P.length;) {
                        for (p = 1, u = M(P[t]), c = M(P[t + 1]), f = M(P[t + 2]), g = M(P[t + 3]), l = u ^ E[0], o = g ^ E[1], h = f ^ E[2], d = c ^ E[3], m = 4; p < T; p++) i = S[l >>> 24] ^ A[o >> 16 & 255] ^ L[h >> 8 & 255] ^ R[255 & d] ^ E[m], s = S[o >>> 24] ^ A[h >> 16 & 255] ^ L[d >> 8 & 255] ^ R[255 & l] ^ E[m + 1], a = S[h >>> 24] ^ A[d >> 16 & 255] ^ L[l >> 8 & 255] ^ R[255 & o] ^ E[m + 2], n = S[d >>> 24] ^ A[l >> 16 & 255] ^ L[o >> 8 & 255] ^ R[255 & h] ^ E[m + 3], l = i, o = s, h = a, d = n, m += 4;
                        i = y[l >>> 24] << 24 ^ y[o >> 16 & 255] << 16 ^ y[h >> 8 & 255] << 8 ^ y[255 & d] ^ E[m], s = y[o >>> 24] << 24 ^ y[h >> 16 & 255] << 16 ^ y[d >> 8 & 255] << 8 ^ y[255 & l] ^ E[m + 1], a = y[h >>> 24] << 24 ^ y[d >> 16 & 255] << 16 ^ y[l >> 8 & 255] << 8 ^ y[255 & o] ^ E[m + 2], n = y[d >>> 24] << 24 ^ y[l >> 16 & 255] << 16 ^ y[o >> 8 & 255] << 8 ^ y[255 & h] ^ E[m + 3], _[t] = M(i ^ D), _[t + 1] = M(n ^ b), _[t + 2] = M(a ^ C), _[t + 3] = M(s ^ k), D = u, b = c, C = f, k = g, t += 4
                    }
                    return _.buffer
                }
            };
            let Decrypter = class Decrypter {
                constructor(e, {
                    removePKCS7Padding: t = !0
                } = {}) {
                    if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.useSoftware = e.enableSoftwareAES, this.removePKCS7Padding = t, t) try {
                        let e = self.crypto;
                        e && (this.subtle = e.subtle || e.webkitSubtle)
                    } catch (e) {}
                    null === this.subtle && (this.useSoftware = !0)
                }
                destroy() {
                    this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null
                }
                isSync() {
                    return this.useSoftware
                }
                flush() {
                    let {
                        currentResult: e,
                        remainderData: t
                    } = this;
                    if (!e || t) return this.reset(), null;
                    let r = new Uint8Array(e);
                    return (this.reset(), this.removePKCS7Padding) ? function(e) {
                        let t = e.byteLength,
                            r = t && new DataView(e.buffer).getUint8(t - 1);
                        return r ? sliceUint8(e, 0, t - r) : e
                    }(r) : r
                }
                reset() {
                    this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null)
                }
                decrypt(e, t, r) {
                    return this.useSoftware ? new Promise((i, s) => {
                        this.softwareDecrypt(new Uint8Array(e), t, r);
                        let a = this.flush();
                        a ? i(a.buffer) : s(Error("[softwareDecrypt] Failed to decrypt data"))
                    }) : this.webCryptoDecrypt(new Uint8Array(e), t, r)
                }
                softwareDecrypt(e, t, r) {
                    let {
                        currentIV: i,
                        currentResult: s,
                        remainderData: a
                    } = this;
                    this.logOnce("JS AES decrypt"), a && (e = appendUint8Array(a, e), this.remainderData = null);
                    let n = this.getValidChunk(e);
                    if (!n.length) return null;
                    i && (r = i);
                    let l = this.softwareDecrypter;
                    return (l || (l = this.softwareDecrypter = new AESDecryptor), l.expandKey(t), this.currentResult = l.decrypt(n.buffer, 0, r), this.currentIV = sliceUint8(n, -16).buffer, s) ? s : null
                }
                webCryptoDecrypt(e, t, r) {
                    let i = this.subtle;
                    return this.key === t && this.fastAesKey || (this.key = t, this.fastAesKey = new FastAESKey(i, t)), this.fastAesKey.expandKey().then(t => {
                        if (!i) return Promise.reject(Error("web crypto not initialized"));
                        this.logOnce("WebCrypto AES decrypt");
                        let s = new AESCrypto(i, new Uint8Array(r));
                        return s.decrypt(e.buffer, t)
                    }).catch(i => (L.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${i.name}: ${i.message}`), this.onWebCryptoError(e, t, r)))
                }
                onWebCryptoError(e, t, r) {
                    this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(e, t, r);
                    let i = this.flush();
                    if (i) return i.buffer;
                    throw Error("WebCrypto and softwareDecrypt: failed to decrypt data")
                }
                getValidChunk(e) {
                    let t = e,
                        r = e.length - e.length % 16;
                    return r !== e.length && (t = sliceUint8(e, 0, r), this.remainderData = sliceUint8(e, r)), t
                }
                logOnce(e) {
                    this.logEnabled && (L.log(`[decrypter]: ${e}`), this.logEnabled = !1)
                }
            };
            let ee = {
                    toString: function(e) {
                        let t = "",
                            r = e.length;
                        for (let i = 0; i < r; i++) t += `[${e.start(i).toFixed(3)}-${e.end(i).toFixed(3)}]`;
                        return t
                    }
                },
                et = {
                    STOPPED: "STOPPED",
                    IDLE: "IDLE",
                    KEY_LOADING: "KEY_LOADING",
                    FRAG_LOADING: "FRAG_LOADING",
                    FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                    WAITING_TRACK: "WAITING_TRACK",
                    PARSING: "PARSING",
                    PARSED: "PARSED",
                    ENDED: "ENDED",
                    ERROR: "ERROR",
                    WAITING_INIT_PTS: "WAITING_INIT_PTS",
                    WAITING_LEVEL: "WAITING_LEVEL"
                };
            let BaseStreamController = class BaseStreamController extends TaskLoop {
                constructor(e, t, r, i, s) {
                    super(), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = et.STOPPED, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = !1, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.loadedmetadata = !1, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = !1, this.decrypter = void 0, this.initPTS = [], this.onvseeking = null, this.onvended = null, this.logPrefix = "", this.log = void 0, this.warn = void 0, this.playlistType = s, this.logPrefix = i, this.log = L.log.bind(L, `${i}:`), this.warn = L.warn.bind(L, `${i}:`), this.hls = e, this.fragmentLoader = new FragmentLoader(e.config), this.keyLoader = r, this.fragmentTracker = t, this.config = e.config, this.decrypter = new Decrypter(e.config), e.on(E.MANIFEST_LOADED, this.onManifestLoaded, this)
                }
                doTick() {
                    this.onTickEnd()
                }
                onTickEnd() {}
                startLoad(e) {}
                stopLoad() {
                    this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
                    let e = this.fragCurrent;
                    null != e && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = et.STOPPED
                }
                _streamEnded(e, t) {
                    if (t.live || e.nextStart || !e.end || !this.media) return !1;
                    let r = t.partList;
                    if (null != r && r.length) {
                        let e = r[r.length - 1],
                            t = BufferHelper.isBuffered(this.media, e.start + e.duration / 2);
                        return t
                    }
                    let i = t.fragments[t.fragments.length - 1].type;
                    return this.fragmentTracker.isEndListAppended(i)
                }
                getLevelDetails() {
                    if (this.levels && null !== this.levelLastLoaded) {
                        var e;
                        return null == (e = this.levels[this.levelLastLoaded]) ? void 0 : e.details
                    }
                }
                onMediaAttached(e, t) {
                    let r = this.media = this.mediaBuffer = t.media;
                    this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), r.addEventListener("seeking", this.onvseeking), r.addEventListener("ended", this.onvended);
                    let i = this.config;
                    this.levels && i.autoStartLoad && this.state === et.STOPPED && this.startLoad(i.startPosition)
                }
                onMediaDetaching() {
                    let e = this.media;
                    null != e && e.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && this.onvseeking && this.onvended && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
                }
                onMediaSeeking() {
                    let {
                        config: e,
                        fragCurrent: t,
                        media: r,
                        mediaBuffer: i,
                        state: s
                    } = this, a = r ? r.currentTime : 0, n = BufferHelper.bufferInfo(i || r, a, e.maxBufferHole);
                    if (this.log(`media seeking to ${T(a)?a.toFixed(3):a}, state: ${s}`), this.state === et.ENDED) this.resetLoadingState();
                    else if (t) {
                        let r = e.maxFragLookUpTolerance,
                            i = t.start - r,
                            s = t.start + t.duration + r;
                        if (!n.len || s < n.start || i > n.end) {
                            let e = a > s;
                            (a < i || e) && (e && t.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), t.abortRequests(), this.resetLoadingState()), this.fragPrevious = null)
                        }
                    }
                    r && (this.fragmentTracker.removeFragmentsInRange(a, 1 / 0, this.playlistType, !0), this.lastCurrentTime = a), this.loadedmetadata || n.len || (this.nextLoadPosition = this.startPosition = a), this.tickImmediate()
                }
                onMediaEnded() {
                    this.startPosition = this.lastCurrentTime = 0
                }
                onManifestLoaded(e, t) {
                    this.startTimeOffset = t.startTimeOffset, this.initPTS = []
                }
                onHandlerDestroying() {
                    this.stopLoad(), super.onHandlerDestroying()
                }
                onHandlerDestroyed() {
                    this.state = et.STOPPED, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed()
                }
                loadFragment(e, t, r) {
                    this._loadFragForPlayback(e, t, r)
                }
                _loadFragForPlayback(e, t, r) {
                    this._doFragLoad(e, t, r, t => {
                        if (this.fragContextChanged(e)) {
                            this.warn(`Fragment ${e.sn}${t.part?" p: "+t.part.index:""} of level ${e.level} was dropped during download.`), this.fragmentTracker.removeFragment(e);
                            return
                        }
                        e.stats.chunkCount++, this._handleFragmentLoadProgress(t)
                    }).then(t => {
                        if (!t) return;
                        let r = this.state;
                        if (this.fragContextChanged(e)) {
                            r !== et.FRAG_LOADING && (this.fragCurrent || r !== et.PARSING) || (this.fragmentTracker.removeFragment(e), this.state = et.IDLE);
                            return
                        }
                        "payload" in t && (this.log(`Loaded fragment ${e.sn} of level ${e.level}`), this.hls.trigger(E.FRAG_LOADED, t)), this._handleFragmentLoadComplete(t)
                    }).catch(t => {
                        this.state !== et.STOPPED && this.state !== et.ERROR && (this.warn(t), this.resetFragmentLoading(e))
                    })
                }
                clearTrackerIfNeeded(e) {
                    var t;
                    let {
                        fragmentTracker: r
                    } = this, i = r.getState(e);
                    if (i === J.APPENDING) {
                        let t = e.type,
                            i = this.getFwdBufferInfo(this.mediaBuffer, t),
                            s = Math.max(e.duration, i ? i.len : this.config.maxBufferLength);
                        this.reduceMaxBufferLength(s) && r.removeFragment(e)
                    } else(null == (t = this.mediaBuffer) ? void 0 : t.buffered.length) === 0 ? r.removeAllFragments() : r.hasParts(e.type) && (r.detectPartialFragments({
                        frag: e,
                        part: null,
                        stats: e.stats,
                        id: e.type
                    }), r.getState(e) === J.PARTIAL && r.removeFragment(e))
                }
                checkLiveUpdate(e) {
                    if (e.updated && !e.live) {
                        let t = e.fragments[e.fragments.length - 1];
                        this.fragmentTracker.detectPartialFragments({
                            frag: t,
                            part: null,
                            stats: t.stats,
                            id: t.type
                        })
                    }
                    e.fragments[0] || (e.deltaUpdateFailed = !0)
                }
                flushMainBuffer(e, t, r = null) {
                    e - t && this.hls.trigger(E.BUFFER_FLUSHING, {
                        startOffset: e,
                        endOffset: t,
                        type: r
                    })
                }
                _loadInitSegment(e, t) {
                    this._doFragLoad(e, t).then(t => {
                        if (!t || this.fragContextChanged(e) || !this.levels) throw Error("init load aborted");
                        return t
                    }).then(t => {
                        let {
                            hls: r
                        } = this, {
                            payload: i
                        } = t, s = e.decryptdata;
                        if (i && i.byteLength > 0 && s && s.key && s.iv && "AES-128" === s.method) {
                            let a = self.performance.now();
                            return this.decrypter.decrypt(new Uint8Array(i), s.key.buffer, s.iv.buffer).catch(t => {
                                throw r.trigger(E.ERROR, {
                                    type: y.MEDIA_ERROR,
                                    details: v.FRAG_DECRYPT_ERROR,
                                    fatal: !1,
                                    error: t,
                                    reason: t.message,
                                    frag: e
                                }), t
                            }).then(i => {
                                let s = self.performance.now();
                                return r.trigger(E.FRAG_DECRYPTED, {
                                    frag: e,
                                    payload: i,
                                    stats: {
                                        tstart: a,
                                        tdecrypt: s
                                    }
                                }), t.payload = i, t
                            })
                        }
                        return t
                    }).then(r => {
                        let {
                            fragCurrent: i,
                            hls: s,
                            levels: a
                        } = this;
                        if (!a) throw Error("init load aborted, missing levels");
                        let n = e.stats;
                        this.state = et.IDLE, t.fragmentError = 0, e.data = new Uint8Array(r.payload), n.parsing.start = n.buffering.start = self.performance.now(), n.parsing.end = n.buffering.end = self.performance.now(), r.frag === i && s.trigger(E.FRAG_BUFFERED, {
                            stats: n,
                            frag: i,
                            part: null,
                            id: e.type
                        }), this.tick()
                    }).catch(t => {
                        this.state !== et.STOPPED && this.state !== et.ERROR && (this.warn(t), this.resetFragmentLoading(e))
                    })
                }
                fragContextChanged(e) {
                    let {
                        fragCurrent: t
                    } = this;
                    return !e || !t || e.level !== t.level || e.sn !== t.sn || e.urlId !== t.urlId
                }
                fragBufferedComplete(e, t) {
                    var r, i, s, a;
                    let n = this.mediaBuffer ? this.mediaBuffer : this.media;
                    this.log(`Buffered ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.playlistType===V.MAIN?"level":"track"} ${e.level} (frag:[${(null!=(r=e.startPTS)?r:NaN).toFixed(3)}-${(null!=(i=e.endPTS)?i:NaN).toFixed(3)}] > buffer:${n?ee.toString(BufferHelper.getBuffered(n)):"(detached)"})`), this.state = et.IDLE, n && (!this.loadedmetadata && e.type == V.MAIN && n.buffered.length && (null == (s = this.fragCurrent) ? void 0 : s.sn) === (null == (a = this.fragPrevious) ? void 0 : a.sn) && (this.loadedmetadata = !0, this.seekToStartPos()), this.tick())
                }
                seekToStartPos() {}
                _handleFragmentLoadComplete(e) {
                    let {
                        transmuxer: t
                    } = this;
                    if (!t) return;
                    let {
                        frag: r,
                        part: i,
                        partsLoaded: s
                    } = e, a = !s || 0 === s.length || s.some(e => !e), n = new ChunkMetadata(r.level, r.sn, r.stats.chunkCount + 1, 0, i ? i.index : -1, !a);
                    t.flush(n)
                }
                _handleFragmentLoadProgress(e) {}
                _doFragLoad(e, t, r = null, i) {
                    var s;
                    let a;
                    let n = null == t ? void 0 : t.details;
                    if (!this.levels || !n) throw Error(`frag load aborted, missing level${n?"":" detail"}s`);
                    let l = null;
                    if (e.encrypted && !(null != (s = e.decryptdata) && s.key) ? (this.log(`Loading key for ${e.sn} of [${n.startSN}-${n.endSN}], ${"[stream-controller]"===this.logPrefix?"level":"track"} ${e.level}`), this.state = et.KEY_LOADING, this.fragCurrent = e, l = this.keyLoader.load(e).then(e => {
                            if (!this.fragContextChanged(e.frag)) return this.hls.trigger(E.KEY_LOADED, e), this.state === et.KEY_LOADING && (this.state = et.IDLE), e
                        }), this.hls.trigger(E.KEY_LOADING, {
                            frag: e
                        }), null === this.fragCurrent && (l = Promise.reject(Error("frag load aborted, context changed in KEY_LOADING")))) : !e.encrypted && n.encryptedFragments.length && this.keyLoader.loadClear(e, n.encryptedFragments), r = Math.max(e.start, r || 0), this.config.lowLatencyMode && "initSegment" !== e.sn) {
                        let s = n.partList;
                        if (s && i) {
                            r > e.end && n.fragmentHint && (e = n.fragmentHint);
                            let a = this.getNextPart(s, e, r);
                            if (a > -1) {
                                let o;
                                let h = s[a];
                                return (this.log(`Loading part sn: ${e.sn} p: ${h.index} cc: ${e.cc} of playlist [${n.startSN}-${n.endSN}] parts [0-${a}-${s.length-1}] ${"[stream-controller]"===this.logPrefix?"level":"track"}: ${e.level}, target: ${parseFloat(r.toFixed(3))}`), this.nextLoadPosition = h.start + h.duration, this.state = et.FRAG_LOADING, o = l ? l.then(r => !r || this.fragContextChanged(r.frag) ? null : this.doFragPartsLoad(e, h, t, i)).catch(e => this.handleFragLoadError(e)) : this.doFragPartsLoad(e, h, t, i).catch(e => this.handleFragLoadError(e)), this.hls.trigger(E.FRAG_LOADING, {
                                    frag: e,
                                    part: h,
                                    targetBufferTime: r
                                }), null === this.fragCurrent) ? Promise.reject(Error("frag load aborted, context changed in FRAG_LOADING parts")) : o
                            }
                            if (!e.url || this.loadedEndOfParts(s, r)) return Promise.resolve(null)
                        }
                    }
                    this.log(`Loading fragment ${e.sn} cc: ${e.cc} ${n?"of ["+n.startSN+"-"+n.endSN+"] ":""}${"[stream-controller]"===this.logPrefix?"level":"track"}: ${e.level}, target: ${parseFloat(r.toFixed(3))}`), T(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), this.state = et.FRAG_LOADING;
                    let o = this.config.progressive;
                    return (a = o && l ? l.then(t => !t || this.fragContextChanged(null == t ? void 0 : t.frag) ? null : this.fragmentLoader.load(e, i)).catch(e => this.handleFragLoadError(e)) : Promise.all([this.fragmentLoader.load(e, o ? i : void 0), l]).then(([e]) => (!o && e && i && i(e), e)).catch(e => this.handleFragLoadError(e)), this.hls.trigger(E.FRAG_LOADING, {
                        frag: e,
                        targetBufferTime: r
                    }), null === this.fragCurrent) ? Promise.reject(Error("frag load aborted, context changed in FRAG_LOADING")) : a
                }
                doFragPartsLoad(e, t, r, i) {
                    return new Promise((s, a) => {
                        var n;
                        let l = [],
                            o = null == (n = r.details) ? void 0 : n.partList,
                            loadPart = t => {
                                this.fragmentLoader.loadPart(e, t, i).then(i => {
                                    l[t.index] = i;
                                    let a = i.part;
                                    this.hls.trigger(E.FRAG_LOADED, i);
                                    let n = getPartWith(r, e.sn, t.index + 1) || findPart(o, e.sn, t.index + 1);
                                    if (!n) return s({
                                        frag: e,
                                        part: a,
                                        partsLoaded: l
                                    });
                                    loadPart(n)
                                }).catch(a)
                            };
                        loadPart(t)
                    })
                }
                handleFragLoadError(e) {
                    if ("data" in e) {
                        let t = e.data;
                        e.data && t.details === v.INTERNAL_ABORTED ? this.handleFragLoadAborted(t.frag, t.part) : this.hls.trigger(E.ERROR, t)
                    } else this.hls.trigger(E.ERROR, {
                        type: y.OTHER_ERROR,
                        details: v.INTERNAL_EXCEPTION,
                        err: e,
                        error: e,
                        fatal: !0
                    });
                    return null
                }
                _handleTransmuxerFlush(e) {
                    let t = this.getCurrentContext(e);
                    if (!t || this.state !== et.PARSING) {
                        this.fragCurrent || this.state === et.STOPPED || this.state === et.ERROR || (this.state = et.IDLE);
                        return
                    }
                    let {
                        frag: r,
                        part: i,
                        level: s
                    } = t, a = self.performance.now();
                    r.stats.parsing.end = a, i && (i.stats.parsing.end = a), this.updateLevelTiming(r, i, s, e.partial)
                }
                getCurrentContext(e) {
                    let {
                        levels: t,
                        fragCurrent: r
                    } = this, {
                        level: i,
                        sn: s,
                        part: a
                    } = e;
                    if (!(null != t && t[i])) return this.warn(`Levels object was unset while buffering fragment ${s} of level ${i}. The current chunk will not be buffered.`), null;
                    let n = t[i],
                        l = a > -1 ? getPartWith(n, s, a) : null,
                        o = l ? l.fragment : function(e, t, r) {
                            if (!(null != e && e.details)) return null;
                            let i = e.details,
                                s = i.fragments[t - i.startSN];
                            return s || (s = i.fragmentHint) && s.sn === t ? s : t < i.startSN && r && r.sn === t ? r : null
                        }(n, s, r);
                    return o ? (r && r !== o && (o.stats = r.stats), {
                        frag: o,
                        part: l,
                        level: n
                    }) : null
                }
                bufferFragmentData(e, t, r, i, s) {
                    var a;
                    if (!e || this.state !== et.PARSING) return;
                    let {
                        data1: n,
                        data2: l
                    } = e, o = n;
                    if (n && l && (o = appendUint8Array(n, l)), !(null != (a = o) && a.length)) return;
                    let h = {
                        type: e.type,
                        frag: t,
                        part: r,
                        chunkMeta: i,
                        parent: t.type,
                        data: o
                    };
                    if (this.hls.trigger(E.BUFFER_APPENDING, h), e.dropped && e.independent && !r) {
                        if (s) return;
                        this.flushBufferGap(t)
                    }
                }
                flushBufferGap(e) {
                    let t = this.media;
                    if (!t) return;
                    if (!BufferHelper.isBuffered(t, t.currentTime)) {
                        this.flushMainBuffer(0, e.start);
                        return
                    }
                    let r = t.currentTime,
                        i = BufferHelper.bufferInfo(t, r, 0),
                        s = e.duration,
                        a = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * s),
                        n = Math.max(Math.min(e.start - a, i.end - a), r + a);
                    e.start - n > a && this.flushMainBuffer(n, e.start)
                }
                getFwdBufferInfo(e, t) {
                    let r = this.getLoadPosition();
                    return T(r) ? this.getFwdBufferInfoAtPos(e, r, t) : null
                }
                getFwdBufferInfoAtPos(e, t, r) {
                    let {
                        config: {
                            maxBufferHole: i
                        }
                    } = this, s = BufferHelper.bufferInfo(e, t, i);
                    if (0 === s.len && void 0 !== s.nextStart) {
                        let a = this.fragmentTracker.getBufferedFrag(t, r);
                        if (a && s.nextStart < a.end) return BufferHelper.bufferInfo(e, t, Math.max(s.nextStart, i))
                    }
                    return s
                }
                getMaxBufferLength(e) {
                    let {
                        config: t
                    } = this;
                    return Math.min(e ? Math.max(8 * t.maxBufferSize / e, t.maxBufferLength) : t.maxBufferLength, t.maxMaxBufferLength)
                }
                reduceMaxBufferLength(e) {
                    let t = this.config,
                        r = e || t.maxBufferLength;
                    return t.maxMaxBufferLength >= r && (t.maxMaxBufferLength /= 2, this.warn(`Reduce max buffer length to ${t.maxMaxBufferLength}s`), !0)
                }
                getAppendedFrag(e, t = V.MAIN) {
                    let r = this.fragmentTracker.getAppendedFrag(e, V.MAIN);
                    return r && "fragment" in r ? r.fragment : r
                }
                getNextFragment(e, t) {
                    let r;
                    let i = t.fragments,
                        s = i.length;
                    if (!s) return null;
                    let {
                        config: a
                    } = this, n = i[0].start;
                    if (t.live) {
                        let n = a.initialLiveManifestSize;
                        if (s < n) return this.warn(`Not enough fragments to start playback (have: ${s}, need: ${n})`), null;
                        t.PTSKnown || this.startFragRequested || -1 !== this.startPosition || (r = this.getInitialLiveFragment(t, i), this.startPosition = r ? this.hls.liveSyncPosition || r.start : e)
                    } else e <= n && (r = i[0]);
                    if (!r) {
                        let i = a.lowLatencyMode ? t.partEnd : t.fragmentEnd;
                        r = this.getFragmentAtPosition(e, i, t)
                    }
                    return this.mapToInitFragWhenRequired(r)
                }
                isLoopLoading(e, t) {
                    let r = this.fragmentTracker.getState(e);
                    return (r === J.OK || r === J.PARTIAL && !!e.gap) && this.nextLoadPosition > t
                }
                getNextFragmentLoopLoading(e, t, r, i, s) {
                    let a = e.gap,
                        n = this.getNextFragment(this.nextLoadPosition, t);
                    if (null === n) return n;
                    if (e = n, a && e && !e.gap && r.nextStart) {
                        let t = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, r.nextStart, i);
                        if (null !== t && r.len + t.len >= s) return this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${e.sn}`), null
                    }
                    return e
                }
                mapToInitFragWhenRequired(e) {
                    return null == e || !e.initSegment || null != e && e.initSegment.data || this.bitrateTest ? e : e.initSegment
                }
                getNextPart(e, t, r) {
                    let i = -1,
                        s = !1,
                        a = !0;
                    for (let n = 0, l = e.length; n < l; n++) {
                        let l = e[n];
                        if (a = a && !l.independent, i > -1 && r < l.start) break;
                        let o = l.loaded;
                        o ? i = -1 : (s || l.independent || a) && l.fragment === t && (i = n), s = o
                    }
                    return i
                }
                loadedEndOfParts(e, t) {
                    let r = e[e.length - 1];
                    return r && t > r.start && r.loaded
                }
                getInitialLiveFragment(e, t) {
                    let r = this.fragPrevious,
                        i = null;
                    if (r) {
                        if (e.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${r.programDateTime}`), i = function(e, t, r) {
                                if (null === t || !Array.isArray(e) || !e.length || !T(t)) return null;
                                let i = e[0].programDateTime;
                                if (t < (i || 0)) return null;
                                let s = e[e.length - 1].endProgramDateTime;
                                if (t >= (s || 0)) return null;
                                r = r || 0;
                                for (let i = 0; i < e.length; ++i) {
                                    let s = e[i];
                                    if (function(e, t, r) {
                                            let i = 1e3 * Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0)),
                                                s = r.endProgramDateTime || 0;
                                            return s - i > e
                                        }(t, r, s)) return s
                                }
                                return null
                            }(t, r.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i) {
                            let a = r.sn + 1;
                            if (a >= e.startSN && a <= e.endSN) {
                                let s = t[a - e.startSN];
                                r.cc === s.cc && (i = s, this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`))
                            }
                            if (!i) {
                                var s;
                                s = r.cc, (i = z.search(t, e => e.cc < s ? 1 : e.cc > s ? -1 : 0)) && this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`)
                            }
                        }
                    } else {
                        let t = this.hls.liveSyncPosition;
                        null !== t && (i = this.getFragmentAtPosition(t, this.bitrateTest ? e.fragmentEnd : e.edge, e))
                    }
                    return i
                }
                getFragmentAtPosition(e, t, r) {
                    let i;
                    let {
                        config: s
                    } = this, {
                        fragPrevious: a
                    } = this, {
                        fragments: n,
                        endSN: l
                    } = r, {
                        fragmentHint: o
                    } = r, h = s.maxFragLookUpTolerance, d = r.partList, u = !!(s.lowLatencyMode && null != d && d.length && o);
                    if (u && o && !this.bitrateTest && (n = n.concat(o), l = o.sn), e < t) {
                        let r = e > t - h ? 0 : h;
                        i = findFragmentByPTS(a, n, e, r)
                    } else i = n[n.length - 1];
                    if (i) {
                        let e = i.sn - r.startSN,
                            t = this.fragmentTracker.getState(i);
                        if ((t === J.OK || t === J.PARTIAL && i.gap) && (a = i), a && i.sn === a.sn && (!u || d[0].fragment.sn > i.sn)) {
                            let t = a && i.level === a.level;
                            if (t) {
                                let t = n[e + 1];
                                i = i.sn < l && this.fragmentTracker.getState(t) !== J.OK ? t : null
                            }
                        }
                    }
                    return i
                }
                synchronizeToLiveEdge(e) {
                    let {
                        config: t,
                        media: r
                    } = this;
                    if (!r) return;
                    let i = this.hls.liveSyncPosition,
                        s = r.currentTime,
                        a = e.fragments[0].start,
                        n = e.edge,
                        l = s >= a - t.maxFragLookUpTolerance && s <= n;
                    if (null !== i && r.duration > i && (s < i || !l)) {
                        let a = void 0 !== t.liveMaxLatencyDuration ? t.liveMaxLatencyDuration : t.liveMaxLatencyDurationCount * e.targetduration;
                        (!l && r.readyState < 4 || s < n - a) && (this.loadedmetadata || (this.nextLoadPosition = i), r.readyState && (this.warn(`Playback: ${s.toFixed(3)} is located too far from the end of live sliding playlist: ${n}, reset currentTime to : ${i.toFixed(3)}`), r.currentTime = i))
                    }
                }
                alignPlaylists(e, t) {
                    let {
                        levels: r,
                        levelLastLoaded: i,
                        fragPrevious: s
                    } = this, a = null !== i ? r[i] : null, n = e.fragments.length;
                    if (!n) return this.warn("No fragments in live playlist"), 0;
                    let l = e.fragments[0].start,
                        o = !t,
                        h = e.alignedSliding && T(l);
                    if (o || !h && !l) {
                        a && (function(e, t, r) {
                            if (r.details && (t.endCC > t.startCC || e && e.cc < t.startCC)) {
                                let e = function(e, t, r = 0) {
                                    let i = e.fragments,
                                        s = t.fragments;
                                    if (!s.length || !i.length) {
                                        L.log("No fragments to align");
                                        return
                                    }
                                    let a = findFirstFragWithCC(i, s[0].cc);
                                    if (!a || a && !a.startPTS) {
                                        L.log("No frag in previous level to align on");
                                        return
                                    }
                                    return a
                                }(r.details, t);
                                e && T(e.start) && (L.log(`Adjusting PTS using last level due to CC increase within current level ${t.url}`), adjustSlidingStart(e.start, t))
                            }
                        }(s, e, a), !e.alignedSliding && a.details && function(e, t) {
                            if (!t.fragments.length || !e.hasProgramDateTime || !t.hasProgramDateTime) return;
                            let r = t.fragments[0].programDateTime,
                                i = e.fragments[0].programDateTime,
                                s = (i - r) / 1e3 + t.fragments[0].start;
                            s && T(s) && (L.log(`Adjusting PTS using programDateTime delta ${i-r}ms, sliding:${s.toFixed(3)} ${e.url} `), adjustSlidingStart(s, e))
                        }(e, a.details), e.alignedSliding || !a.details || e.skippedSegments || adjustSliding(a.details, e));
                        let r = e.fragments[0].start;
                        return this.log(`Live playlist sliding: ${r.toFixed(2)} start-sn: ${t?t.startSN:"na"}->${e.startSN} prev-sn: ${s?s.sn:"na"} fragments: ${n}`), r
                    }
                    return l
                }
                waitForCdnTuneIn(e) {
                    return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, 3 * e.partTarget)
                }
                setStartPosition(e, t) {
                    let r = this.startPosition;
                    if (r < t && (r = -1), -1 === r || -1 === this.lastCurrentTime) {
                        let i = null !== this.startTimeOffset,
                            s = i ? this.startTimeOffset : e.startTimeOffset;
                        null !== s && T(s) ? (r = t + s, s < 0 && (r += e.totalduration), r = Math.min(Math.max(t, r), t + e.totalduration), this.log(`Start time offset ${s} found in ${i?"multivariant":"media"} playlist, adjust startPosition to ${r}`), this.startPosition = r) : e.live ? r = this.hls.liveSyncPosition || t : this.startPosition = r = 0, this.lastCurrentTime = r
                    }
                    this.nextLoadPosition = r
                }
                getLoadPosition() {
                    let {
                        media: e
                    } = this, t = 0;
                    return this.loadedmetadata && e ? t = e.currentTime : this.nextLoadPosition && (t = this.nextLoadPosition), t
                }
                handleFragLoadAborted(e, t) {
                    this.transmuxer && "initSegment" !== e.sn && e.stats.aborted && (this.warn(`Fragment ${e.sn}${t?" part "+t.index:""} of level ${e.level} was aborted`), this.resetFragmentLoading(e))
                }
                resetFragmentLoading(e) {
                    this.fragCurrent && (this.fragContextChanged(e) || this.state === et.FRAG_LOADING_WAITING_RETRY) || (this.state = et.IDLE)
                }
                onFragmentOrKeyLoadError(e, t) {
                    var r, i;
                    if (t.chunkMeta && !t.frag) {
                        let e = this.getCurrentContext(t.chunkMeta);
                        e && (t.frag = e.frag)
                    }
                    let s = t.frag;
                    if (!s || s.type !== e || !this.levels) return;
                    if (this.fragContextChanged(s)) {
                        this.warn(`Frag load error must match current frag to retry ${s.url} > ${null==(r=this.fragCurrent)?void 0:r.url}`);
                        return
                    }
                    let a = t.details === v.FRAG_GAP;
                    a && this.fragmentTracker.fragBuffered(s, !0);
                    let n = t.errorAction,
                        {
                            action: l,
                            retryCount: o = 0,
                            retryConfig: h
                        } = n || {};
                    if (n && l === X.RetryRequest && h) {
                        this.resetStartWhenNotLoaded(null != (i = this.levelLastLoaded) ? i : s.level);
                        let r = getRetryDelay(h, o);
                        this.warn(`Fragment ${s.sn} of ${e} ${s.level} errored with ${t.details}, retrying loading ${o+1}/${h.maxNumRetry} in ${r}ms`), n.resolved = !0, this.retryDate = self.performance.now() + r, this.state = et.FRAG_LOADING_WAITING_RETRY
                    } else h && n ? (this.resetFragmentErrors(e), o < h.maxNumRetry ? a || (n.resolved = !0) : L.warn(`${t.details} reached or exceeded max retry (${o})`)) : (null == n ? void 0 : n.action) === X.SendAlternateToPenaltyBox ? this.state = et.WAITING_LEVEL : this.state = et.ERROR;
                    this.tickImmediate()
                }
                reduceLengthAndFlushBuffer(e) {
                    if (this.state === et.PARSING || this.state === et.PARSED) {
                        let t = e.parent,
                            r = this.getFwdBufferInfo(this.mediaBuffer, t),
                            i = r && r.len > .5;
                        i && this.reduceMaxBufferLength(r.len);
                        let s = !i;
                        return s && this.warn(`Buffer full error while media.currentTime is not buffered, flush ${t} buffer`), e.frag && (this.fragmentTracker.removeFragment(e.frag), this.nextLoadPosition = e.frag.start), this.resetLoadingState(), s
                    }
                    return !1
                }
                resetFragmentErrors(e) {
                    e === V.AUDIO && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = !1), this.state !== et.STOPPED && (this.state = et.IDLE)
                }
                afterBufferFlushed(e, t, r) {
                    if (!e) return;
                    let i = BufferHelper.getBuffered(e);
                    this.fragmentTracker.detectEvictedFragments(t, i, r), this.state === et.ENDED && this.resetLoadingState()
                }
                resetLoadingState() {
                    this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state = et.IDLE
                }
                resetStartWhenNotLoaded(e) {
                    if (!this.loadedmetadata) {
                        this.startFragRequested = !1;
                        let t = this.levels ? this.levels[e].details : null;
                        null != t && t.live ? (this.startPosition = -1, this.setStartPosition(t, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition
                    }
                }
                resetWhenMissingContext(e) {
                    var t;
                    this.warn(`The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(null != (t = this.levelLastLoaded) ? t : e.level), this.resetLoadingState()
                }
                removeUnbufferedFrags(e = 0) {
                    this.fragmentTracker.removeFragmentsInRange(e, 1 / 0, this.playlistType, !1, !0)
                }
                updateLevelTiming(e, t, r, i) {
                    var s;
                    let a = r.details;
                    if (!a) {
                        this.warn("level.details undefined");
                        return
                    }
                    let n = Object.keys(e.elementaryStreams).reduce((t, s) => {
                        let n = e.elementaryStreams[s];
                        if (n) {
                            let l = n.endPTS - n.startPTS;
                            if (l <= 0) return this.warn(`Could not parse fragment ${e.sn} ${s} duration reliably (${l})`), t || !1;
                            let o = i ? 0 : updateFragPTSDTS(a, e, n.startPTS, n.endPTS, n.startDTS, n.endDTS);
                            return this.hls.trigger(E.LEVEL_PTS_UPDATED, {
                                details: a,
                                level: r,
                                drift: o,
                                type: s,
                                frag: e,
                                start: n.startPTS,
                                end: n.endPTS
                            }), !0
                        }
                        return t
                    }, !1);
                    if (n) r.fragmentError = 0;
                    else if ((null == (s = this.transmuxer) ? void 0 : s.error) === null) {
                        let t = Error(`Found no media in fragment ${e.sn} of level ${e.level} resetting transmuxer to fallback to playlist timing`);
                        if (0 === r.fragmentError && (r.fragmentError++, e.gap = !0, this.fragmentTracker.removeFragment(e), this.fragmentTracker.fragBuffered(e, !0)), this.warn(t.message), this.hls.trigger(E.ERROR, {
                                type: y.MEDIA_ERROR,
                                details: v.FRAG_PARSING_ERROR,
                                fatal: !1,
                                error: t,
                                frag: e,
                                reason: `Found no media in msn ${e.sn} of level "${r.url}"`
                            }), !this.hls) return;
                        this.resetTransmuxer()
                    }
                    this.state = et.PARSED, this.hls.trigger(E.FRAG_PARSED, {
                        frag: e,
                        part: t
                    })
                }
                resetTransmuxer() {
                    this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null)
                }
                recoverWorkerError(e) {
                    if ("demuxerWorker" === e.event) {
                        var t, r, i;
                        this.fragmentTracker.removeAllFragments(), this.resetTransmuxer(), this.resetStartWhenNotLoaded(null != (t = null != (r = this.levelLastLoaded) ? r : null == (i = this.fragCurrent) ? void 0 : i.level) ? t : 0), this.resetLoadingState()
                    }
                }
                set state(e) {
                    let t = this._state;
                    t !== e && (this._state = e, this.log(`${t}->${e}`))
                }
                get state() {
                    return this._state
                }
            };

            function getSourceBuffer() {
                return self.SourceBuffer || self.WebKitSourceBuffer
            }

            function dummyTrack(e = "", t = 9e4) {
                return {
                    type: e,
                    id: -1,
                    pid: -1,
                    inputTimeScale: t,
                    sequenceNumber: -1,
                    samples: [],
                    dropped: 0
                }
            }
            let BaseAudioDemuxer = class BaseAudioDemuxer {
                constructor() {
                    this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null
                }
                resetInitSegment(e, t, r, i) {
                    this._id3Track = {
                        type: "id3",
                        id: 3,
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: 0,
                        samples: [],
                        dropped: 0
                    }
                }
                resetTimeStamp(e) {
                    this.initPTS = e, this.resetContiguity()
                }
                resetContiguity() {
                    this.basePTS = null, this.lastPTS = null, this.frameIndex = 0
                }
                canParse(e, t) {
                    return !1
                }
                appendFrame(e, t, r) {}
                demux(e, t) {
                    let r;
                    this.cachedData && (e = appendUint8Array(this.cachedData, e), this.cachedData = null);
                    let i = getID3Data(e, 0),
                        s = i ? i.length : 0,
                        a = this._audioTrack,
                        n = this._id3Track,
                        l = i ? getTimeStamp(i) : void 0,
                        o = e.length;
                    for ((null === this.basePTS || 0 === this.frameIndex && T(l)) && (this.basePTS = initPTSFn(l, t, this.initPTS), this.lastPTS = this.basePTS), null === this.lastPTS && (this.lastPTS = this.basePTS), i && i.length > 0 && n.samples.push({
                            pts: this.lastPTS,
                            dts: this.lastPTS,
                            data: i,
                            type: W.audioId3,
                            duration: Number.POSITIVE_INFINITY
                        }); s < o;) {
                        if (this.canParse(e, s)) {
                            let t = this.appendFrame(a, e, s);
                            t ? (this.frameIndex++, this.lastPTS = t.sample.pts, s += t.length, r = s) : s = o
                        } else canParse$2(e, s) ? (i = getID3Data(e, s), n.samples.push({
                            pts: this.lastPTS,
                            dts: this.lastPTS,
                            data: i,
                            type: W.audioId3,
                            duration: Number.POSITIVE_INFINITY
                        }), s += i.length, r = s) : s++;
                        if (s === o && r !== o) {
                            let t = sliceUint8(e, r);
                            this.cachedData ? this.cachedData = appendUint8Array(this.cachedData, t) : this.cachedData = t
                        }
                    }
                    return {
                        audioTrack: a,
                        videoTrack: dummyTrack(),
                        id3Track: n,
                        textTrack: dummyTrack()
                    }
                }
                demuxSampleAes(e, t, r) {
                    return Promise.reject(Error(`[${this}] This demuxer does not support Sample-AES decryption`))
                }
                flush(e) {
                    let t = this.cachedData;
                    return t && (this.cachedData = null, this.demux(t, 0)), {
                        audioTrack: this._audioTrack,
                        videoTrack: dummyTrack(),
                        id3Track: this._id3Track,
                        textTrack: dummyTrack()
                    }
                }
                destroy() {}
            };
            let initPTSFn = (e, t, r) => {
                if (T(e)) return 90 * e;
                let i = r ? 9e4 * r.baseTime / r.timescale : 0;
                return 9e4 * t + i
            };

            function isHeaderPattern$1(e, t) {
                return 255 === e[t] && (246 & e[t + 1]) == 240
            }

            function getHeaderLength(e, t) {
                return 1 & e[t + 1] ? 7 : 9
            }

            function getFullFrameLength(e, t) {
                return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
            }

            function isHeader$1(e, t) {
                return t + 1 < e.length && isHeaderPattern$1(e, t)
            }

            function initTrackConfig(e, t, r, i, s) {
                if (!e.samplerate) {
                    let a = function(e, t, r, i) {
                        let s, a, n, l;
                        let o = navigator.userAgent.toLowerCase(),
                            h = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                        s = ((192 & t[r + 2]) >>> 6) + 1;
                        let d = (60 & t[r + 2]) >>> 2;
                        if (d > h.length - 1) {
                            e.trigger(E.ERROR, {
                                type: y.MEDIA_ERROR,
                                details: v.FRAG_PARSING_ERROR,
                                fatal: !0,
                                reason: `invalid ADTS sampling index:${d}`
                            });
                            return
                        }
                        return n = (1 & t[r + 2]) << 2 | (192 & t[r + 3]) >>> 6, L.log(`manifest codec:${i}, ADTS type:${s}, samplingIndex:${d}`), /firefox/i.test(o) ? d >= 6 ? (s = 5, l = [, , , , ], a = d - 3) : (s = 2, l = [, , ], a = d) : -1 !== o.indexOf("android") ? (s = 2, l = [, , ], a = d) : (s = 5, l = [, , , , ], i && (-1 !== i.indexOf("mp4a.40.29") || -1 !== i.indexOf("mp4a.40.5")) || !i && d >= 6 ? a = d - 3 : ((i && -1 !== i.indexOf("mp4a.40.2") && (d >= 6 && 1 === n || /vivaldi/i.test(o)) || !i && 1 === n) && (s = 2, l = [, , ]), a = d)), l[0] = s << 3, l[0] |= (14 & d) >> 1, l[1] |= (1 & d) << 7, l[1] |= n << 3, 5 === s && (l[1] |= (14 & a) >> 1, l[2] = (1 & a) << 7, l[2] |= 8, l[3] = 0), {
                            config: l,
                            samplerate: h[d],
                            channelCount: n,
                            codec: "mp4a.40." + s,
                            manifestCodec: i
                        }
                    }(t, r, i, s);
                    a && (e.config = a.config, e.samplerate = a.samplerate, e.channelCount = a.channelCount, e.codec = a.codec, e.manifestCodec = a.manifestCodec, L.log(`parsed codec:${e.codec}, rate:${a.samplerate}, channels:${a.channelCount}`))
                }
            }

            function appendFrame$1(e, t, r, i, s) {
                let a;
                let n = 9216e4 / e.samplerate,
                    l = i + s * n,
                    o = function(e, t) {
                        let r = getHeaderLength(e, t);
                        if (t + r <= e.length) {
                            let i = getFullFrameLength(e, t) - r;
                            if (i > 0) return {
                                headerLength: r,
                                frameLength: i
                            }
                        }
                    }(t, r);
                if (o) {
                    let {
                        frameLength: i,
                        headerLength: s
                    } = o, n = s + i, h = Math.max(0, r + n - t.length);
                    h ? (a = new Uint8Array(n - s)).set(t.subarray(r + s, t.length), 0) : a = t.subarray(r + s, r + n);
                    let d = {
                        unit: a,
                        pts: l
                    };
                    return h || e.samples.push(d), {
                        sample: d,
                        length: n,
                        missing: h
                    }
                }
                let h = t.length - r;
                (a = new Uint8Array(h)).set(t.subarray(r, t.length), 0);
                let d = {
                    unit: a,
                    pts: l
                };
                return {
                    sample: d,
                    length: h,
                    missing: -1
                }
            }
            let er = /\/emsg[-/]ID3/i,
                ei = null,
                es = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                ea = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                en = [
                    [0, 72, 144, 12],
                    [0, 0, 0, 0],
                    [0, 72, 144, 12],
                    [0, 144, 144, 12]
                ],
                el = [0, 1, 1, 4];

            function appendFrame(e, t, r, i, s) {
                if (r + 24 > t.length) return;
                let a = parseHeader(t, r);
                if (a && r + a.frameLength <= t.length) {
                    let n = 9e4 * a.samplesPerFrame / a.sampleRate,
                        l = i + s * n,
                        o = {
                            unit: t.subarray(r, r + a.frameLength),
                            pts: l,
                            dts: l
                        };
                    return e.config = [], e.channelCount = a.channelCount, e.samplerate = a.sampleRate, e.samples.push(o), {
                        sample: o,
                        length: a.frameLength,
                        missing: 0
                    }
                }
            }

            function parseHeader(e, t) {
                let r = e[t + 1] >> 3 & 3,
                    i = e[t + 1] >> 1 & 3,
                    s = e[t + 2] >> 4 & 15,
                    a = e[t + 2] >> 2 & 3;
                if (1 !== r && 0 !== s && 15 !== s && 3 !== a) {
                    let n = e[t + 2] >> 1 & 1,
                        l = e[t + 3] >> 6,
                        o = 1e3 * es[14 * (3 === r ? 3 - i : 3 === i ? 3 : 4) + s - 1],
                        h = ea[3 * (3 === r ? 0 : 2 === r ? 1 : 2) + a],
                        d = en[r][i],
                        u = el[i];
                    if (null === ei) {
                        let e = navigator.userAgent || "",
                            t = e.match(/Chrome\/(\d+)/i);
                        ei = t ? parseInt(t[1]) : 0
                    }
                    let c = !!ei && ei <= 87;
                    return c && 2 === i && o >= 224e3 && 0 === l && (e[t + 3] = 128 | e[t + 3]), {
                        sampleRate: h,
                        channelCount: 3 === l ? 1 : 2,
                        frameLength: Math.floor(d * o / h + n) * u,
                        samplesPerFrame: 8 * d * u
                    }
                }
            }

            function isHeaderPattern(e, t) {
                return 255 === e[t] && (224 & e[t + 1]) == 224 && (6 & e[t + 1]) != 0
            }

            function isHeader(e, t) {
                return t + 1 < e.length && isHeaderPattern(e, t)
            }
            let ExpGolomb = class ExpGolomb {
                constructor(e) {
                    this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
                }
                loadWord() {
                    let e = this.data,
                        t = this.bytesAvailable,
                        r = e.byteLength - t,
                        i = new Uint8Array(4),
                        s = Math.min(4, t);
                    if (0 === s) throw Error("no bytes available");
                    i.set(e.subarray(r, r + s)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * s, this.bytesAvailable -= s
                }
                skipBits(e) {
                    let t;
                    e = Math.min(e, 8 * this.bytesAvailable + this.bitsAvailable), this.bitsAvailable > e || (e -= this.bitsAvailable, t = e >> 3, e -= t << 3, this.bytesAvailable -= t, this.loadWord()), this.word <<= e, this.bitsAvailable -= e
                }
                readBits(e) {
                    let t = Math.min(this.bitsAvailable, e),
                        r = this.word >>> 32 - t;
                    if (e > 32 && L.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0) this.word <<= t;
                    else if (this.bytesAvailable > 0) this.loadWord();
                    else throw Error("no bits available");
                    return (t = e - t) > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r
                }
                skipLZ() {
                    let e;
                    for (e = 0; e < this.bitsAvailable; ++e)
                        if ((this.word & 2147483648 >>> e) != 0) return this.word <<= e, this.bitsAvailable -= e, e;
                    return this.loadWord(), e + this.skipLZ()
                }
                skipUEG() {
                    this.skipBits(1 + this.skipLZ())
                }
                skipEG() {
                    this.skipBits(1 + this.skipLZ())
                }
                readUEG() {
                    let e = this.skipLZ();
                    return this.readBits(e + 1) - 1
                }
                readEG() {
                    let e = this.readUEG();
                    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                }
                readBoolean() {
                    return 1 === this.readBits(1)
                }
                readUByte() {
                    return this.readBits(8)
                }
                readUShort() {
                    return this.readBits(16)
                }
                readUInt() {
                    return this.readBits(32)
                }
                skipScalingList(e) {
                    let t = 8,
                        r = 8;
                    for (let i = 0; i < e; i++) 0 !== r && (r = (t + this.readEG() + 256) % 256), t = 0 === r ? t : r
                }
                readSPS() {
                    let e, t, r, i = 0,
                        s = 0,
                        a = 0,
                        n = 0,
                        l = this.readUByte.bind(this),
                        o = this.readBits.bind(this),
                        h = this.readUEG.bind(this),
                        d = this.readBoolean.bind(this),
                        u = this.skipBits.bind(this),
                        c = this.skipEG.bind(this),
                        f = this.skipUEG.bind(this),
                        g = this.skipScalingList.bind(this);
                    l();
                    let m = l();
                    if (o(5), u(3), l(), f(), 100 === m || 110 === m || 122 === m || 244 === m || 44 === m || 83 === m || 86 === m || 118 === m || 128 === m) {
                        let e = h();
                        if (3 === e && u(1), f(), f(), u(1), d())
                            for (r = 0, t = 3 !== e ? 8 : 12; r < t; r++) d() && g(r < 6 ? 16 : 64)
                    }
                    f();
                    let p = h();
                    if (0 === p) h();
                    else if (1 === p)
                        for (u(1), c(), c(), e = h(), r = 0; r < e; r++) c();
                    f(), u(1);
                    let T = h(),
                        E = h(),
                        y = o(1);
                    0 === y && u(1), u(1), d() && (i = h(), s = h(), a = h(), n = h());
                    let v = [1, 1];
                    if (d() && d()) {
                        let e = l();
                        switch (e) {
                            case 1:
                                v = [1, 1];
                                break;
                            case 2:
                                v = [12, 11];
                                break;
                            case 3:
                                v = [10, 11];
                                break;
                            case 4:
                                v = [16, 11];
                                break;
                            case 5:
                                v = [40, 33];
                                break;
                            case 6:
                                v = [24, 11];
                                break;
                            case 7:
                                v = [20, 11];
                                break;
                            case 8:
                                v = [32, 11];
                                break;
                            case 9:
                                v = [80, 33];
                                break;
                            case 10:
                                v = [18, 11];
                                break;
                            case 11:
                                v = [15, 11];
                                break;
                            case 12:
                                v = [64, 33];
                                break;
                            case 13:
                                v = [160, 99];
                                break;
                            case 14:
                                v = [4, 3];
                                break;
                            case 15:
                                v = [3, 2];
                                break;
                            case 16:
                                v = [2, 1];
                                break;
                            case 255:
                                v = [l() << 8 | l(), l() << 8 | l()]
                        }
                    }
                    return {
                        width: Math.ceil((T + 1) * 16 - 2 * i - 2 * s),
                        height: (2 - y) * (E + 1) * 16 - (y ? 2 : 4) * (a + n),
                        pixelRatio: v
                    }
                }
                readSliceType() {
                    return this.readUByte(), this.readUEG(), this.readUEG()
                }
            };
            let SampleAesDecrypter = class SampleAesDecrypter {
                constructor(e, t, r) {
                    this.keyData = void 0, this.decrypter = void 0, this.keyData = r, this.decrypter = new Decrypter(t, {
                        removePKCS7Padding: !1
                    })
                }
                decryptBuffer(e) {
                    return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer)
                }
                decryptAacSample(e, t, r) {
                    let i = e[t].unit;
                    if (i.length <= 16) return;
                    let s = i.subarray(16, i.length - i.length % 16),
                        a = s.buffer.slice(s.byteOffset, s.byteOffset + s.length);
                    this.decryptBuffer(a).then(s => {
                        let a = new Uint8Array(s);
                        i.set(a, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, r)
                    })
                }
                decryptAacSamples(e, t, r) {
                    for (;; t++) {
                        if (t >= e.length) {
                            r();
                            return
                        }
                        if (!(e[t].unit.length < 32) && (this.decryptAacSample(e, t, r), !this.decrypter.isSync())) return
                    }
                }
                getAvcEncryptedData(e) {
                    let t = 16 * Math.floor((e.length - 48) / 160) + 16,
                        r = new Int8Array(t),
                        i = 0;
                    for (let t = 32; t < e.length - 16; t += 160, i += 16) r.set(e.subarray(t, t + 16), i);
                    return r
                }
                getAvcDecryptedUnit(e, t) {
                    let r = new Uint8Array(t),
                        i = 0;
                    for (let t = 32; t < e.length - 16; t += 160, i += 16) e.set(r.subarray(i, i + 16), t);
                    return e
                }
                decryptAvcSample(e, t, r, i, s) {
                    let a = discardEPB(s.data),
                        n = this.getAvcEncryptedData(a);
                    this.decryptBuffer(n.buffer).then(n => {
                        s.data = this.getAvcDecryptedUnit(a, n), this.decrypter.isSync() || this.decryptAvcSamples(e, t, r + 1, i)
                    })
                }
                decryptAvcSamples(e, t, r, i) {
                    if (e instanceof Uint8Array) throw Error("Cannot decrypt samples of type Uint8Array");
                    for (;; t++, r = 0) {
                        if (t >= e.length) {
                            i();
                            return
                        }
                        let s = e[t].units;
                        for (; !(r >= s.length); r++) {
                            let a = s[r];
                            if (!(a.data.length <= 48) && (1 === a.type || 5 === a.type) && (this.decryptAvcSample(e, t, r, i, a), !this.decrypter.isSync())) return
                        }
                    }
                }
            };
            let TSDemuxer = class TSDemuxer {
                constructor(e, t, r) {
                    this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = e, this.config = t, this.typeSupported = r
                }
                static probe(e) {
                    let t = TSDemuxer.syncOffset(e);
                    return t > 0 && L.warn(`MPEG2-TS detected but first sync word found @ offset ${t}`), -1 !== t
                }
                static syncOffset(e) {
                    let t = e.length,
                        r = Math.min(940, e.length - 188) + 1,
                        i = 0;
                    for (; i < r;) {
                        let s = !1,
                            a = -1,
                            n = 0;
                        for (let l = i; l < t; l += 188)
                            if (71 === e[l]) {
                                if (n++, -1 === a && 0 !== (a = l) && (r = Math.min(a + 18612, e.length - 188) + 1), s || (s = 0 === parsePID(e, l)), s && n > 1 && (0 === a && n > 2 || l + 188 > r)) return a
                            } else if (n) return -1;
                        else break;
                        i++
                    }
                    return -1
                }
                static createTrack(e, t) {
                    return {
                        container: "video" === e || "audio" === e ? "video/mp2t" : void 0,
                        type: e,
                        id: w[e],
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: 0,
                        samples: [],
                        dropped: 0,
                        duration: "audio" === e ? t : void 0
                    }
                }
                resetInitSegment(e, t, r, i) {
                    this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = TSDemuxer.createTrack("video"), this._audioTrack = TSDemuxer.createTrack("audio", i), this._id3Track = TSDemuxer.createTrack("id3"), this._txtTrack = TSDemuxer.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.audioCodec = t, this.videoCodec = r, this._duration = i
                }
                resetTimeStamp() {}
                resetContiguity() {
                    let {
                        _audioTrack: e,
                        _avcTrack: t,
                        _id3Track: r
                    } = this;
                    e && (e.pesData = null), t && (t.pesData = null), r && (r.pesData = null), this.aacOverFlow = null, this.avcSample = null, this.remainderData = null
                }
                demux(e, t, r = !1, i = !1) {
                    let s;
                    r || (this.sampleAes = null);
                    let a = this._avcTrack,
                        n = this._audioTrack,
                        l = this._id3Track,
                        o = this._txtTrack,
                        h = a.pid,
                        d = a.pesData,
                        u = n.pid,
                        c = l.pid,
                        f = n.pesData,
                        g = l.pesData,
                        m = null,
                        p = this.pmtParsed,
                        T = this._pmtId,
                        S = e.length;
                    if (this.remainderData && (S = (e = appendUint8Array(this.remainderData, e)).length, this.remainderData = null), S < 188 && !i) return this.remainderData = e, {
                        audioTrack: n,
                        videoTrack: a,
                        id3Track: l,
                        textTrack: o
                    };
                    let A = Math.max(0, TSDemuxer.syncOffset(e));
                    (S -= (S - A) % 188) < e.byteLength && !i && (this.remainderData = new Uint8Array(e.buffer, S, e.buffer.byteLength - S));
                    let R = 0;
                    for (let t = A; t < S; t += 188)
                        if (71 === e[t]) {
                            let i;
                            let E = !!(64 & e[t + 1]),
                                y = parsePID(e, t),
                                v = (48 & e[t + 3]) >> 4;
                            if (v > 1) {
                                if ((i = t + 5 + e[t + 4]) === t + 188) continue
                            } else i = t + 4;
                            switch (y) {
                                case h:
                                    E && (d && (s = parsePES(d)) && this.parseAVCPES(a, o, s, !1), d = {
                                        data: [],
                                        size: 0
                                    }), d && (d.data.push(e.subarray(i, t + 188)), d.size += t + 188 - i);
                                    break;
                                case u:
                                    if (E) {
                                        if (f && (s = parsePES(f))) switch (n.segmentCodec) {
                                            case "aac":
                                                this.parseAACPES(n, s);
                                                break;
                                            case "mp3":
                                                this.parseMPEGPES(n, s)
                                        }
                                        f = {
                                            data: [],
                                            size: 0
                                        }
                                    }
                                    f && (f.data.push(e.subarray(i, t + 188)), f.size += t + 188 - i);
                                    break;
                                case c:
                                    E && (g && (s = parsePES(g)) && this.parseID3PES(l, s), g = {
                                        data: [],
                                        size: 0
                                    }), g && (g.data.push(e.subarray(i, t + 188)), g.size += t + 188 - i);
                                    break;
                                case 0:
                                    var I, D;
                                    E && (i += e[i] + 1), T = this._pmtId = (31 & (I = e)[(D = i) + 10]) << 8 | I[D + 11];
                                    break;
                                case T:
                                    {
                                        E && (i += e[i] + 1);
                                        let s = function(e, t, r, i) {
                                            let s = {
                                                    audio: -1,
                                                    avc: -1,
                                                    id3: -1,
                                                    segmentCodec: "aac"
                                                },
                                                a = (15 & e[t + 1]) << 8 | e[t + 2],
                                                n = t + 3 + a - 4,
                                                l = (15 & e[t + 10]) << 8 | e[t + 11];
                                            for (t += 12 + l; t < n;) {
                                                let a = parsePID(e, t);
                                                switch (e[t]) {
                                                    case 207:
                                                        if (!i) {
                                                            L.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                                                            break
                                                        }
                                                    case 15:
                                                        -1 === s.audio && (s.audio = a);
                                                        break;
                                                    case 21:
                                                        -1 === s.id3 && (s.id3 = a);
                                                        break;
                                                    case 219:
                                                        if (!i) {
                                                            L.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                                                            break
                                                        }
                                                    case 27:
                                                        -1 === s.avc && (s.avc = a);
                                                        break;
                                                    case 3:
                                                    case 4:
                                                        !0 !== r.mpeg && !0 !== r.mp3 ? L.log("MPEG audio found, not supported in this browser") : -1 === s.audio && (s.audio = a, s.segmentCodec = "mp3");
                                                        break;
                                                    case 36:
                                                        L.warn("Unsupported HEVC stream type found")
                                                }
                                                t += ((15 & e[t + 3]) << 8 | e[t + 4]) + 5
                                            }
                                            return s
                                        }(e, i, this.typeSupported, r);
                                        (h = s.avc) > 0 && (a.pid = h),
                                        (u = s.audio) > 0 && (n.pid = u, n.segmentCodec = s.segmentCodec),
                                        (c = s.id3) > 0 && (l.pid = c),
                                        null === m || p || (L.warn(`MPEG-TS PMT found at ${t} after unknown PID '${m}'. Backtracking to sync byte @${A} to parse all TS packets.`), m = null, t = A - 188),
                                        p = this.pmtParsed = !0;
                                        break
                                    }
                                case 17:
                                case 8191:
                                    break;
                                default:
                                    m = y
                            }
                        } else R++;
                    if (R > 0) {
                        let e = Error(`Found ${R} TS packet/s that do not start with 0x47`);
                        this.observer.emit(E.ERROR, E.ERROR, {
                            type: y.MEDIA_ERROR,
                            details: v.FRAG_PARSING_ERROR,
                            fatal: !1,
                            error: e,
                            reason: e.message
                        })
                    }
                    a.pesData = d, n.pesData = f, l.pesData = g;
                    let b = {
                        audioTrack: n,
                        videoTrack: a,
                        id3Track: l,
                        textTrack: o
                    };
                    return i && this.extractRemainingSamples(b), b
                }
                flush() {
                    let e;
                    let {
                        remainderData: t
                    } = this;
                    return (this.remainderData = null, e = t ? this.demux(t, -1, !1, !0) : {
                        videoTrack: this._avcTrack,
                        audioTrack: this._audioTrack,
                        id3Track: this._id3Track,
                        textTrack: this._txtTrack
                    }, this.extractRemainingSamples(e), this.sampleAes) ? this.decrypt(e, this.sampleAes) : e
                }
                extractRemainingSamples(e) {
                    let t;
                    let {
                        audioTrack: r,
                        videoTrack: i,
                        id3Track: s,
                        textTrack: a
                    } = e, n = i.pesData, l = r.pesData, o = s.pesData;
                    if (n && (t = parsePES(n)) ? (this.parseAVCPES(i, a, t, !0), i.pesData = null) : i.pesData = n, l && (t = parsePES(l))) {
                        switch (r.segmentCodec) {
                            case "aac":
                                this.parseAACPES(r, t);
                                break;
                            case "mp3":
                                this.parseMPEGPES(r, t)
                        }
                        r.pesData = null
                    } else null != l && l.size && L.log("last AAC PES packet truncated,might overlap between fragments"), r.pesData = l;
                    o && (t = parsePES(o)) ? (this.parseID3PES(s, t), s.pesData = null) : s.pesData = o
                }
                demuxSampleAes(e, t, r) {
                    let i = this.demux(e, r, !0, !this.config.progressive),
                        s = this.sampleAes = new SampleAesDecrypter(this.observer, this.config, t);
                    return this.decrypt(i, s)
                }
                decrypt(e, t) {
                    return new Promise(r => {
                        let {
                            audioTrack: i,
                            videoTrack: s
                        } = e;
                        i.samples && "aac" === i.segmentCodec ? t.decryptAacSamples(i.samples, 0, () => {
                            s.samples ? t.decryptAvcSamples(s.samples, 0, 0, () => {
                                r(e)
                            }) : r(e)
                        }) : s.samples && t.decryptAvcSamples(s.samples, 0, 0, () => {
                            r(e)
                        })
                    })
                }
                destroy() {
                    this._duration = 0
                }
                parseAVCPES(e, t, r, i) {
                    let s;
                    let a = this.parseAVCNALu(e, r.data),
                        n = this.avcSample,
                        l = !1;
                    r.data = null, n && a.length && !e.audFound && (pushAccessUnit(n, e), n = this.avcSample = createAVCSample(!1, r.pts, r.dts, "")), a.forEach(i => {
                        var a, o;
                        switch (i.type) {
                            case 1:
                                {
                                    let t = !1;s = !0;
                                    let a = i.data;
                                    if (l && a.length > 4) {
                                        let e = new ExpGolomb(a).readSliceType();
                                        (2 === e || 4 === e || 7 === e || 9 === e) && (t = !0)
                                    }
                                    t && null != (o = n) && o.frame && !n.key && (pushAccessUnit(n, e), n = this.avcSample = null),
                                    n || (n = this.avcSample = createAVCSample(!0, r.pts, r.dts, "")),
                                    n.frame = !0,
                                    n.key = t;
                                    break
                                }
                            case 5:
                                s = !0, null != (a = n) && a.frame && !n.key && (pushAccessUnit(n, e), n = this.avcSample = null), n || (n = this.avcSample = createAVCSample(!0, r.pts, r.dts, "")), n.key = !0, n.frame = !0;
                                break;
                            case 6:
                                s = !0, parseSEIMessageFromNALu(i.data, 1, r.pts, t.samples);
                                break;
                            case 7:
                                if (s = !0, l = !0, !e.sps) {
                                    let t = i.data,
                                        r = new ExpGolomb(t),
                                        s = r.readSPS();
                                    e.width = s.width, e.height = s.height, e.pixelRatio = s.pixelRatio, e.sps = [t], e.duration = this._duration;
                                    let a = t.subarray(1, 4),
                                        n = "avc1.";
                                    for (let e = 0; e < 3; e++) {
                                        let t = a[e].toString(16);
                                        t.length < 2 && (t = "0" + t), n += t
                                    }
                                    e.codec = n
                                }
                                break;
                            case 8:
                                s = !0, e.pps || (e.pps = [i.data]);
                                break;
                            case 9:
                                s = !1, e.audFound = !0, n && pushAccessUnit(n, e), n = this.avcSample = createAVCSample(!1, r.pts, r.dts, "");
                                break;
                            case 12:
                                s = !0;
                                break;
                            default:
                                s = !1, n && (n.debug += "unknown NAL " + i.type + " ")
                        }
                        if (n && s) {
                            let e = n.units;
                            e.push(i)
                        }
                    }), i && n && (pushAccessUnit(n, e), this.avcSample = null)
                }
                getLastNalUnit(e) {
                    var t;
                    let r;
                    let i = this.avcSample;
                    if (i && 0 !== i.units.length || (i = e[e.length - 1]), null != (t = i) && t.units) {
                        let e = i.units;
                        r = e[e.length - 1]
                    }
                    return r
                }
                parseAVCNALu(e, t) {
                    let r, i, s;
                    let a = t.byteLength,
                        n = e.naluState || 0,
                        l = n,
                        o = [],
                        h = 0,
                        d = -1,
                        u = 0;
                    for (-1 === n && (d = 0, u = 31 & t[0], n = 0, h = 1); h < a;) {
                        if (r = t[h++], !n) {
                            n = r ? 0 : 1;
                            continue
                        }
                        if (1 === n) {
                            n = r ? 0 : 2;
                            continue
                        }
                        if (r) {
                            if (1 === r) {
                                if (d >= 0) {
                                    let e = {
                                        data: t.subarray(d, h - n - 1),
                                        type: u
                                    };
                                    o.push(e)
                                } else {
                                    let r = this.getLastNalUnit(e.samples);
                                    if (r && (l && h <= 4 - l && r.state && (r.data = r.data.subarray(0, r.data.byteLength - l)), (i = h - n - 1) > 0)) {
                                        let e = new Uint8Array(r.data.byteLength + i);
                                        e.set(r.data, 0), e.set(t.subarray(0, i), r.data.byteLength), r.data = e, r.state = 0
                                    }
                                }
                                h < a ? (s = 31 & t[h], d = h, u = s, n = 0) : n = -1
                            } else n = 0
                        } else n = 3
                    }
                    if (d >= 0 && n >= 0) {
                        let e = {
                            data: t.subarray(d, a),
                            type: u,
                            state: n
                        };
                        o.push(e)
                    }
                    if (0 === o.length) {
                        let r = this.getLastNalUnit(e.samples);
                        if (r) {
                            let e = new Uint8Array(r.data.byteLength + t.byteLength);
                            e.set(r.data, 0), e.set(t, r.data.byteLength), r.data = e
                        }
                    }
                    return e.naluState = n, o
                }
                parseAACPES(e, t) {
                    let r, i, s, a, n = 0,
                        l = this.aacOverFlow,
                        o = t.data;
                    if (l) {
                        this.aacOverFlow = null;
                        let t = l.missing,
                            r = l.sample.unit.byteLength;
                        if (-1 === t) {
                            let e = new Uint8Array(r + o.byteLength);
                            e.set(l.sample.unit, 0), e.set(o, r), o = e
                        } else {
                            let i = r - t;
                            l.sample.unit.set(o.subarray(0, t), i), e.samples.push(l.sample), n = l.missing
                        }
                    }
                    for (r = n, i = o.length; r < i - 1 && !isHeader$1(o, r); r++);
                    if (r !== n) {
                        let e;
                        let t = r < i - 1;
                        e = t ? `AAC PES did not start with ADTS header,offset:${r}` : "No ADTS header found in AAC PES";
                        let s = Error(e);
                        if (L.warn(`parsing error: ${e}`), this.observer.emit(E.ERROR, E.ERROR, {
                                type: y.MEDIA_ERROR,
                                details: v.FRAG_PARSING_ERROR,
                                fatal: !1,
                                levelRetry: t,
                                error: s,
                                reason: e
                            }), !t) return
                    }
                    if (initTrackConfig(e, this.observer, o, r, this.audioCodec), void 0 !== t.pts) s = t.pts;
                    else if (l) {
                        let t = 9216e4 / e.samplerate;
                        s = l.sample.pts + t
                    } else {
                        L.warn("[tsdemuxer]: AAC PES unknown PTS");
                        return
                    }
                    let h = 0;
                    for (; r < i;) {
                        if (a = appendFrame$1(e, o, r, s, h), r += a.length, a.missing) {
                            this.aacOverFlow = a;
                            break
                        }
                        for (h++; r < i - 1 && !isHeader$1(o, r); r++);
                    }
                }
                parseMPEGPES(e, t) {
                    let r = t.data,
                        i = r.length,
                        s = 0,
                        a = 0,
                        n = t.pts;
                    if (void 0 === n) {
                        L.warn("[tsdemuxer]: MPEG PES unknown PTS");
                        return
                    }
                    for (; a < i;)
                        if (isHeader(r, a)) {
                            let t = appendFrame(e, r, a, n, s);
                            if (t) a += t.length, s++;
                            else break
                        } else a++
                }
                parseID3PES(e, t) {
                    if (void 0 === t.pts) {
                        L.warn("[tsdemuxer]: ID3 PES unknown PTS");
                        return
                    }
                    let r = _extends({}, t, {
                        type: this._avcTrack ? W.emsg : W.audioId3,
                        duration: Number.POSITIVE_INFINITY
                    });
                    e.samples.push(r)
                }
            };

            function createAVCSample(e, t, r, i) {
                return {
                    key: e,
                    frame: !1,
                    pts: t,
                    dts: r,
                    units: [],
                    debug: i,
                    length: 0
                }
            }

            function parsePID(e, t) {
                return ((31 & e[t + 1]) << 8) + e[t + 2]
            }

            function parsePES(e) {
                let t, r, i, s, a, n = 0,
                    l = e.data;
                if (!e || 0 === e.size) return null;
                for (; l[0].length < 19 && l.length > 1;) {
                    let e = new Uint8Array(l[0].length + l[1].length);
                    e.set(l[0]), e.set(l[1], l[0].length), l[0] = e, l.splice(1, 1)
                }
                t = l[0];
                let o = (t[0] << 16) + (t[1] << 8) + t[2];
                if (1 === o) {
                    if ((r = (t[4] << 8) + t[5]) && r > e.size - 6) return null;
                    let o = t[7];
                    192 & o && (s = (14 & t[9]) * 536870912 + (255 & t[10]) * 4194304 + (254 & t[11]) * 16384 + (255 & t[12]) * 128 + (254 & t[13]) / 2, 64 & o ? s - (a = (14 & t[14]) * 536870912 + (255 & t[15]) * 4194304 + (254 & t[16]) * 16384 + (255 & t[17]) * 128 + (254 & t[18]) / 2) > 54e5 && (L.warn(`${Math.round((s-a)/9e4)}s delta between PTS and DTS, align them`), s = a) : a = s);
                    let h = (i = t[8]) + 9;
                    if (e.size <= h) return null;
                    e.size -= h;
                    let d = new Uint8Array(e.size);
                    for (let e = 0, r = l.length; e < r; e++) {
                        let r = (t = l[e]).byteLength;
                        if (h) {
                            if (h > r) {
                                h -= r;
                                continue
                            }
                            t = t.subarray(h), r -= h, h = 0
                        }
                        d.set(t, n), n += r
                    }
                    return r && (r -= i + 3), {
                        data: d,
                        pts: s,
                        dts: a,
                        len: r
                    }
                }
                return null
            }

            function pushAccessUnit(e, t) {
                if (e.units.length && e.frame) {
                    if (void 0 === e.pts) {
                        let r = t.samples,
                            i = r.length;
                        if (i) {
                            let t = r[i - 1];
                            e.pts = t.pts, e.dts = t.dts
                        } else {
                            t.dropped++;
                            return
                        }
                    }
                    t.samples.push(e)
                }
                e.debug.length && L.log(e.pts + "/" + e.dts + ":" + e.debug)
            }
            let AAC = class AAC {
                static getSilentFrame(e, t) {
                    if ("mp4a.40.2" === e) {
                        if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                        if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                        if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                        if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                        else if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                        else if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224])
                    } else {
                        if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                        if (2 === t || 3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                    }
                }
            };
            let MP4 = class MP4 {
                static init() {
                    let e;
                    for (e in MP4.types = {
                            avc1: [],
                            avcC: [],
                            btrt: [],
                            dinf: [],
                            dref: [],
                            esds: [],
                            ftyp: [],
                            hdlr: [],
                            mdat: [],
                            mdhd: [],
                            mdia: [],
                            mfhd: [],
                            minf: [],
                            moof: [],
                            moov: [],
                            mp4a: [],
                            ".mp3": [],
                            mvex: [],
                            mvhd: [],
                            pasp: [],
                            sdtp: [],
                            stbl: [],
                            stco: [],
                            stsc: [],
                            stsd: [],
                            stsz: [],
                            stts: [],
                            tfdt: [],
                            tfhd: [],
                            traf: [],
                            trak: [],
                            trun: [],
                            trex: [],
                            tkhd: [],
                            vmhd: [],
                            smhd: []
                        }, MP4.types) MP4.types.hasOwnProperty(e) && (MP4.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                    let t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                        r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                    MP4.HDLR_TYPES = {
                        video: t,
                        audio: r
                    };
                    let i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                        s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                    MP4.STTS = MP4.STSC = MP4.STCO = s, MP4.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), MP4.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), MP4.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), MP4.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                    let a = new Uint8Array([105, 115, 111, 109]),
                        n = new Uint8Array([97, 118, 99, 49]),
                        l = new Uint8Array([0, 0, 0, 1]);
                    MP4.FTYP = MP4.box(MP4.types.ftyp, a, l, a, n), MP4.DINF = MP4.box(MP4.types.dinf, MP4.box(MP4.types.dref, i))
                }
                static box(e, ...t) {
                    let r = 8,
                        i = t.length,
                        s = i;
                    for (; i--;) r += t[i].byteLength;
                    let a = new Uint8Array(r);
                    for (a[0] = r >> 24 & 255, a[1] = r >> 16 & 255, a[2] = r >> 8 & 255, a[3] = 255 & r, a.set(e, 4), i = 0, r = 8; i < s; i++) a.set(t[i], r), r += t[i].byteLength;
                    return a
                }
                static hdlr(e) {
                    return MP4.box(MP4.types.hdlr, MP4.HDLR_TYPES[e])
                }
                static mdat(e) {
                    return MP4.box(MP4.types.mdat, e)
                }
                static mdhd(e, t) {
                    t *= e;
                    let r = Math.floor(t / 4294967296),
                        i = Math.floor(t % 4294967296);
                    return MP4.box(MP4.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 85, 196, 0, 0]))
                }
                static mdia(e) {
                    return MP4.box(MP4.types.mdia, MP4.mdhd(e.timescale, e.duration), MP4.hdlr(e.type), MP4.minf(e))
                }
                static mfhd(e) {
                    return MP4.box(MP4.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
                }
                static minf(e) {
                    return "audio" === e.type ? MP4.box(MP4.types.minf, MP4.box(MP4.types.smhd, MP4.SMHD), MP4.DINF, MP4.stbl(e)) : MP4.box(MP4.types.minf, MP4.box(MP4.types.vmhd, MP4.VMHD), MP4.DINF, MP4.stbl(e))
                }
                static moof(e, t, r) {
                    return MP4.box(MP4.types.moof, MP4.mfhd(e), MP4.traf(r, t))
                }
                static moov(e) {
                    let t = e.length,
                        r = [];
                    for (; t--;) r[t] = MP4.trak(e[t]);
                    return MP4.box.apply(null, [MP4.types.moov, MP4.mvhd(e[0].timescale, e[0].duration)].concat(r).concat(MP4.mvex(e)))
                }
                static mvex(e) {
                    let t = e.length,
                        r = [];
                    for (; t--;) r[t] = MP4.trex(e[t]);
                    return MP4.box.apply(null, [MP4.types.mvex, ...r])
                }
                static mvhd(e, t) {
                    t *= e;
                    let r = Math.floor(t / 4294967296),
                        i = Math.floor(t % 4294967296),
                        s = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                    return MP4.box(MP4.types.mvhd, s)
                }
                static sdtp(e) {
                    let t, r;
                    let i = e.samples || [],
                        s = new Uint8Array(4 + i.length);
                    for (t = 0; t < i.length; t++) r = i[t].flags, s[t + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
                    return MP4.box(MP4.types.sdtp, s)
                }
                static stbl(e) {
                    return MP4.box(MP4.types.stbl, MP4.stsd(e), MP4.box(MP4.types.stts, MP4.STTS), MP4.box(MP4.types.stsc, MP4.STSC), MP4.box(MP4.types.stsz, MP4.STSZ), MP4.box(MP4.types.stco, MP4.STCO))
                }
                static avc1(e) {
                    let t, r, i, s = [],
                        a = [];
                    for (t = 0; t < e.sps.length; t++) i = (r = e.sps[t]).byteLength, s.push(i >>> 8 & 255), s.push(255 & i), s = s.concat(Array.prototype.slice.call(r));
                    for (t = 0; t < e.pps.length; t++) i = (r = e.pps[t]).byteLength, a.push(i >>> 8 & 255), a.push(255 & i), a = a.concat(Array.prototype.slice.call(r));
                    let n = MP4.box(MP4.types.avcC, new Uint8Array([1, s[3], s[4], s[5], 255, 224 | e.sps.length].concat(s).concat([e.pps.length]).concat(a))),
                        l = e.width,
                        o = e.height,
                        h = e.pixelRatio[0],
                        d = e.pixelRatio[1];
                    return MP4.box(MP4.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, o >> 8 & 255, 255 & o, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), n, MP4.box(MP4.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), MP4.box(MP4.types.pasp, new Uint8Array([h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
                }
                static esds(e) {
                    let t = e.config.length;
                    return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
                }
                static mp4a(e) {
                    let t = e.samplerate;
                    return MP4.box(MP4.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, t >> 8 & 255, 255 & t, 0, 0]), MP4.box(MP4.types.esds, MP4.esds(e)))
                }
                static mp3(e) {
                    let t = e.samplerate;
                    return MP4.box(MP4.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, t >> 8 & 255, 255 & t, 0, 0]))
                }
                static stsd(e) {
                    return "audio" !== e.type ? MP4.box(MP4.types.stsd, MP4.STSD, MP4.avc1(e)) : "mp3" === e.segmentCodec && "mp3" === e.codec ? MP4.box(MP4.types.stsd, MP4.STSD, MP4.mp3(e)) : MP4.box(MP4.types.stsd, MP4.STSD, MP4.mp4a(e))
                }
                static tkhd(e) {
                    let t = e.id,
                        r = e.duration * e.timescale,
                        i = e.width,
                        s = e.height,
                        a = Math.floor(r / 4294967296),
                        n = Math.floor(r % 4294967296);
                    return MP4.box(MP4.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0, s >> 8 & 255, 255 & s, 0, 0]))
                }
                static traf(e, t) {
                    let r = MP4.sdtp(e),
                        i = e.id,
                        s = Math.floor(t / 4294967296),
                        a = Math.floor(t % 4294967296);
                    return MP4.box(MP4.types.traf, MP4.box(MP4.types.tfhd, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i])), MP4.box(MP4.types.tfdt, new Uint8Array([1, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), MP4.trun(e, r.length + 16 + 20 + 8 + 16 + 8 + 8), r)
                }
                static trak(e) {
                    return e.duration = e.duration || 4294967295, MP4.box(MP4.types.trak, MP4.tkhd(e), MP4.mdia(e))
                }
                static trex(e) {
                    let t = e.id;
                    return MP4.box(MP4.types.trex, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                }
                static trun(e, t) {
                    let r, i, s, a, n, l;
                    let o = e.samples || [],
                        h = o.length,
                        d = 12 + 16 * h,
                        u = new Uint8Array(d);
                    for (t += 8 + d, u.set(["video" === e.type ? 1 : 0, 0, 15, 1, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, 255 & h, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t], 0), r = 0; r < h; r++) s = (i = o[r]).duration, a = i.size, n = i.flags, l = i.cts, u.set([s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, n.isLeading << 2 | n.dependsOn, n.isDependedOn << 6 | n.hasRedundancy << 4 | n.paddingValue << 1 | n.isNonSync, 61440 & n.degradPrio, 15 & n.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * r);
                    return MP4.box(MP4.types.trun, u)
                }
                static initSegment(e) {
                    MP4.types || MP4.init();
                    let t = MP4.moov(e),
                        r = new Uint8Array(MP4.FTYP.byteLength + t.byteLength);
                    return r.set(MP4.FTYP), r.set(t, MP4.FTYP.byteLength), r
                }
            };

            function toTimescaleFromBase(e, t, r = 1, i = !1) {
                let s = e * t * r;
                return i ? Math.round(s) : s
            }

            function toMsFromMpegTsClock(e, t = !1) {
                return toTimescaleFromBase(e, 1e3, 11111111111111112e-21, t)
            }
            MP4.types = void 0, MP4.HDLR_TYPES = void 0, MP4.STTS = void 0, MP4.STSC = void 0, MP4.STCO = void 0, MP4.STSZ = void 0, MP4.VMHD = void 0, MP4.SMHD = void 0, MP4.STSD = void 0, MP4.FTYP = void 0, MP4.DINF = void 0;
            let eo = null,
                eh = null;
            let MP4Remuxer = class MP4Remuxer {
                constructor(e, t, r, i = "") {
                    if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.observer = e, this.config = t, this.typeSupported = r, this.ISGenerated = !1, null === eo) {
                        let e = navigator.userAgent || "",
                            t = e.match(/Chrome\/(\d+)/i);
                        eo = t ? parseInt(t[1]) : 0
                    }
                    if (null === eh) {
                        let e = navigator.userAgent.match(/Safari\/(\d+)/i);
                        eh = e ? parseInt(e[1]) : 0
                    }
                }
                destroy() {}
                resetTimeStamp(e) {
                    L.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = e
                }
                resetNextTimestamp() {
                    L.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1
                }
                resetInitSegment() {
                    L.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1
                }
                getVideoStartPts(e) {
                    let t = !1,
                        r = e.reduce((e, r) => {
                            let i = r.pts - e;
                            return i < -4294967296 ? (t = !0, normalizePts(e, r.pts)) : i > 0 ? e : r.pts
                        }, e[0].pts);
                    return t && L.debug("PTS rollover detected"), r
                }
                remux(e, t, r, i, s, a, n, l) {
                    let o, h, d, u, c, f;
                    let g = s,
                        m = s,
                        p = e.pid > -1,
                        T = t.pid > -1,
                        E = t.samples.length,
                        y = e.samples.length > 0,
                        v = n && E > 0 || E > 1,
                        S = (!p || y) && (!T || v) || this.ISGenerated || n;
                    if (S) {
                        let r;
                        this.ISGenerated || (d = this.generateIS(e, t, s, a));
                        let i = this.isVideoContiguous,
                            n = -1;
                        if (v && (n = function(e) {
                                for (let t = 0; t < e.length; t++)
                                    if (e[t].key) return t;
                                return -1
                            }(t.samples), !i && this.config.forceKeyFrameOnDiscontinuity)) {
                            if (f = !0, n > 0) {
                                L.warn(`[mp4-remuxer]: Dropped ${n} out of ${E} video samples due to a missing keyframe`);
                                let e = this.getVideoStartPts(t.samples);
                                t.samples = t.samples.slice(n), t.dropped += n, m += (t.samples[0].pts - e) / t.inputTimeScale, r = m
                            } else -1 === n && (L.warn(`[mp4-remuxer]: No keyframe found out of ${E} video samples`), f = !1)
                        }
                        if (this.ISGenerated) {
                            if (y && v) {
                                let r = this.getVideoStartPts(t.samples),
                                    i = normalizePts(e.samples[0].pts, r) - r,
                                    s = i / t.inputTimeScale;
                                g += Math.max(0, s), m += Math.max(0, -s)
                            }
                            if (y) {
                                if (e.samplerate || (L.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), d = this.generateIS(e, t, s, a)), h = this.remuxAudio(e, g, this.isAudioContiguous, a, T || v || l === V.AUDIO ? m : void 0), v) {
                                    let r = h ? h.endPTS - h.startPTS : 0;
                                    t.inputTimeScale || (L.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), d = this.generateIS(e, t, s, a)), o = this.remuxVideo(t, m, i, r)
                                }
                            } else v && (o = this.remuxVideo(t, m, i, 0));
                            o && (o.firstKeyFrame = n, o.independent = -1 !== n, o.firstKeyFramePTS = r)
                        }
                    }
                    return this.ISGenerated && this._initPTS && this._initDTS && (r.samples.length && (c = flushTextTrackMetadataCueSamples(r, s, this._initPTS, this._initDTS)), i.samples.length && (u = flushTextTrackUserdataCueSamples(i, s, this._initPTS))), {
                        audio: h,
                        video: o,
                        initSegment: d,
                        independent: f,
                        text: u,
                        id3: c
                    }
                }
                generateIS(e, t, r, i) {
                    let s, a, n;
                    let l = e.samples,
                        o = t.samples,
                        h = this.typeSupported,
                        d = {},
                        u = this._initPTS,
                        c = !u || i,
                        f = "audio/mp4";
                    if (c && (s = a = 1 / 0), e.config && l.length && (e.timescale = e.samplerate, "mp3" === e.segmentCodec && (h.mpeg ? (f = "audio/mpeg", e.codec = "") : h.mp3 && (e.codec = "mp3")), d.audio = {
                            id: "audio",
                            container: f,
                            codec: e.codec,
                            initSegment: "mp3" === e.segmentCodec && h.mpeg ? new Uint8Array(0) : MP4.initSegment([e]),
                            metadata: {
                                channelCount: e.channelCount
                            }
                        }, c && (n = e.inputTimeScale, u && n === u.timescale ? c = !1 : s = a = l[0].pts - Math.round(n * r))), t.sps && t.pps && o.length && (t.timescale = t.inputTimeScale, d.video = {
                            id: "main",
                            container: "video/mp4",
                            codec: t.codec,
                            initSegment: MP4.initSegment([t]),
                            metadata: {
                                width: t.width,
                                height: t.height
                            }
                        }, c)) {
                        if (n = t.inputTimeScale, u && n === u.timescale) c = !1;
                        else {
                            let e = this.getVideoStartPts(o),
                                t = Math.round(n * r);
                            a = Math.min(a, normalizePts(o[0].dts, e) - t), s = Math.min(s, e - t)
                        }
                    }
                    if (Object.keys(d).length) return this.ISGenerated = !0, c ? (this._initPTS = {
                        baseTime: s,
                        timescale: n
                    }, this._initDTS = {
                        baseTime: a,
                        timescale: n
                    }) : s = n = void 0, {
                        tracks: d,
                        initPTS: s,
                        timescale: n
                    }
                }
                remuxVideo(e, t, r, i) {
                    let s, a, n;
                    let l = e.inputTimeScale,
                        o = e.samples,
                        h = [],
                        d = o.length,
                        u = this._initPTS,
                        c = this.nextAvcDts,
                        f = 8,
                        g = this.videoSampleDuration,
                        m = Number.POSITIVE_INFINITY,
                        p = Number.NEGATIVE_INFINITY,
                        T = !1;
                    if (!r || null === c) {
                        let e = o[0].pts - normalizePts(o[0].dts, o[0].pts);
                        c = t * l - e
                    }
                    let S = u.baseTime * l / u.timescale;
                    for (let e = 0; e < d; e++) {
                        let t = o[e];
                        t.pts = normalizePts(t.pts - S, c), t.dts = normalizePts(t.dts - S, c), t.dts < o[e > 0 ? e - 1 : e].dts && (T = !0)
                    }
                    T && o.sort(function(e, t) {
                        let r = e.dts - t.dts,
                            i = e.pts - t.pts;
                        return r || i
                    }), s = o[0].dts, a = o[o.length - 1].dts;
                    let A = a - s,
                        R = A ? Math.round(A / (d - 1)) : g || e.inputTimeScale / 30;
                    if (r) {
                        let e = s - c,
                            t = e > R,
                            r = e < -1;
                        if ((t || r) && (t ? L.warn(`AVC: ${toMsFromMpegTsClock(e,!0)} ms (${e}dts) hole between fragments detected, filling it`) : L.warn(`AVC: ${toMsFromMpegTsClock(-e,!0)} ms (${e}dts) overlapping between fragments detected`), !r || c >= o[0].pts)) {
                            s = c;
                            let t = o[0].pts - e;
                            o[0].dts = s, o[0].pts = t, L.log(`Video: First PTS/DTS adjusted: ${toMsFromMpegTsClock(t,!0)}/${toMsFromMpegTsClock(s,!0)}, delta: ${toMsFromMpegTsClock(e,!0)} ms`)
                        }
                    }
                    s = Math.max(0, s);
                    let I = 0,
                        D = 0;
                    for (let e = 0; e < d; e++) {
                        let t = o[e],
                            r = t.units,
                            i = r.length,
                            a = 0;
                        for (let e = 0; e < i; e++) a += r[e].data.length;
                        D += a, I += i, t.length = a, t.dts = Math.max(t.dts, s), m = Math.min(t.pts, m), p = Math.max(t.pts, p)
                    }
                    a = o[d - 1].dts;
                    let b = D + 4 * I + 8;
                    try {
                        n = new Uint8Array(b)
                    } catch (e) {
                        this.observer.emit(E.ERROR, E.ERROR, {
                            type: y.MUX_ERROR,
                            details: v.REMUX_ALLOC_ERROR,
                            fatal: !1,
                            error: e,
                            bytes: b,
                            reason: `fail allocating video mdat ${b}`
                        });
                        return
                    }
                    let C = new DataView(n.buffer);
                    C.setUint32(0, b), n.set(MP4.types.mdat, 4);
                    let k = !1,
                        P = Number.POSITIVE_INFINITY,
                        _ = Number.POSITIVE_INFINITY,
                        M = Number.NEGATIVE_INFINITY,
                        w = Number.NEGATIVE_INFINITY;
                    for (let e = 0; e < d; e++) {
                        let t;
                        let r = o[e],
                            s = r.units,
                            a = 0;
                        for (let e = 0, t = s.length; e < t; e++) {
                            let t = s[e],
                                r = t.data,
                                i = t.data.byteLength;
                            C.setUint32(f, i), f += 4, n.set(r, f), f += i, a += 4 + i
                        }
                        if (e < d - 1) g = o[e + 1].dts - r.dts, t = o[e + 1].pts - r.pts;
                        else {
                            let s = this.config,
                                a = e > 0 ? r.dts - o[e - 1].dts : R;
                            if (t = e > 0 ? r.pts - o[e - 1].pts : R, s.stretchShortVideoTrack && null !== this.nextAudioPts) {
                                let e = Math.floor(s.maxBufferHole * l),
                                    t = (i ? m + i * l : this.nextAudioPts) - r.pts;
                                t > e ? ((g = t - a) < 0 ? g = a : k = !0, L.log(`[mp4-remuxer]: It is approximately ${t/90} ms to the next segment; using duration ${g/90} ms for the last video frame.`)) : g = a
                            } else g = a
                        }
                        let u = Math.round(r.pts - r.dts);
                        P = Math.min(P, g), M = Math.max(M, g), _ = Math.min(_, t), w = Math.max(w, t), h.push(new Mp4Sample(r.key, g, a, u))
                    }
                    if (h.length) {
                        if (eo) {
                            if (eo < 70) {
                                let e = h[0].flags;
                                e.dependsOn = 2, e.isNonSync = 0
                            }
                        } else if (eh && w - _ < M - P && R / M < .025 && 0 === h[0].cts) {
                            L.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
                            let e = s;
                            for (let t = 0, r = h.length; t < r; t++) {
                                let i = e + h[t].duration,
                                    s = e + h[t].cts;
                                if (t < r - 1) {
                                    let e = i + h[t + 1].cts;
                                    h[t].duration = e - s
                                } else h[t].duration = t ? h[t - 1].duration : R;
                                h[t].cts = 0, e = i
                            }
                        }
                    }
                    g = k || !g ? R : g, this.nextAvcDts = c = a + g, this.videoSampleDuration = g, this.isVideoContiguous = !0;
                    let x = MP4.moof(e.sequenceNumber++, s, _extends({}, e, {
                            samples: h
                        })),
                        F = {
                            data1: x,
                            data2: n,
                            startPTS: m / l,
                            endPTS: (p + g) / l,
                            startDTS: s / l,
                            endDTS: c / l,
                            type: "video",
                            hasAudio: !1,
                            hasVideo: !0,
                            nb: h.length,
                            dropped: e.dropped
                        };
                    return e.samples = [], e.dropped = 0, F
                }
                remuxAudio(e, t, r, i, s) {
                    let a;
                    let n = e.inputTimeScale,
                        l = e.samplerate ? e.samplerate : n,
                        o = n / l,
                        h = "aac" === e.segmentCodec ? 1024 : 1152,
                        d = h * o,
                        u = this._initPTS,
                        c = "mp3" === e.segmentCodec && this.typeSupported.mpeg,
                        f = [],
                        g = void 0 !== s,
                        m = e.samples,
                        p = c ? 0 : 8,
                        T = this.nextAudioPts || -1,
                        S = t * n,
                        A = u.baseTime * n / u.timescale;
                    if (this.isAudioContiguous = r = r || m.length && T > 0 && (i && 9e3 > Math.abs(S - T) || Math.abs(normalizePts(m[0].pts - A, S) - T) < 20 * d), m.forEach(function(e) {
                            e.pts = normalizePts(e.pts - A, S)
                        }), !r || T < 0) {
                        if (!(m = m.filter(e => e.pts >= 0)).length) return;
                        T = 0 === s ? 0 : i && !g ? Math.max(0, S) : m[0].pts
                    }
                    if ("aac" === e.segmentCodec) {
                        let t = this.config.maxAudioFramesDrift;
                        for (let r = 0, i = T; r < m.length; r++) {
                            let s = m[r],
                                a = s.pts,
                                l = a - i,
                                o = Math.abs(1e3 * l / n);
                            if (l <= -t * d && g) 0 === r && (L.warn(`Audio frame @ ${(a/n).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3*l/n)} ms.`), this.nextAudioPts = T = i = a);
                            else if (l >= t * d && o < 1e4 && g) {
                                let t = Math.round(l / d);
                                (i = a - t * d) < 0 && (t--, i += d), 0 === r && (this.nextAudioPts = T = i), L.warn(`[mp4-remuxer]: Injecting ${t} audio frame @ ${(i/n).toFixed(3)}s due to ${Math.round(1e3*l/n)} ms gap.`);
                                for (let a = 0; a < t; a++) {
                                    let t = Math.max(i, 0),
                                        a = AAC.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
                                    a || (L.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), a = s.unit.subarray()), m.splice(r, 0, {
                                        unit: a,
                                        pts: t
                                    }), i += d, r++
                                }
                            }
                            s.pts = i, i += d
                        }
                    }
                    let R = null,
                        I = null,
                        D = 0,
                        b = m.length;
                    for (; b--;) D += m[b].unit.byteLength;
                    for (let t = 0, i = m.length; t < i; t++) {
                        let i = m[t],
                            s = i.unit,
                            n = i.pts;
                        if (null !== I) {
                            let e = f[t - 1];
                            e.duration = Math.round((n - I) / o)
                        } else {
                            if (r && "aac" === e.segmentCodec && (n = T), R = n, !(D > 0)) return;
                            D += p;
                            try {
                                a = new Uint8Array(D)
                            } catch (e) {
                                this.observer.emit(E.ERROR, E.ERROR, {
                                    type: y.MUX_ERROR,
                                    details: v.REMUX_ALLOC_ERROR,
                                    fatal: !1,
                                    error: e,
                                    bytes: D,
                                    reason: `fail allocating audio mdat ${D}`
                                });
                                return
                            }
                            if (!c) {
                                let e = new DataView(a.buffer);
                                e.setUint32(0, D), a.set(MP4.types.mdat, 4)
                            }
                        }
                        a.set(s, p);
                        let l = s.byteLength;
                        p += l, f.push(new Mp4Sample(!0, h, l, 0)), I = n
                    }
                    let C = f.length;
                    if (!C) return;
                    let k = f[f.length - 1];
                    this.nextAudioPts = T = I + o * k.duration;
                    let P = c ? new Uint8Array(0) : MP4.moof(e.sequenceNumber++, R / o, _extends({}, e, {
                        samples: f
                    }));
                    e.samples = [];
                    let _ = R / n,
                        M = T / n,
                        w = {
                            data1: P,
                            data2: a,
                            startPTS: _,
                            endPTS: M,
                            startDTS: _,
                            endDTS: M,
                            type: "audio",
                            hasAudio: !0,
                            hasVideo: !1,
                            nb: C
                        };
                    return this.isAudioContiguous = !0, w
                }
                remuxEmptyAudio(e, t, r, i) {
                    let s = e.inputTimeScale,
                        a = e.samplerate ? e.samplerate : s,
                        n = this.nextAudioPts,
                        l = this._initDTS,
                        o = 9e4 * l.baseTime / l.timescale,
                        h = (null !== n ? n : i.startDTS * s) + o,
                        d = i.endDTS * s + o,
                        u = s / a * 1024,
                        c = Math.ceil((d - h) / u),
                        f = AAC.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
                    if (L.warn("[mp4-remuxer]: remux empty Audio"), !f) {
                        L.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
                        return
                    }
                    let g = [];
                    for (let e = 0; e < c; e++) {
                        let t = h + e * u;
                        g.push({
                            unit: f,
                            pts: t,
                            dts: t
                        })
                    }
                    return e.samples = g, this.remuxAudio(e, t, r, !1)
                }
            };

            function normalizePts(e, t) {
                let r;
                if (null === t) return e;
                for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += r;
                return e
            }

            function flushTextTrackMetadataCueSamples(e, t, r, i) {
                let s = e.samples.length;
                if (!s) return;
                let a = e.inputTimeScale;
                for (let n = 0; n < s; n++) {
                    let s = e.samples[n];
                    s.pts = normalizePts(s.pts - r.baseTime * a / r.timescale, t * a) / a, s.dts = normalizePts(s.dts - i.baseTime * a / i.timescale, t * a) / a
                }
                let n = e.samples;
                return e.samples = [], {
                    samples: n
                }
            }

            function flushTextTrackUserdataCueSamples(e, t, r) {
                let i = e.samples.length;
                if (!i) return;
                let s = e.inputTimeScale;
                for (let a = 0; a < i; a++) {
                    let i = e.samples[a];
                    i.pts = normalizePts(i.pts - r.baseTime * s / r.timescale, t * s) / s
                }
                e.samples.sort((e, t) => e.pts - t.pts);
                let a = e.samples;
                return e.samples = [], {
                    samples: a
                }
            }
            let Mp4Sample = class Mp4Sample {
                constructor(e, t, r, i) {
                    this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = t, this.size = r, this.cts = i, this.flags = new Mp4SampleFlags(e)
                }
            };
            let Mp4SampleFlags = class Mp4SampleFlags {
                constructor(e) {
                    this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = e ? 2 : 1, this.isNonSync = e ? 0 : 1
                }
            };

            function getParsedTrackCodec(e, t) {
                let r = null == e ? void 0 : e.codec;
                return r && r.length > 4 ? r : "hvc1" === r || "hev1" === r ? "hvc1.1.6.L120.90" : "av01" === r ? "av01.0.04M.08" : "avc1" === r || t === D.VIDEO ? "avc1.42e01e" : "mp4a.40.5"
            }
            try {
                a = self.performance.now.bind(self.performance)
            } catch (e) {
                L.debug("Unable to use Performance API on this environment"), a = "undefined" != typeof self && self.Date.now
            }
            let ed = [{
                demux: class {
                    constructor(e, t) {
                        this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = t
                    }
                    resetTimeStamp() {}
                    resetInitSegment(e, t, r, i) {
                        let s = this.videoTrack = dummyTrack("video", 1),
                            a = this.audioTrack = dummyTrack("audio", 1),
                            n = this.txtTrack = dummyTrack("text", 1);
                        if (this.id3Track = dummyTrack("id3", 1), this.timeOffset = 0, !(null != e && e.byteLength)) return;
                        let l = parseInitSegment(e);
                        if (l.video) {
                            let {
                                id: e,
                                timescale: t,
                                codec: r
                            } = l.video;
                            s.id = e, s.timescale = n.timescale = t, s.codec = r
                        }
                        if (l.audio) {
                            let {
                                id: e,
                                timescale: t,
                                codec: r
                            } = l.audio;
                            a.id = e, a.timescale = t, a.codec = r
                        }
                        n.id = 4, s.sampleDuration = 0, s.duration = a.duration = i
                    }
                    resetContiguity() {
                        this.remainderData = null
                    }
                    static probe(e) {
                        return findBox(e = e.length > 16384 ? e.subarray(0, 16384) : e, ["moof"]).length > 0
                    }
                    demux(e, t) {
                        this.timeOffset = t;
                        let r = e,
                            i = this.videoTrack,
                            s = this.txtTrack;
                        if (this.config.progressive) {
                            this.remainderData && (r = appendUint8Array(this.remainderData, e));
                            let t = function(e) {
                                let t = {
                                        valid: null,
                                        remainder: null
                                    },
                                    r = findBox(e, ["moof"]);
                                if (!r) return t;
                                if (r.length < 2) return t.remainder = e, t;
                                let i = r[r.length - 1];
                                return t.valid = sliceUint8(e, 0, i.byteOffset - 8), t.remainder = sliceUint8(e, i.byteOffset - 8), t
                            }(r);
                            this.remainderData = t.remainder, i.samples = t.valid || new Uint8Array
                        } else i.samples = r;
                        let a = this.extractID3Track(i, t);
                        return s.samples = parseSamples(t, i), {
                            videoTrack: i,
                            audioTrack: this.audioTrack,
                            id3Track: a,
                            textTrack: this.txtTrack
                        }
                    }
                    flush() {
                        let e = this.timeOffset,
                            t = this.videoTrack,
                            r = this.txtTrack;
                        t.samples = this.remainderData || new Uint8Array, this.remainderData = null;
                        let i = this.extractID3Track(t, this.timeOffset);
                        return r.samples = parseSamples(e, t), {
                            videoTrack: t,
                            audioTrack: dummyTrack(),
                            id3Track: i,
                            textTrack: dummyTrack()
                        }
                    }
                    extractID3Track(e, t) {
                        let r = this.id3Track;
                        if (e.samples.length) {
                            let i = findBox(e.samples, ["emsg"]);
                            i && i.forEach(e => {
                                let i = function(e) {
                                    let t = e[0],
                                        r = "",
                                        i = "",
                                        s = 0,
                                        a = 0,
                                        n = 0,
                                        l = 0,
                                        o = 0,
                                        h = 0;
                                    if (0 === t) {
                                        for (;
                                            "\x00" !== bin2str(e.subarray(h, h + 1));) r += bin2str(e.subarray(h, h + 1)), h += 1;
                                        for (r += bin2str(e.subarray(h, h + 1)), h += 1;
                                            "\x00" !== bin2str(e.subarray(h, h + 1));) i += bin2str(e.subarray(h, h + 1)), h += 1;
                                        i += bin2str(e.subarray(h, h + 1)), h += 1, s = readUint32(e, 12), a = readUint32(e, 16), l = readUint32(e, 20), o = readUint32(e, 24), h = 28
                                    } else if (1 === t) {
                                        h += 4, s = readUint32(e, h), h += 4;
                                        let t = readUint32(e, h);
                                        h += 4;
                                        let a = readUint32(e, h);
                                        for (h += 4, Number.isSafeInteger(n = 4294967296 * t + a) || (n = Number.MAX_SAFE_INTEGER, L.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), l = readUint32(e, h), h += 4, o = readUint32(e, h), h += 4;
                                            "\x00" !== bin2str(e.subarray(h, h + 1));) r += bin2str(e.subarray(h, h + 1)), h += 1;
                                        for (r += bin2str(e.subarray(h, h + 1)), h += 1;
                                            "\x00" !== bin2str(e.subarray(h, h + 1));) i += bin2str(e.subarray(h, h + 1)), h += 1;
                                        i += bin2str(e.subarray(h, h + 1)), h += 1
                                    }
                                    let d = e.subarray(h, e.byteLength);
                                    return {
                                        schemeIdUri: r,
                                        value: i,
                                        timeScale: s,
                                        presentationTime: n,
                                        presentationTimeDelta: a,
                                        eventDuration: l,
                                        id: o,
                                        payload: d
                                    }
                                }(e);
                                if (er.test(i.schemeIdUri)) {
                                    let e = T(i.presentationTime) ? i.presentationTime / i.timeScale : t + i.presentationTimeDelta / i.timeScale,
                                        s = 4294967295 === i.eventDuration ? Number.POSITIVE_INFINITY : i.eventDuration / i.timeScale;
                                    s <= .001 && (s = Number.POSITIVE_INFINITY);
                                    let a = i.payload;
                                    r.samples.push({
                                        data: a,
                                        len: a.byteLength,
                                        dts: e,
                                        pts: e,
                                        type: W.emsg,
                                        duration: s
                                    })
                                }
                            })
                        }
                        return r
                    }
                    demuxSampleAes(e, t, r) {
                        return Promise.reject(Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
                    }
                    destroy() {}
                },
                remux: class {
                    constructor() {
                        this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null
                    }
                    destroy() {}
                    resetTimeStamp(e) {
                        this.initPTS = e, this.lastEndTime = null
                    }
                    resetNextTimestamp() {
                        this.lastEndTime = null
                    }
                    resetInitSegment(e, t, r, i) {
                        this.audioCodec = t, this.videoCodec = r, this.generateInitSegment(function(e, t) {
                            if (!e || !t) return e;
                            let r = t.keyId;
                            if (r && t.isCommonEncryption) {
                                let t = findBox(e, ["moov", "trak"]);
                                t.forEach(e => {
                                    let t = findBox(e, ["mdia", "minf", "stbl", "stsd"])[0],
                                        i = t.subarray(8),
                                        s = findBox(i, ["enca"]),
                                        a = s.length > 0;
                                    a || (s = findBox(i, ["encv"])), s.forEach(e => {
                                        let t = a ? e.subarray(28) : e.subarray(78),
                                            i = findBox(t, ["sinf"]);
                                        i.forEach(e => {
                                            let t = parseSinf(e);
                                            if (t) {
                                                let e = t.subarray(8, 24);
                                                e.some(e => 0 !== e) || (L.log(`[eme] Patching keyId in 'enc${a?"a":"v"}>sinf>>tenc' box: ${_.hexDump(e)} -> ${_.hexDump(r)}`), t.set(r, 8))
                                            }
                                        })
                                    })
                                })
                            }
                            return e
                        }(e, i)), this.emitInitSegment = !0
                    }
                    generateInitSegment(e) {
                        let {
                            audioCodec: t,
                            videoCodec: r
                        } = this;
                        if (!(null != e && e.byteLength)) {
                            this.initTracks = void 0, this.initData = void 0;
                            return
                        }
                        let i = this.initData = parseInitSegment(e);
                        t || (t = getParsedTrackCodec(i.audio, D.AUDIO)), r || (r = getParsedTrackCodec(i.video, D.VIDEO));
                        let s = {};
                        i.audio && i.video ? s.audiovideo = {
                            container: "video/mp4",
                            codec: t + "," + r,
                            initSegment: e,
                            id: "main"
                        } : i.audio ? s.audio = {
                            container: "audio/mp4",
                            codec: t,
                            initSegment: e,
                            id: "audio"
                        } : i.video ? s.video = {
                            container: "video/mp4",
                            codec: r,
                            initSegment: e,
                            id: "main"
                        } : L.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = s
                    }
                    remux(e, t, r, i, s, a) {
                        var n, l, o;
                        let {
                            initPTS: h,
                            lastEndTime: d
                        } = this, u = {
                            audio: void 0,
                            video: void 0,
                            text: i,
                            id3: r,
                            initSegment: void 0
                        };
                        T(d) || (d = this.lastEndTime = s || 0);
                        let c = t.samples;
                        if (!(null != c && c.length)) return u;
                        let f = {
                                initPTS: void 0,
                                timescale: 1
                            },
                            g = this.initData;
                        if (null != (n = g) && n.length || (this.generateInitSegment(c), g = this.initData), !(null != (l = g) && l.length)) return L.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), u;
                        this.emitInitSegment && (f.tracks = this.initTracks, this.emitInitSegment = !1);
                        let m = function(e, t) {
                                let r = 0,
                                    i = 0,
                                    s = 0,
                                    a = findBox(e, ["moof", "traf"]);
                                for (let e = 0; e < a.length; e++) {
                                    let n = a[e],
                                        l = findBox(n, ["tfhd"])[0],
                                        o = readUint32(l, 4),
                                        h = t[o];
                                    if (!h) continue;
                                    let d = h.default,
                                        u = readUint32(l, 0) | (null == d ? void 0 : d.flags),
                                        c = null == d ? void 0 : d.duration;
                                    8 & u && (c = 2 & u ? readUint32(l, 12) : readUint32(l, 8));
                                    let f = h.timescale || 9e4,
                                        g = findBox(n, ["trun"]);
                                    for (let e = 0; e < g.length; e++) {
                                        if (!(r = function(e) {
                                                let t = readUint32(e, 0),
                                                    r = 8;
                                                1 & t && (r += 4), 4 & t && (r += 4);
                                                let i = 0,
                                                    s = readUint32(e, 4);
                                                for (let a = 0; a < s; a++) {
                                                    if (256 & t) {
                                                        let t = readUint32(e, r);
                                                        i += t, r += 4
                                                    }
                                                    512 & t && (r += 4), 1024 & t && (r += 4), 2048 & t && (r += 4)
                                                }
                                                return i
                                            }(g[e])) && c) {
                                            let t = readUint32(g[e], 4);
                                            r = c * t
                                        }
                                        h.type === D.VIDEO ? i += r / f : h.type === D.AUDIO && (s += r / f)
                                    }
                                }
                                if (0 === i && 0 === s) {
                                    let t = 0,
                                        r = findBox(e, ["sidx"]);
                                    for (let e = 0; e < r.length; e++) {
                                        let i = function(e) {
                                            let t = [],
                                                r = e[0],
                                                i = 8,
                                                s = readUint32(e, i);
                                            i += 4, 0 === r ? i += 8 : i += 16, i += 2;
                                            let a = e.length + 0,
                                                n = readUint16(e, i);
                                            i += 2;
                                            for (let r = 0; r < n; r++) {
                                                let r = i,
                                                    n = readUint32(e, r);
                                                r += 4;
                                                let l = 2147483647 & n,
                                                    o = (2147483648 & n) >>> 31;
                                                if (1 === o) return L.warn("SIDX has hierarchical references (not supported)"), null;
                                                let h = readUint32(e, r);
                                                r += 4, t.push({
                                                    referenceSize: l,
                                                    subsegmentDuration: h,
                                                    info: {
                                                        duration: h / s,
                                                        start: a,
                                                        end: a + l - 1
                                                    }
                                                }), a += l, r += 4, i = r
                                            }
                                            return {
                                                earliestPresentationTime: 0,
                                                timescale: s,
                                                version: r,
                                                referencesCount: n,
                                                references: t
                                            }
                                        }(r[e]);
                                        null != i && i.references && (t += i.references.reduce((e, t) => e + t.info.duration || 0, 0))
                                    }
                                    return t
                                }
                                return i || s
                            }(c, g),
                            p = (o = g, findBox(c, ["moof", "traf"]).reduce((e, t) => {
                                let r = findBox(t, ["tfdt"])[0],
                                    i = r[0],
                                    s = findBox(t, ["tfhd"]).reduce((e, t) => {
                                        let s = readUint32(t, 4),
                                            a = o[s];
                                        if (a) {
                                            let t = readUint32(r, 4);
                                            if (1 === i) {
                                                if (4294967295 === t) return L.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), e;
                                                t *= 4294967296, t += readUint32(r, 8)
                                            }
                                            let s = a.timescale || 9e4,
                                                n = t / s;
                                            if (isFinite(n) && (null === e || n < e)) return n
                                        }
                                        return e
                                    }, null);
                                return null !== s && isFinite(s) && (null === e || s < e) ? s : e
                            }, null)),
                            E = null === p ? s : p;
                        ((function(e, t, r, i) {
                            if (null === e) return !0;
                            let s = t - e.baseTime / e.timescale;
                            return Math.abs(s - r) > Math.max(i, 1)
                        })(h, E, s, m) || f.timescale !== h.timescale && a) && (f.initPTS = E - s, h && 1 === h.timescale && L.warn(`Adjusting initPTS by ${f.initPTS-h.baseTime}`), this.initPTS = h = {
                            baseTime: f.initPTS,
                            timescale: 1
                        });
                        let y = e ? E - h.baseTime / h.timescale : d,
                            v = y + m;
                        ! function(e, t, r) {
                            findBox(t, ["moof", "traf"]).forEach(t => {
                                findBox(t, ["tfhd"]).forEach(i => {
                                    let s = readUint32(i, 4),
                                        a = e[s];
                                    if (!a) return;
                                    let n = a.timescale || 9e4;
                                    findBox(t, ["tfdt"]).forEach(e => {
                                        let t = e[0],
                                            i = readUint32(e, 4);
                                        if (0 === t) i -= r * n, writeUint32(e, 4, i = Math.max(i, 0));
                                        else {
                                            i *= 4294967296, i += readUint32(e, 8), i -= r * n, i = Math.max(i, 0);
                                            let t = Math.floor(i / 4294967296),
                                                s = Math.floor(i % 4294967296);
                                            writeUint32(e, 4, t), writeUint32(e, 8, s)
                                        }
                                    })
                                })
                            })
                        }(g, c, h.baseTime / h.timescale), m > 0 ? this.lastEndTime = v : (L.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
                        let S = !!g.audio,
                            A = !!g.video,
                            R = "";
                        S && (R += "audio"), A && (R += "video");
                        let I = {
                            data1: c,
                            startPTS: y,
                            startDTS: y,
                            endPTS: v,
                            endDTS: v,
                            type: R,
                            hasAudio: S,
                            hasVideo: A,
                            nb: 1,
                            dropped: 0
                        };
                        return u.audio = "audio" === I.type ? I : void 0, u.video = "audio" !== I.type ? I : void 0, u.initSegment = f, u.id3 = flushTextTrackMetadataCueSamples(r, s, h, h), i.samples.length && (u.text = flushTextTrackUserdataCueSamples(i, s, h)), u
                    }
                }
            }, {
                demux: TSDemuxer,
                remux: MP4Remuxer
            }, {
                demux: class extends BaseAudioDemuxer {
                    constructor(e, t) {
                        super(), this.observer = void 0, this.config = void 0, this.observer = e, this.config = t
                    }
                    resetInitSegment(e, t, r, i) {
                        super.resetInitSegment(e, t, r, i), this._audioTrack = {
                            container: "audio/adts",
                            type: "audio",
                            id: 2,
                            pid: -1,
                            sequenceNumber: 0,
                            segmentCodec: "aac",
                            samples: [],
                            manifestCodec: t,
                            duration: i,
                            inputTimeScale: 9e4,
                            dropped: 0
                        }
                    }
                    static probe(e) {
                        if (!e) return !1;
                        let t = getID3Data(e, 0) || [],
                            r = t.length;
                        for (let t = e.length; r < t; r++)
                            if (function(e, t) {
                                    if (isHeader$1(e, t)) {
                                        let r = getHeaderLength(e, t);
                                        if (t + r >= e.length) return !1;
                                        let i = getFullFrameLength(e, t);
                                        if (i <= r) return !1;
                                        let s = t + i;
                                        return s === e.length || isHeader$1(e, s)
                                    }
                                    return !1
                                }(e, r)) return L.log("ADTS sync word found !"), !0;
                        return !1
                    }
                    canParse(e, t) {
                        return t + 5 < e.length && isHeaderPattern$1(e, t) && getFullFrameLength(e, t) <= e.length - t
                    }
                    appendFrame(e, t, r) {
                        initTrackConfig(e, this.observer, t, r, e.manifestCodec);
                        let i = appendFrame$1(e, t, r, this.basePTS, this.frameIndex);
                        if (i && 0 === i.missing) return i
                    }
                },
                remux: MP4Remuxer
            }, {
                demux: class extends BaseAudioDemuxer {
                    resetInitSegment(e, t, r, i) {
                        super.resetInitSegment(e, t, r, i), this._audioTrack = {
                            container: "audio/mpeg",
                            type: "audio",
                            id: 2,
                            pid: -1,
                            sequenceNumber: 0,
                            segmentCodec: "mp3",
                            samples: [],
                            manifestCodec: t,
                            duration: i,
                            inputTimeScale: 9e4,
                            dropped: 0
                        }
                    }
                    static probe(e) {
                        if (!e) return !1;
                        let t = getID3Data(e, 0) || [],
                            r = t.length;
                        for (let t = e.length; r < t; r++)
                            if (function(e, t) {
                                    if (t + 1 < e.length && isHeaderPattern(e, t)) {
                                        let r = parseHeader(e, t),
                                            i = 4;
                                        null != r && r.frameLength && (i = r.frameLength);
                                        let s = t + i;
                                        return s === e.length || isHeader(e, s)
                                    }
                                    return !1
                                }(e, r)) return L.log("MPEG Audio sync word found !"), !0;
                        return !1
                    }
                    canParse(e, t) {
                        return isHeaderPattern(e, t) && 4 <= e.length - t
                    }
                    appendFrame(e, t, r) {
                        if (null !== this.basePTS) return appendFrame(e, t, r, this.basePTS, this.frameIndex)
                    }
                },
                remux: MP4Remuxer
            }];
            let Transmuxer = class Transmuxer {
                constructor(e, t, r, i, s) {
                    this.async = !1, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = e, this.typeSupported = t, this.config = r, this.vendor = i, this.id = s
                }
                configure(e) {
                    this.transmuxConfig = e, this.decrypter && this.decrypter.reset()
                }
                push(e, t, r, i) {
                    let s;
                    let n = r.transmuxing;
                    n.executeStart = a();
                    let l = new Uint8Array(e),
                        {
                            currentTransmuxState: o,
                            transmuxConfig: h
                        } = this;
                    i && (this.currentTransmuxState = i);
                    let {
                        contiguous: d,
                        discontinuity: u,
                        trackSwitch: c,
                        accurateTimeOffset: f,
                        timeOffset: g,
                        initSegmentChange: m
                    } = i || o, {
                        audioCodec: p,
                        videoCodec: T,
                        defaultInitPts: S,
                        duration: A,
                        initSegmentData: R
                    } = h, I = (s = null, l.byteLength > 0 && null != t && null != t.key && null !== t.iv && null != t.method && (s = t), s);
                    if (I && "AES-128" === I.method) {
                        let e = this.getDecrypter();
                        if (!e.isSync()) return this.decryptionPromise = e.webCryptoDecrypt(l, I.key.buffer, I.iv.buffer).then(e => {
                            let t = this.push(e, null, r);
                            return this.decryptionPromise = null, t
                        }), this.decryptionPromise; {
                            let t = e.softwareDecrypt(l, I.key.buffer, I.iv.buffer),
                                i = r.part > -1;
                            if (i && (t = e.flush()), !t) return n.executeEnd = a(), emptyResult(r);
                            l = new Uint8Array(t)
                        }
                    }
                    let D = this.needsProbing(u, c);
                    if (D) {
                        let e = this.configureTransmuxer(l);
                        if (e) return L.warn(`[transmuxer] ${e.message}`), this.observer.emit(E.ERROR, E.ERROR, {
                            type: y.MEDIA_ERROR,
                            details: v.FRAG_PARSING_ERROR,
                            fatal: !1,
                            error: e,
                            reason: e.message
                        }), n.executeEnd = a(), emptyResult(r)
                    }(u || c || m || D) && this.resetInitSegment(R, p, T, A, t), (u || m || D) && this.resetInitialTimestamp(S), d || this.resetContiguity();
                    let b = this.transmux(l, I, g, f, r),
                        C = this.currentTransmuxState;
                    return C.contiguous = !0, C.discontinuity = !1, C.trackSwitch = !1, n.executeEnd = a(), b
                }
                flush(e) {
                    let t = e.transmuxing;
                    t.executeStart = a();
                    let {
                        decrypter: r,
                        currentTransmuxState: i,
                        decryptionPromise: s
                    } = this;
                    if (s) return s.then(() => this.flush(e));
                    let n = [],
                        {
                            timeOffset: l
                        } = i;
                    if (r) {
                        let t = r.flush();
                        t && n.push(this.push(t, null, e))
                    }
                    let {
                        demuxer: o,
                        remuxer: h
                    } = this;
                    if (!o || !h) return t.executeEnd = a(), [emptyResult(e)];
                    let d = o.flush(l);
                    return isPromise(d) ? d.then(t => (this.flushRemux(n, t, e), n)) : (this.flushRemux(n, d, e), n)
                }
                flushRemux(e, t, r) {
                    let {
                        audioTrack: i,
                        videoTrack: s,
                        id3Track: n,
                        textTrack: l
                    } = t, {
                        accurateTimeOffset: o,
                        timeOffset: h
                    } = this.currentTransmuxState;
                    L.log(`[transmuxer.ts]: Flushed fragment ${r.sn}${r.part>-1?" p: "+r.part:""} of level ${r.level}`);
                    let d = this.remuxer.remux(i, s, n, l, h, o, !0, this.id);
                    e.push({
                        remuxResult: d,
                        chunkMeta: r
                    }), r.transmuxing.executeEnd = a()
                }
                resetInitialTimestamp(e) {
                    let {
                        demuxer: t,
                        remuxer: r
                    } = this;
                    t && r && (t.resetTimeStamp(e), r.resetTimeStamp(e))
                }
                resetContiguity() {
                    let {
                        demuxer: e,
                        remuxer: t
                    } = this;
                    e && t && (e.resetContiguity(), t.resetNextTimestamp())
                }
                resetInitSegment(e, t, r, i, s) {
                    let {
                        demuxer: a,
                        remuxer: n
                    } = this;
                    a && n && (a.resetInitSegment(e, t, r, i), n.resetInitSegment(e, t, r, s))
                }
                destroy() {
                    this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0)
                }
                transmux(e, t, r, i, s) {
                    return t && "SAMPLE-AES" === t.method ? this.transmuxSampleAes(e, t, r, i, s) : this.transmuxUnencrypted(e, r, i, s)
                }
                transmuxUnencrypted(e, t, r, i) {
                    let {
                        audioTrack: s,
                        videoTrack: a,
                        id3Track: n,
                        textTrack: l
                    } = this.demuxer.demux(e, t, !1, !this.config.progressive), o = this.remuxer.remux(s, a, n, l, t, r, !1, this.id);
                    return {
                        remuxResult: o,
                        chunkMeta: i
                    }
                }
                transmuxSampleAes(e, t, r, i, s) {
                    return this.demuxer.demuxSampleAes(e, t, r).then(e => {
                        let t = this.remuxer.remux(e.audioTrack, e.videoTrack, e.id3Track, e.textTrack, r, i, !1, this.id);
                        return {
                            remuxResult: t,
                            chunkMeta: s
                        }
                    })
                }
                configureTransmuxer(e) {
                    let t;
                    let {
                        config: r,
                        observer: i,
                        typeSupported: s,
                        vendor: a
                    } = this;
                    for (let r = 0, i = ed.length; r < i; r++)
                        if (ed[r].demux.probe(e)) {
                            t = ed[r];
                            break
                        }
                    if (!t) return Error("Failed to find demuxer by probing fragment data");
                    let n = this.demuxer,
                        l = this.remuxer,
                        o = t.remux,
                        h = t.demux;
                    l && l instanceof o || (this.remuxer = new o(i, r, s, a)), n && n instanceof h || (this.demuxer = new h(i, r, s), this.probe = h.probe)
                }
                needsProbing(e, t) {
                    return !this.demuxer || !this.remuxer || e || t
                }
                getDecrypter() {
                    let e = this.decrypter;
                    return e || (e = this.decrypter = new Decrypter(this.config)), e
                }
            };
            let emptyResult = e => ({
                remuxResult: {},
                chunkMeta: e
            });

            function isPromise(e) {
                return "then" in e && e.then instanceof Function
            }
            let TransmuxConfig = class TransmuxConfig {
                constructor(e, t, r, i, s) {
                    this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = e, this.videoCodec = t, this.initSegmentData = r, this.duration = i, this.defaultInitPts = s || null
                }
            };
            let TransmuxState = class TransmuxState {
                constructor(e, t, r, i, s, a) {
                    this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = e, this.contiguous = t, this.accurateTimeOffset = r, this.trackSwitch = i, this.timeOffset = s, this.initSegmentChange = a
                }
            };
            var eu = {
                exports: {}
            };
            ! function(e) {
                var t = Object.prototype.hasOwnProperty,
                    r = "~";

                function Events() {}

                function EE(e, t, r) {
                    this.fn = e, this.context = t, this.once = r || !1
                }

                function addListener(e, t, i, s, a) {
                    if ("function" != typeof i) throw TypeError("The listener must be a function");
                    var n = new EE(i, s || e, a),
                        l = r ? r + t : t;
                    return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], n] : e._events[l].push(n) : (e._events[l] = n, e._eventsCount++), e
                }

                function clearEvent(e, t) {
                    0 == --e._eventsCount ? e._events = new Events : delete e._events[t]
                }

                function EventEmitter() {
                    this._events = new Events, this._eventsCount = 0
                }
                Object.create && (Events.prototype = Object.create(null), new Events().__proto__ || (r = !1)), EventEmitter.prototype.eventNames = function() {
                    var e, i, s = [];
                    if (0 === this._eventsCount) return s;
                    for (i in e = this._events) t.call(e, i) && s.push(r ? i.slice(1) : i);
                    return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(e)) : s
                }, EventEmitter.prototype.listeners = function(e) {
                    var t = r ? r + e : e,
                        i = this._events[t];
                    if (!i) return [];
                    if (i.fn) return [i.fn];
                    for (var s = 0, a = i.length, n = Array(a); s < a; s++) n[s] = i[s].fn;
                    return n
                }, EventEmitter.prototype.listenerCount = function(e) {
                    var t = r ? r + e : e,
                        i = this._events[t];
                    return i ? i.fn ? 1 : i.length : 0
                }, EventEmitter.prototype.emit = function(e, t, i, s, a, n) {
                    var l = r ? r + e : e;
                    if (!this._events[l]) return !1;
                    var o, h, d = this._events[l],
                        u = arguments.length;
                    if (d.fn) {
                        switch (d.once && this.removeListener(e, d.fn, void 0, !0), u) {
                            case 1:
                                return d.fn.call(d.context), !0;
                            case 2:
                                return d.fn.call(d.context, t), !0;
                            case 3:
                                return d.fn.call(d.context, t, i), !0;
                            case 4:
                                return d.fn.call(d.context, t, i, s), !0;
                            case 5:
                                return d.fn.call(d.context, t, i, s, a), !0;
                            case 6:
                                return d.fn.call(d.context, t, i, s, a, n), !0
                        }
                        for (h = 1, o = Array(u - 1); h < u; h++) o[h - 1] = arguments[h];
                        d.fn.apply(d.context, o)
                    } else {
                        var c, f = d.length;
                        for (h = 0; h < f; h++) switch (d[h].once && this.removeListener(e, d[h].fn, void 0, !0), u) {
                            case 1:
                                d[h].fn.call(d[h].context);
                                break;
                            case 2:
                                d[h].fn.call(d[h].context, t);
                                break;
                            case 3:
                                d[h].fn.call(d[h].context, t, i);
                                break;
                            case 4:
                                d[h].fn.call(d[h].context, t, i, s);
                                break;
                            default:
                                if (!o)
                                    for (c = 1, o = Array(u - 1); c < u; c++) o[c - 1] = arguments[c];
                                d[h].fn.apply(d[h].context, o)
                        }
                    }
                    return !0
                }, EventEmitter.prototype.on = function(e, t, r) {
                    return addListener(this, e, t, r, !1)
                }, EventEmitter.prototype.once = function(e, t, r) {
                    return addListener(this, e, t, r, !0)
                }, EventEmitter.prototype.removeListener = function(e, t, i, s) {
                    var a = r ? r + e : e;
                    if (!this._events[a]) return this;
                    if (!t) return clearEvent(this, a), this;
                    var n = this._events[a];
                    if (n.fn) n.fn !== t || s && !n.once || i && n.context !== i || clearEvent(this, a);
                    else {
                        for (var l = 0, o = [], h = n.length; l < h; l++)(n[l].fn !== t || s && !n[l].once || i && n[l].context !== i) && o.push(n[l]);
                        o.length ? this._events[a] = 1 === o.length ? o[0] : o : clearEvent(this, a)
                    }
                    return this
                }, EventEmitter.prototype.removeAllListeners = function(e) {
                    var t;
                    return e ? (t = r ? r + e : e, this._events[t] && clearEvent(this, t)) : (this._events = new Events, this._eventsCount = 0), this
                }, EventEmitter.prototype.off = EventEmitter.prototype.removeListener, EventEmitter.prototype.addListener = EventEmitter.prototype.on, EventEmitter.prefixed = r, EventEmitter.EventEmitter = EventEmitter, e.exports = EventEmitter
            }(eu);
            var ec = (g = eu.exports) && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
            let ef = getMediaSource() || {
                isTypeSupported: () => !1
            };
            let TransmuxerInterface = class TransmuxerInterface {
                constructor(e, t, r, i) {
                    this.error = null, this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
                    let s = e.config;
                    this.hls = e, this.id = t, this.useWorker = !!s.enableWorker, this.onTransmuxComplete = r, this.onFlush = i;
                    let forwardMessage = (e, t) => {
                        (t = t || {}).frag = this.frag, t.id = this.id, e === E.ERROR && (this.error = t.error), this.hls.trigger(e, t)
                    };
                    this.observer = new ec, this.observer.on(E.FRAG_DECRYPTED, forwardMessage), this.observer.on(E.ERROR, forwardMessage);
                    let a = {
                            mp4: ef.isTypeSupported("video/mp4"),
                            mpeg: ef.isTypeSupported("audio/mpeg"),
                            mp3: ef.isTypeSupported('audio/mp4; codecs="mp3"')
                        },
                        n = navigator.vendor;
                    if (this.useWorker && "undefined" != typeof Worker) {
                        let e = s.workerPath || "function" == typeof __HLS_WORKER_BUNDLE__;
                        if (e) {
                            try {
                                s.workerPath ? (L.log(`loading Web Worker ${s.workerPath} for "${t}"`), this.workerContext = function(e) {
                                    let t = new self.URL(e, self.location.href).href,
                                        r = new self.Worker(t);
                                    return {
                                        worker: r,
                                        scriptURL: t
                                    }
                                }(s.workerPath)) : (L.log(`injecting Web Worker for "${t}"`), this.workerContext = function() {
                                    let e = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], {
                                            type: "text/javascript"
                                        }),
                                        t = self.URL.createObjectURL(e),
                                        r = new self.Worker(t);
                                    return {
                                        worker: r,
                                        objectURL: t
                                    }
                                }()), this.onwmsg = e => this.onWorkerMessage(e);
                                let {
                                    worker: e
                                } = this.workerContext;
                                e.addEventListener("message", this.onwmsg), e.onerror = e => {
                                    let r = Error(`${e.message}  (${e.filename}:${e.lineno})`);
                                    s.enableWorker = !1, L.warn(`Error in "${t}" Web Worker, fallback to inline`), this.hls.trigger(E.ERROR, {
                                        type: y.OTHER_ERROR,
                                        details: v.INTERNAL_EXCEPTION,
                                        fatal: !1,
                                        event: "demuxerWorker",
                                        error: r
                                    })
                                }, e.postMessage({
                                    cmd: "init",
                                    typeSupported: a,
                                    vendor: n,
                                    id: t,
                                    config: JSON.stringify(s)
                                })
                            } catch (e) {
                                L.warn(`Error setting up "${t}" Web Worker, fallback to inline`, e), this.resetWorker(), this.error = null, this.transmuxer = new Transmuxer(this.observer, a, s, n, t)
                            }
                            return
                        }
                    }
                    this.transmuxer = new Transmuxer(this.observer, a, s, n, t)
                }
                resetWorker() {
                    if (this.workerContext) {
                        let {
                            worker: e,
                            objectURL: t
                        } = this.workerContext;
                        t && self.URL.revokeObjectURL(t), e.removeEventListener("message", this.onwmsg), e.onerror = null, e.terminate(), this.workerContext = null
                    }
                }
                destroy() {
                    if (this.workerContext) this.resetWorker(), this.onwmsg = void 0;
                    else {
                        let e = this.transmuxer;
                        e && (e.destroy(), this.transmuxer = null)
                    }
                    let e = this.observer;
                    e && e.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null
                }
                push(e, t, r, i, s, a, n, l, o, h) {
                    var d, u;
                    o.transmuxing.start = self.performance.now();
                    let {
                        transmuxer: c
                    } = this, f = a ? a.start : s.start, g = s.decryptdata, m = this.frag, p = !(m && s.cc === m.cc), T = !(m && o.level === m.level), E = m ? o.sn - m.sn : -1, y = this.part ? o.part - this.part.index : -1, v = 0 === E && o.id > 1 && o.id === (null == m ? void 0 : m.stats.chunkCount), S = !T && (1 === E || 0 === E && (1 === y || v && y <= 0)), A = self.performance.now();
                    (T || E || 0 === s.stats.parsing.start) && (s.stats.parsing.start = A), a && (y || !S) && (a.stats.parsing.start = A);
                    let R = !(m && (null == (d = s.initSegment) ? void 0 : d.url) === (null == (u = m.initSegment) ? void 0 : u.url)),
                        I = new TransmuxState(p, S, l, T, f, R);
                    if (!S || p || R) {
                        L.log(`[transmuxer-interface, ${s.type}]: Starting new transmux session for sn: ${o.sn} p: ${o.part} level: ${o.level} id: ${o.id}
        discontinuity: ${p}
        trackSwitch: ${T}
        contiguous: ${S}
        accurateTimeOffset: ${l}
        timeOffset: ${f}
        initSegmentChange: ${R}`);
                        let e = new TransmuxConfig(r, i, t, n, h);
                        this.configureTransmuxer(e)
                    }
                    if (this.frag = s, this.part = a, this.workerContext) this.workerContext.worker.postMessage({
                        cmd: "demux",
                        data: e,
                        decryptdata: g,
                        chunkMeta: o,
                        state: I
                    }, e instanceof ArrayBuffer ? [e] : []);
                    else if (c) {
                        let t = c.push(e, g, o, I);
                        isPromise(t) ? (c.async = !0, t.then(e => {
                            this.handleTransmuxComplete(e)
                        }).catch(e => {
                            this.transmuxerError(e, o, "transmuxer-interface push error")
                        })) : (c.async = !1, this.handleTransmuxComplete(t))
                    }
                }
                flush(e) {
                    e.transmuxing.start = self.performance.now();
                    let {
                        transmuxer: t
                    } = this;
                    if (this.workerContext) this.workerContext.worker.postMessage({
                        cmd: "flush",
                        chunkMeta: e
                    });
                    else if (t) {
                        let r = t.flush(e),
                            i = isPromise(r);
                        i || t.async ? (isPromise(r) || (r = Promise.resolve(r)), r.then(t => {
                            this.handleFlushResult(t, e)
                        }).catch(t => {
                            this.transmuxerError(t, e, "transmuxer-interface flush error")
                        })) : this.handleFlushResult(r, e)
                    }
                }
                transmuxerError(e, t, r) {
                    this.hls && (this.error = e, this.hls.trigger(E.ERROR, {
                        type: y.MEDIA_ERROR,
                        details: v.FRAG_PARSING_ERROR,
                        chunkMeta: t,
                        fatal: !1,
                        error: e,
                        err: e,
                        reason: r
                    }))
                }
                handleFlushResult(e, t) {
                    e.forEach(e => {
                        this.handleTransmuxComplete(e)
                    }), this.onFlush(t)
                }
                onWorkerMessage(e) {
                    let t = e.data,
                        r = this.hls;
                    switch (t.event) {
                        case "init":
                            {
                                var i;
                                let e = null == (i = this.workerContext) ? void 0 : i.objectURL;e && self.URL.revokeObjectURL(e);
                                break
                            }
                        case "transmuxComplete":
                            this.handleTransmuxComplete(t.data);
                            break;
                        case "flush":
                            this.onFlush(t.data);
                            break;
                        case "workerLog":
                            L[t.data.logType] && L[t.data.logType](t.data.message);
                            break;
                        default:
                            t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, r.trigger(t.event, t.data)
                    }
                }
                configureTransmuxer(e) {
                    let {
                        transmuxer: t
                    } = this;
                    this.workerContext ? this.workerContext.worker.postMessage({
                        cmd: "configure",
                        config: e
                    }) : t && t.configure(e)
                }
                handleTransmuxComplete(e) {
                    e.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e)
                }
            };
            let GapController = class GapController {
                constructor(e, t, r, i) {
                    this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = e, this.media = t, this.fragmentTracker = r, this.hls = i
                }
                destroy() {
                    this.media = null, this.hls = this.fragmentTracker = null
                }
                poll(e, t) {
                    let {
                        config: r,
                        media: i,
                        stalled: s
                    } = this;
                    if (null === i) return;
                    let {
                        currentTime: a,
                        seeking: n
                    } = i, l = this.seeking && !n, o = !this.seeking && n;
                    if (this.seeking = n, a !== e) {
                        if (this.moved = !0, null !== s) {
                            if (this.stallReported) {
                                let e = self.performance.now() - s;
                                L.warn(`playback not stuck anymore @${a}, after ${Math.round(e)}ms`), this.stallReported = !1
                            }
                            this.stalled = null, this.nudgeRetry = 0
                        }
                        return
                    }
                    if (o || l) {
                        this.stalled = null;
                        return
                    }
                    if (i.paused && !n || i.ended || 0 === i.playbackRate || !BufferHelper.getBuffered(i).length) return;
                    let h = BufferHelper.bufferInfo(i, a, 0),
                        d = h.len > 0,
                        u = h.nextStart || 0;
                    if (!d && !u) return;
                    if (n) {
                        let e = h.len > 2,
                            r = !u || t && t.start <= a || u - a > 2 && !this.fragmentTracker.getPartialFragment(a);
                        if (e || r) return;
                        this.moved = !1
                    }
                    if (!this.moved && null !== this.stalled) {
                        var c;
                        let e = Math.max(u, h.start || 0) - a,
                            t = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
                            r = null == t ? void 0 : null == (c = t.details) ? void 0 : c.live,
                            i = r ? 2 * t.details.targetduration : 2,
                            s = this.fragmentTracker.getPartialFragment(a);
                        if (e > 0 && (e <= i || s)) {
                            this._trySkipBufferHole(s);
                            return
                        }
                    }
                    let f = self.performance.now();
                    if (null === s) {
                        this.stalled = f;
                        return
                    }
                    let g = f - s;
                    if (!n && g >= 250 && (this._reportStall(h), !this.media)) return;
                    let m = BufferHelper.bufferInfo(i, a, r.maxBufferHole);
                    this._tryFixBufferStall(m, g)
                }
                _tryFixBufferStall(e, t) {
                    let {
                        config: r,
                        fragmentTracker: i,
                        media: s
                    } = this;
                    if (null === s) return;
                    let a = s.currentTime,
                        n = i.getPartialFragment(a);
                    if (n) {
                        let e = this._trySkipBufferHole(n);
                        if (e || !this.media) return
                    }(e.len > r.maxBufferHole || e.nextStart && e.nextStart - a < r.maxBufferHole) && t > 1e3 * r.highBufferWatchdogPeriod && (L.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
                }
                _reportStall(e) {
                    let {
                        hls: t,
                        media: r,
                        stallReported: i
                    } = this;
                    if (!i && r) {
                        this.stallReported = !0;
                        let i = Error(`Playback stalling at @${r.currentTime} due to low buffer (${JSON.stringify(e)})`);
                        L.warn(i.message), t.trigger(E.ERROR, {
                            type: y.MEDIA_ERROR,
                            details: v.BUFFER_STALLED_ERROR,
                            fatal: !1,
                            error: i,
                            buffer: e.len
                        })
                    }
                }
                _trySkipBufferHole(e) {
                    let {
                        config: t,
                        hls: r,
                        media: i
                    } = this;
                    if (null === i) return 0;
                    let s = i.currentTime,
                        a = BufferHelper.bufferInfo(i, s, 0),
                        n = s < a.start ? a.start : a.nextStart;
                    if (n) {
                        let l = a.len <= t.maxBufferHole,
                            o = a.len > 0 && a.len < 1 && i.readyState < 3,
                            h = n - s;
                        if (h > 0 && (l || o)) {
                            if (h > t.maxBufferHole) {
                                let {
                                    fragmentTracker: t
                                } = this, r = !1;
                                if (0 === s) {
                                    let e = t.getAppendedFrag(0, V.MAIN);
                                    e && n < e.end && (r = !0)
                                }
                                if (!r) {
                                    let r = e || t.getAppendedFrag(s, V.MAIN);
                                    if (r) {
                                        let e = !1,
                                            i = r.end;
                                        for (; i < n;) {
                                            let r = t.getPartialFragment(i);
                                            if (r) i += r.duration;
                                            else {
                                                e = !0;
                                                break
                                            }
                                        }
                                        if (e) return 0
                                    }
                                }
                            }
                            let a = Math.max(n + .05, s + .1);
                            if (L.warn(`skipping hole, adjusting currentTime from ${s} to ${a}`), this.moved = !0, this.stalled = null, i.currentTime = a, e && !e.gap) {
                                let t = Error(`fragment loaded with buffer holes, seeking from ${s} to ${a}`);
                                r.trigger(E.ERROR, {
                                    type: y.MEDIA_ERROR,
                                    details: v.BUFFER_SEEK_OVER_HOLE,
                                    fatal: !1,
                                    error: t,
                                    reason: t.message,
                                    frag: e
                                })
                            }
                            return a
                        }
                    }
                    return 0
                }
                _tryNudgeBuffer() {
                    let {
                        config: e,
                        hls: t,
                        media: r,
                        nudgeRetry: i
                    } = this;
                    if (null === r) return;
                    let s = r.currentTime;
                    if (this.nudgeRetry++, i < e.nudgeMaxRetry) {
                        let a = s + (i + 1) * e.nudgeOffset,
                            n = Error(`Nudging 'currentTime' from ${s} to ${a}`);
                        L.warn(n.message), r.currentTime = a, t.trigger(E.ERROR, {
                            type: y.MEDIA_ERROR,
                            details: v.BUFFER_NUDGE_ON_STALL,
                            error: n,
                            fatal: !1
                        })
                    } else {
                        let r = Error(`Playhead still not moving while enough data buffered @${s} after ${e.nudgeMaxRetry} nudges`);
                        L.error(r.message), t.trigger(E.ERROR, {
                            type: y.MEDIA_ERROR,
                            details: v.BUFFER_STALLED_ERROR,
                            error: r,
                            fatal: !0
                        })
                    }
                }
            };
            let StreamController = class StreamController extends BaseStreamController {
                constructor(e, t, r) {
                    super(e, t, r, "[stream-controller]", V.MAIN), this.audioCodecSwap = !1, this.gapController = null, this.level = -1, this._forceStartLoad = !1, this.altAudio = !1, this.audioOnly = !1, this.fragPlaying = null, this.onvplaying = null, this.onvseeked = null, this.fragLastKbps = 0, this.couldBacktrack = !1, this.backtrackFragment = null, this.audioCodecSwitch = !1, this.videoBuffer = null, this._registerListeners()
                }
                _registerListeners() {
                    let {
                        hls: e
                    } = this;
                    e.on(E.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(E.MANIFEST_LOADING, this.onManifestLoading, this), e.on(E.MANIFEST_PARSED, this.onManifestParsed, this), e.on(E.LEVEL_LOADING, this.onLevelLoading, this), e.on(E.LEVEL_LOADED, this.onLevelLoaded, this), e.on(E.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.on(E.ERROR, this.onError, this), e.on(E.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(E.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(E.BUFFER_CREATED, this.onBufferCreated, this), e.on(E.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(E.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(E.FRAG_BUFFERED, this.onFragBuffered, this)
                }
                _unregisterListeners() {
                    let {
                        hls: e
                    } = this;
                    e.off(E.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(E.MANIFEST_LOADING, this.onManifestLoading, this), e.off(E.MANIFEST_PARSED, this.onManifestParsed, this), e.off(E.LEVEL_LOADED, this.onLevelLoaded, this), e.off(E.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.off(E.ERROR, this.onError, this), e.off(E.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(E.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(E.BUFFER_CREATED, this.onBufferCreated, this), e.off(E.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(E.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(E.FRAG_BUFFERED, this.onFragBuffered, this)
                }
                onHandlerDestroying() {
                    this._unregisterListeners(), this.onMediaDetaching()
                }
                startLoad(e) {
                    if (this.levels) {
                        let {
                            lastCurrentTime: t,
                            hls: r
                        } = this;
                        if (this.stopLoad(), this.setInterval(100), this.level = -1, !this.startFragRequested) {
                            let e = r.startLevel; - 1 === e && (r.config.testBandwidth && this.levels.length > 1 ? (e = 0, this.bitrateTest = !0) : e = r.nextAutoLevel), this.level = r.nextLoadLevel = e, this.loadedmetadata = !1
                        }
                        t > 0 && -1 === e && (this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`), e = t), this.state = et.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
                    } else this._forceStartLoad = !0, this.state = et.STOPPED
                }
                stopLoad() {
                    this._forceStartLoad = !1, super.stopLoad()
                }
                doTick() {
                    var e, t;
                    switch (this.state) {
                        case et.WAITING_LEVEL:
                            {
                                let {
                                    levels: t,
                                    level: r
                                } = this,
                                i = null == t ? void 0 : null == (e = t[r]) ? void 0 : e.details;
                                if (i && (!i.live || this.levelLastLoaded === this.level)) {
                                    if (this.waitForCdnTuneIn(i)) break;
                                    this.state = et.IDLE
                                } else this.hls.nextLoadLevel !== this.level && (this.state = et.IDLE);
                                break
                            }
                        case et.FRAG_LOADING_WAITING_RETRY:
                            {
                                let e = self.performance.now(),
                                    r = this.retryDate;
                                (!r || e >= r || null != (t = this.media) && t.seeking) && (this.resetStartWhenNotLoaded(this.level), this.state = et.IDLE)
                            }
                    }
                    this.state === et.IDLE && this.doTickIdle(), this.onTickEnd()
                }
                onTickEnd() {
                    super.onTickEnd(), this.checkBuffer(), this.checkFragmentChanged()
                }
                doTickIdle() {
                    let {
                        hls: e,
                        levelLastLoaded: t,
                        levels: r,
                        media: i
                    } = this, {
                        config: s,
                        nextLoadLevel: a
                    } = e;
                    if (null === t || !i && (this.startFragRequested || !s.startFragPrefetch) || this.altAudio && this.audioOnly || !(null != r && r[a])) return;
                    let n = r[a],
                        l = this.getMainFwdBufferInfo();
                    if (null === l) return;
                    let o = this.getLevelDetails();
                    if (o && this._streamEnded(l, o)) {
                        let e = {};
                        this.altAudio && (e.type = "video"), this.hls.trigger(E.BUFFER_EOS, e), this.state = et.ENDED;
                        return
                    }
                    e.loadLevel !== a && -1 === e.manualLevel && this.log(`Adapting to level ${a} from level ${this.level}`), this.level = e.nextLoadLevel = a;
                    let h = n.details;
                    if (!h || this.state === et.WAITING_LEVEL || h.live && this.levelLastLoaded !== a) {
                        this.level = a, this.state = et.WAITING_LEVEL;
                        return
                    }
                    let d = l.len,
                        u = this.getMaxBufferLength(n.maxBitrate);
                    if (d >= u) return;
                    this.backtrackFragment && this.backtrackFragment.start > l.end && (this.backtrackFragment = null);
                    let c = this.backtrackFragment ? this.backtrackFragment.start : l.end,
                        f = this.getNextFragment(c, h);
                    if (this.couldBacktrack && !this.fragPrevious && f && "initSegment" !== f.sn && this.fragmentTracker.getState(f) !== J.OK) {
                        var g;
                        let e = (null != (g = this.backtrackFragment) ? g : f).sn,
                            t = e - h.startSN,
                            r = h.fragments[t - 1];
                        r && f.cc === r.cc && (f = r, this.fragmentTracker.removeFragment(r))
                    } else this.backtrackFragment && l.len && (this.backtrackFragment = null);
                    if (f && this.isLoopLoading(f, c)) {
                        let e = f.gap;
                        if (!e) {
                            let e = this.audioOnly && !this.altAudio ? D.AUDIO : D.VIDEO,
                                t = (e === D.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
                            t && this.afterBufferFlushed(t, e, V.MAIN)
                        }
                        f = this.getNextFragmentLoopLoading(f, h, l, V.MAIN, u)
                    }
                    f && (!f.initSegment || f.initSegment.data || this.bitrateTest || (f = f.initSegment), this.loadFragment(f, n, c))
                }
                loadFragment(e, t, r) {
                    let i = this.fragmentTracker.getState(e);
                    this.fragCurrent = e, i === J.NOT_LOADED || i === J.PARTIAL ? "initSegment" === e.sn ? this._loadInitSegment(e, t) : this.bitrateTest ? (this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(e, t)) : (this.startFragRequested = !0, super.loadFragment(e, t, r)) : this.clearTrackerIfNeeded(e)
                }
                getBufferedFrag(e) {
                    return this.fragmentTracker.getBufferedFrag(e, V.MAIN)
                }
                followingBufferedFrag(e) {
                    return e ? this.getBufferedFrag(e.end + .5) : null
                }
                immediateLevelSwitch() {
                    this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
                }
                nextLevelSwitch() {
                    let {
                        levels: e,
                        media: t
                    } = this;
                    if (null != t && t.readyState) {
                        let r;
                        let i = this.getAppendedFrag(t.currentTime);
                        i && i.start > 1 && this.flushMainBuffer(0, i.start - 1);
                        let s = this.getLevelDetails();
                        if (null != s && s.live) {
                            let e = this.getMainFwdBufferInfo();
                            if (!e || e.len < 2 * s.targetduration) return
                        }
                        if (!t.paused && e) {
                            let t = this.hls.nextLoadLevel,
                                i = e[t],
                                s = this.fragLastKbps;
                            r = s && this.fragCurrent ? this.fragCurrent.duration * i.maxBitrate / (1e3 * s) + 1 : 0
                        } else r = 0;
                        let a = this.getBufferedFrag(t.currentTime + r);
                        if (a) {
                            let e = this.followingBufferedFrag(a);
                            if (e) {
                                this.abortCurrentFrag();
                                let t = e.maxStartPTS ? e.maxStartPTS : e.start,
                                    r = e.duration,
                                    i = Math.max(a.end, t + Math.min(Math.max(r - this.config.maxFragLookUpTolerance, .5 * r), .75 * r));
                                this.flushMainBuffer(i, Number.POSITIVE_INFINITY)
                            }
                        }
                    }
                }
                abortCurrentFrag() {
                    let e = this.fragCurrent;
                    switch (this.fragCurrent = null, this.backtrackFragment = null, e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.state) {
                        case et.KEY_LOADING:
                        case et.FRAG_LOADING:
                        case et.FRAG_LOADING_WAITING_RETRY:
                        case et.PARSING:
                        case et.PARSED:
                            this.state = et.IDLE
                    }
                    this.nextLoadPosition = this.getLoadPosition()
                }
                flushMainBuffer(e, t) {
                    super.flushMainBuffer(e, t, this.altAudio ? "video" : null)
                }
                onMediaAttached(e, t) {
                    super.onMediaAttached(e, t);
                    let r = t.media;
                    this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), r.addEventListener("playing", this.onvplaying), r.addEventListener("seeked", this.onvseeked), this.gapController = new GapController(this.config, r, this.fragmentTracker, this.hls)
                }
                onMediaDetaching() {
                    let {
                        media: e
                    } = this;
                    e && this.onvplaying && this.onvseeked && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), super.onMediaDetaching()
                }
                onMediaPlaying() {
                    this.tick()
                }
                onMediaSeeked() {
                    let e = this.media,
                        t = e ? e.currentTime : null;
                    T(t) && this.log(`Media seeked to ${t.toFixed(3)}`);
                    let r = this.getMainFwdBufferInfo();
                    if (null === r || 0 === r.len) {
                        this.warn(`Main forward buffer length on "seeked" event ${r?r.len:"empty"})`);
                        return
                    }
                    this.tick()
                }
                onManifestLoading() {
                    this.log("Trigger BUFFER_RESET"), this.hls.trigger(E.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = !1, this.startPosition = this.lastCurrentTime = 0, this.levels = this.fragPlaying = this.backtrackFragment = null, this.altAudio = this.audioOnly = !1
                }
                onManifestParsed(e, t) {
                    let r, i = !1,
                        s = !1;
                    t.levels.forEach(e => {
                        (r = e.audioCodec) && (-1 !== r.indexOf("mp4a.40.2") && (i = !0), -1 !== r.indexOf("mp4a.40.5") && (s = !0))
                    }), this.audioCodecSwitch = i && s && ! function() {
                        var e;
                        let t = getSourceBuffer();
                        return "function" == typeof(null == t ? void 0 : null == (e = t.prototype) ? void 0 : e.changeType)
                    }(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1
                }
                onLevelLoading(e, t) {
                    let {
                        levels: r
                    } = this;
                    if (!r || this.state !== et.IDLE) return;
                    let i = r[t.level];
                    (!i.details || i.details.live && this.levelLastLoaded !== t.level || this.waitForCdnTuneIn(i.details)) && (this.state = et.WAITING_LEVEL)
                }
                onLevelLoaded(e, t) {
                    var r;
                    let {
                        levels: i
                    } = this, s = t.level, a = t.details, n = a.totalduration;
                    if (!i) {
                        this.warn(`Levels were reset while loading level ${s}`);
                        return
                    }
                    this.log(`Level ${s} loaded [${a.startSN},${a.endSN}]${a.lastPartSn?`[part-${a.lastPartSn}-${a.lastPartIndex}]`:""}, cc [${a.startCC}, ${a.endCC}] duration:${n}`);
                    let l = i[s],
                        o = this.fragCurrent;
                    o && (this.state === et.FRAG_LOADING || this.state === et.FRAG_LOADING_WAITING_RETRY) && (o.level !== t.level || o.urlId !== l.urlId) && o.loader && this.abortCurrentFrag();
                    let h = 0;
                    if (a.live || null != (r = l.details) && r.live) {
                        if (this.checkLiveUpdate(a), a.deltaUpdateFailed) return;
                        h = this.alignPlaylists(a, l.details)
                    }
                    if (l.details = a, this.levelLastLoaded = s, this.hls.trigger(E.LEVEL_UPDATED, {
                            details: a,
                            level: s
                        }), this.state === et.WAITING_LEVEL) {
                        if (this.waitForCdnTuneIn(a)) return;
                        this.state = et.IDLE
                    }
                    this.startFragRequested ? a.live && this.synchronizeToLiveEdge(a) : this.setStartPosition(a, h), this.tick()
                }
                _handleFragmentLoadProgress(e) {
                    var t;
                    let {
                        frag: r,
                        part: i,
                        payload: s
                    } = e, {
                        levels: a
                    } = this;
                    if (!a) {
                        this.warn(`Levels were reset while fragment load was in progress. Fragment ${r.sn} of level ${r.level} will not be buffered`);
                        return
                    }
                    let n = a[r.level],
                        l = n.details;
                    if (!l) {
                        this.warn(`Dropping fragment ${r.sn} of level ${r.level} after level details were reset`), this.fragmentTracker.removeFragment(r);
                        return
                    }
                    let o = n.videoCodec,
                        h = l.PTSKnown || !l.live,
                        d = null == (t = r.initSegment) ? void 0 : t.data,
                        u = this._getAudioCodec(n),
                        c = this.transmuxer = this.transmuxer || new TransmuxerInterface(this.hls, V.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)),
                        f = i ? i.index : -1,
                        g = -1 !== f,
                        m = new ChunkMetadata(r.level, r.sn, r.stats.chunkCount, s.byteLength, f, g),
                        p = this.initPTS[r.cc];
                    c.push(s, d, u, o, r, i, l.totalduration, h, m, p)
                }
                onAudioTrackSwitching(e, t) {
                    let r = this.altAudio,
                        i = !!t.url;
                    if (!i) {
                        if (this.mediaBuffer !== this.media) {
                            this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                            let e = this.fragCurrent;
                            e && (this.log("Switching to main audio track, cancel main fragment load"), e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.resetLoadingState()
                        } else this.audioOnly && this.resetTransmuxer();
                        let e = this.hls;
                        r && (e.trigger(E.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: Number.POSITIVE_INFINITY,
                            type: null
                        }), this.fragmentTracker.removeAllFragments()), e.trigger(E.AUDIO_TRACK_SWITCHED, t)
                    }
                }
                onAudioTrackSwitched(e, t) {
                    let r = t.id,
                        i = !!this.hls.audioTracks[r].url;
                    if (i) {
                        let e = this.videoBuffer;
                        e && this.mediaBuffer !== e && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = e)
                    }
                    this.altAudio = i, this.tick()
                }
                onBufferCreated(e, t) {
                    let r, i;
                    let s = t.tracks,
                        a = !1;
                    for (let e in s) {
                        let t = s[e];
                        if ("main" === t.id) {
                            if (i = e, r = t, "video" === e) {
                                let t = s[e];
                                t && (this.videoBuffer = t.buffer)
                            }
                        } else a = !0
                    }
                    a && r ? (this.log(`Alternate track found, use ${i}.buffered to schedule main fragment loading`), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media
                }
                onFragBuffered(e, t) {
                    let {
                        frag: r,
                        part: i
                    } = t;
                    if (r && r.type !== V.MAIN) return;
                    if (this.fragContextChanged(r)) {
                        this.warn(`Fragment ${r.sn}${i?" p: "+i.index:""} of level ${r.level} finished buffering, but was aborted. state: ${this.state}`), this.state === et.PARSED && (this.state = et.IDLE);
                        return
                    }
                    let s = i ? i.stats : r.stats;
                    this.fragLastKbps = Math.round(8 * s.total / (s.buffering.end - s.loading.first)), "initSegment" !== r.sn && (this.fragPrevious = r), this.fragBufferedComplete(r, i)
                }
                onError(e, t) {
                    var r;
                    if (t.fatal) {
                        this.state = et.ERROR;
                        return
                    }
                    switch (t.details) {
                        case v.FRAG_GAP:
                        case v.FRAG_PARSING_ERROR:
                        case v.FRAG_DECRYPT_ERROR:
                        case v.FRAG_LOAD_ERROR:
                        case v.FRAG_LOAD_TIMEOUT:
                        case v.KEY_LOAD_ERROR:
                        case v.KEY_LOAD_TIMEOUT:
                            this.onFragmentOrKeyLoadError(V.MAIN, t);
                            break;
                        case v.LEVEL_LOAD_ERROR:
                        case v.LEVEL_LOAD_TIMEOUT:
                        case v.LEVEL_PARSING_ERROR:
                            t.levelRetry || this.state !== et.WAITING_LEVEL || (null == (r = t.context) ? void 0 : r.type) !== H.LEVEL || (this.state = et.IDLE);
                            break;
                        case v.BUFFER_FULL_ERROR:
                            if (!t.parent || "main" !== t.parent) return;
                            this.reduceLengthAndFlushBuffer(t) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                            break;
                        case v.INTERNAL_EXCEPTION:
                            this.recoverWorkerError(t)
                    }
                }
                checkBuffer() {
                    let {
                        media: e,
                        gapController: t
                    } = this;
                    if (e && t && e.readyState) {
                        if (this.loadedmetadata || !BufferHelper.getBuffered(e).length) {
                            let e = this.state !== et.IDLE ? this.fragCurrent : null;
                            t.poll(this.lastCurrentTime, e)
                        }
                        this.lastCurrentTime = e.currentTime
                    }
                }
                onFragLoadEmergencyAborted() {
                    this.state = et.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate()
                }
                onBufferFlushed(e, {
                    type: t
                }) {
                    if (t !== D.AUDIO || this.audioOnly && !this.altAudio) {
                        let e = (t === D.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
                        this.afterBufferFlushed(e, t, V.MAIN)
                    }
                }
                onLevelsUpdated(e, t) {
                    this.levels = t.levels
                }
                swapAudioCodec() {
                    this.audioCodecSwap = !this.audioCodecSwap
                }
                seekToStartPos() {
                    let {
                        media: e
                    } = this;
                    if (!e) return;
                    let t = e.currentTime,
                        r = this.startPosition;
                    if (r >= 0 && t < r) {
                        if (e.seeking) {
                            this.log(`could not seek to ${r}, already seeking at ${t}`);
                            return
                        }
                        let i = BufferHelper.getBuffered(e),
                            s = i.length ? i.start(0) : 0,
                            a = s - r;
                        a > 0 && (a < this.config.maxBufferHole || a < this.config.maxFragLookUpTolerance) && (this.log(`adjusting start position by ${a} to match buffer start`), r += a, this.startPosition = r), this.log(`seek to target start position ${r} from current time ${t}`), e.currentTime = r
                    }
                }
                _getAudioCodec(e) {
                    let t = this.config.defaultAudioCodec || e.audioCodec;
                    return this.audioCodecSwap && t && (this.log("Swapping audio codec"), t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), t
                }
                _loadBitrateTestFrag(e, t) {
                    e.bitrateTest = !0, this._doFragLoad(e, t).then(r => {
                        let {
                            hls: i
                        } = this;
                        if (!r || this.fragContextChanged(e)) return;
                        t.fragmentError = 0, this.state = et.IDLE, this.startFragRequested = !1, this.bitrateTest = !1;
                        let s = e.stats;
                        s.parsing.start = s.parsing.end = s.buffering.start = s.buffering.end = self.performance.now(), i.trigger(E.FRAG_LOADED, r), e.bitrateTest = !1
                    })
                }
                _handleTransmuxComplete(e) {
                    var t;
                    let r = "main",
                        {
                            hls: i
                        } = this,
                        {
                            remuxResult: s,
                            chunkMeta: a
                        } = e,
                        n = this.getCurrentContext(a);
                    if (!n) {
                        this.resetWhenMissingContext(a);
                        return
                    }
                    let {
                        frag: l,
                        part: o,
                        level: h
                    } = n, {
                        video: d,
                        text: u,
                        id3: c,
                        initSegment: f
                    } = s, {
                        details: g
                    } = h, m = this.altAudio ? void 0 : s.audio;
                    if (this.fragContextChanged(l)) {
                        this.fragmentTracker.removeFragment(l);
                        return
                    }
                    if (this.state = et.PARSING, f) {
                        if (null != f && f.tracks) {
                            let e = l.initSegment || l;
                            this._bufferInitSegment(h, f.tracks, e, a), i.trigger(E.FRAG_PARSING_INIT_SEGMENT, {
                                frag: e,
                                id: r,
                                tracks: f.tracks
                            })
                        }
                        let e = f.initPTS,
                            t = f.timescale;
                        T(e) && (this.initPTS[l.cc] = {
                            baseTime: e,
                            timescale: t
                        }, i.trigger(E.INIT_PTS_FOUND, {
                            frag: l,
                            id: r,
                            initPTS: e,
                            timescale: t
                        }))
                    }
                    if (d && g && "initSegment" !== l.sn) {
                        let e = g.fragments[l.sn - 1 - g.startSN],
                            t = l.sn === g.startSN,
                            r = !e || l.cc > e.cc;
                        if (!1 !== s.independent) {
                            let {
                                startPTS: e,
                                endPTS: i,
                                startDTS: s,
                                endDTS: n
                            } = d;
                            if (o) o.elementaryStreams[d.type] = {
                                startPTS: e,
                                endPTS: i,
                                startDTS: s,
                                endDTS: n
                            };
                            else if (d.firstKeyFrame && d.independent && 1 === a.id && !r && (this.couldBacktrack = !0), d.dropped && d.independent) {
                                let s = this.getMainFwdBufferInfo(),
                                    a = (s ? s.end : this.getLoadPosition()) + this.config.maxBufferHole,
                                    o = d.firstKeyFramePTS ? d.firstKeyFramePTS : e;
                                if (t || !(a < o - this.config.maxBufferHole) || r) r && (l.gap = !0);
                                else {
                                    this.backtrack(l);
                                    return
                                }
                                l.setElementaryStreamInfo(d.type, l.start, i, l.start, n, !0)
                            }
                            l.setElementaryStreamInfo(d.type, e, i, s, n), this.backtrackFragment && (this.backtrackFragment = l), this.bufferFragmentData(d, l, o, a, t || r)
                        } else if (t || r) l.gap = !0;
                        else {
                            this.backtrack(l);
                            return
                        }
                    }
                    if (m) {
                        let {
                            startPTS: e,
                            endPTS: t,
                            startDTS: r,
                            endDTS: i
                        } = m;
                        o && (o.elementaryStreams[D.AUDIO] = {
                            startPTS: e,
                            endPTS: t,
                            startDTS: r,
                            endDTS: i
                        }), l.setElementaryStreamInfo(D.AUDIO, e, t, r, i), this.bufferFragmentData(m, l, o, a)
                    }
                    if (g && null != c && null != (t = c.samples) && t.length) {
                        let e = {
                            id: r,
                            frag: l,
                            details: g,
                            samples: c.samples
                        };
                        i.trigger(E.FRAG_PARSING_METADATA, e)
                    }
                    if (g && u) {
                        let e = {
                            id: r,
                            frag: l,
                            details: g,
                            samples: u.samples
                        };
                        i.trigger(E.FRAG_PARSING_USERDATA, e)
                    }
                }
                _bufferInitSegment(e, t, r, i) {
                    if (this.state !== et.PARSING) return;
                    this.audioOnly = !!t.audio && !t.video, this.altAudio && !this.audioOnly && delete t.audio;
                    let {
                        audio: s,
                        video: a,
                        audiovideo: n
                    } = t;
                    if (s) {
                        let t = e.audioCodec,
                            r = navigator.userAgent.toLowerCase();
                        this.audioCodecSwitch && (t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 1 !== s.metadata.channelCount && -1 === r.indexOf("firefox") && (t = "mp4a.40.5")), -1 !== r.indexOf("android") && "audio/mpeg" !== s.container && (t = "mp4a.40.2", this.log(`Android: force audio codec to ${t}`)), e.audioCodec && e.audioCodec !== t && this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${t}"`), s.levelCodec = t, s.id = "main", this.log(`Init audio buffer, container:${s.container}, codecs[selected/level/parsed]=[${t||""}/${e.audioCodec||""}/${s.codec}]`)
                    }
                    a && (a.levelCodec = e.videoCodec, a.id = "main", this.log(`Init video buffer, container:${a.container}, codecs[level/parsed]=[${e.videoCodec||""}/${a.codec}]`)), n && this.log(`Init audiovideo buffer, container:${n.container}, codecs[level/parsed]=[${e.attrs.CODECS||""}/${n.codec}]`), this.hls.trigger(E.BUFFER_CODECS, t), Object.keys(t).forEach(e => {
                        let s = t[e],
                            a = s.initSegment;
                        null != a && a.byteLength && this.hls.trigger(E.BUFFER_APPENDING, {
                            type: e,
                            data: a,
                            frag: r,
                            part: null,
                            chunkMeta: i,
                            parent: r.type
                        })
                    }), this.tick()
                }
                getMainFwdBufferInfo() {
                    return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, V.MAIN)
                }
                backtrack(e) {
                    this.couldBacktrack = !0, this.backtrackFragment = e, this.resetTransmuxer(), this.flushBufferGap(e), this.fragmentTracker.removeFragment(e), this.fragPrevious = null, this.nextLoadPosition = e.start, this.state = et.IDLE
                }
                checkFragmentChanged() {
                    let e = this.media,
                        t = null;
                    if (e && e.readyState > 1 && !1 === e.seeking) {
                        let r = e.currentTime;
                        if (BufferHelper.isBuffered(e, r) ? t = this.getAppendedFrag(r) : BufferHelper.isBuffered(e, r + .1) && (t = this.getAppendedFrag(r + .1)), t) {
                            this.backtrackFragment = null;
                            let e = this.fragPlaying,
                                r = t.level;
                            e && t.sn === e.sn && e.level === r && t.urlId === e.urlId || (this.fragPlaying = t, this.hls.trigger(E.FRAG_CHANGED, {
                                frag: t
                            }), e && e.level === r || this.hls.trigger(E.LEVEL_SWITCHED, {
                                level: r
                            }))
                        }
                    }
                }
                get nextLevel() {
                    let e = this.nextBufferedFrag;
                    return e ? e.level : -1
                }
                get currentFrag() {
                    let e = this.media;
                    return e ? this.fragPlaying || this.getAppendedFrag(e.currentTime) : null
                }
                get currentProgramDateTime() {
                    let e = this.media;
                    if (e) {
                        let t = e.currentTime,
                            r = this.currentFrag;
                        if (r && T(t) && T(r.programDateTime)) {
                            let e = r.programDateTime + (t - r.start) * 1e3;
                            return new Date(e)
                        }
                    }
                    return null
                }
                get currentLevel() {
                    let e = this.currentFrag;
                    return e ? e.level : -1
                }
                get nextBufferedFrag() {
                    let e = this.currentFrag;
                    return e ? this.followingBufferedFrag(e) : null
                }
                get forceStartLoad() {
                    return this._forceStartLoad
                }
            };
            let EWMA = class EWMA {
                constructor(e, t = 0, r = 0) {
                    this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = e, this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = t, this.totalWeight_ = r
                }
                sample(e, t) {
                    let r = Math.pow(this.alpha_, e);
                    this.estimate_ = t * (1 - r) + r * this.estimate_, this.totalWeight_ += e
                }
                getTotalWeight() {
                    return this.totalWeight_
                }
                getEstimate() {
                    if (this.alpha_) {
                        let e = 1 - Math.pow(this.alpha_, this.totalWeight_);
                        if (e) return this.estimate_ / e
                    }
                    return this.estimate_
                }
            };
            let EwmaBandWidthEstimator = class EwmaBandWidthEstimator {
                constructor(e, t, r, i = 100) {
                    this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = r, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new EWMA(e), this.fast_ = new EWMA(t), this.defaultTTFB_ = i, this.ttfb_ = new EWMA(e)
                }
                update(e, t) {
                    let {
                        slow_: r,
                        fast_: i,
                        ttfb_: s
                    } = this;
                    r.halfLife !== e && (this.slow_ = new EWMA(e, r.getEstimate(), r.getTotalWeight())), i.halfLife !== t && (this.fast_ = new EWMA(t, i.getEstimate(), i.getTotalWeight())), s.halfLife !== e && (this.ttfb_ = new EWMA(e, s.getEstimate(), s.getTotalWeight()))
                }
                sample(e, t) {
                    e = Math.max(e, this.minDelayMs_);
                    let r = e / 1e3,
                        i = 8 * t / r;
                    this.fast_.sample(r, i), this.slow_.sample(r, i)
                }
                sampleTTFB(e) {
                    this.ttfb_.sample(Math.sqrt(2) * Math.exp(-Math.pow(e / 1e3, 2) / 2), Math.max(e, 5))
                }
                canEstimate() {
                    return this.fast_.getTotalWeight() >= this.minWeight_
                }
                getEstimate() {
                    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                }
                getEstimateTTFB() {
                    return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_
                }
                destroy() {}
            };
            let ChunkCache = class ChunkCache {
                constructor() {
                    this.chunks = [], this.dataLength = 0
                }
                push(e) {
                    this.chunks.push(e), this.dataLength += e.length
                }
                flush() {
                    let e;
                    let {
                        chunks: t,
                        dataLength: r
                    } = this;
                    return t.length ? (e = 1 === t.length ? t[0] : function(e, t) {
                        let r = new Uint8Array(t),
                            i = 0;
                        for (let t = 0; t < e.length; t++) {
                            let s = e[t];
                            r.set(s, i), i += s.length
                        }
                        return r
                    }(t, r), this.reset(), e) : new Uint8Array(0)
                }
                reset() {
                    this.chunks.length = 0, this.dataLength = 0
                }
            };

            function subtitleOptionsIdentical(e, t) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < e.length; r++)
                    if (! function(e, t) {
                            let r = e["STABLE-RENDITION-ID"];
                            return r ? r === t["STABLE-RENDITION-ID"] : !["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED"].some(r => e[r] !== t[r])
                        }(e[r].attrs, t[r].attrs)) return !1;
                return !0
            }
            let BufferableInstance = class BufferableInstance {
                constructor(e) {
                    this.buffered = void 0;
                    let getRange = (t, r, i) => {
                        if ((r >>>= 0) > i - 1) throw new DOMException(`Failed to execute '${t}' on 'TimeRanges': The index provided (${r}) is greater than the maximum bound (${i})`);
                        return e[r][t]
                    };
                    this.buffered = {
                        get length() {
                            return e.length
                        },
                        end: t => getRange("end", t, e.length),
                        start: t => getRange("start", t, e.length)
                    }
                }
            };

            function filterSubtitleTracks(e) {
                let t = [];
                for (let r = 0; r < e.length; r++) {
                    let i = e[r];
                    ("subtitles" === i.kind || "captions" === i.kind) && i.label && t.push(e[r])
                }
                return t
            }
            let BufferOperationQueue = class BufferOperationQueue {
                constructor(e) {
                    this.buffers = void 0, this.queues = {
                        video: [],
                        audio: [],
                        audiovideo: []
                    }, this.buffers = e
                }
                append(e, t) {
                    let r = this.queues[t];
                    r.push(e), 1 === r.length && this.buffers[t] && this.executeNext(t)
                }
                insertAbort(e, t) {
                    let r = this.queues[t];
                    r.unshift(e), this.executeNext(t)
                }
                appendBlocker(e) {
                    let t;
                    let r = new Promise(e => {
                            t = e
                        }),
                        i = {
                            execute: t,
                            onStart: () => {},
                            onComplete: () => {},
                            onError: () => {}
                        };
                    return this.append(i, e), r
                }
                executeNext(e) {
                    let {
                        buffers: t,
                        queues: r
                    } = this, i = t[e], s = r[e];
                    if (s.length) {
                        let t = s[0];
                        try {
                            t.execute()
                        } catch (r) {
                            L.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), t.onError(r), null != i && i.updating || (s.shift(), this.executeNext(e))
                        }
                    }
                }
                shiftAndExecuteNext(e) {
                    this.queues[e].shift(), this.executeNext(e)
                }
                current(e) {
                    return this.queues[e][0]
                }
            };
            let eg = getMediaSource(),
                em = /([ha]vc.)(?:\.[^.,]+)+/,
                ep = {
                    42: 225,
                    92: 233,
                    94: 237,
                    95: 243,
                    96: 250,
                    123: 231,
                    124: 247,
                    125: 209,
                    126: 241,
                    127: 9608,
                    128: 174,
                    129: 176,
                    130: 189,
                    131: 191,
                    132: 8482,
                    133: 162,
                    134: 163,
                    135: 9834,
                    136: 224,
                    137: 32,
                    138: 232,
                    139: 226,
                    140: 234,
                    141: 238,
                    142: 244,
                    143: 251,
                    144: 193,
                    145: 201,
                    146: 211,
                    147: 218,
                    148: 220,
                    149: 252,
                    150: 8216,
                    151: 161,
                    152: 42,
                    153: 8217,
                    154: 9473,
                    155: 169,
                    156: 8480,
                    157: 8226,
                    158: 8220,
                    159: 8221,
                    160: 192,
                    161: 194,
                    162: 199,
                    163: 200,
                    164: 202,
                    165: 203,
                    166: 235,
                    167: 206,
                    168: 207,
                    169: 239,
                    170: 212,
                    171: 217,
                    172: 249,
                    173: 219,
                    174: 171,
                    175: 187,
                    176: 195,
                    177: 227,
                    178: 205,
                    179: 204,
                    180: 236,
                    181: 210,
                    182: 242,
                    183: 213,
                    184: 245,
                    185: 123,
                    186: 125,
                    187: 92,
                    188: 94,
                    189: 95,
                    190: 124,
                    191: 8764,
                    192: 196,
                    193: 228,
                    194: 214,
                    195: 246,
                    196: 223,
                    197: 165,
                    198: 164,
                    199: 9475,
                    200: 197,
                    201: 229,
                    202: 216,
                    203: 248,
                    204: 9487,
                    205: 9491,
                    206: 9495,
                    207: 9499
                },
                getCharForByte = function(e) {
                    let t = e;
                    return ep.hasOwnProperty(e) && (t = ep[e]), String.fromCharCode(t)
                },
                eT = {
                    17: 1,
                    18: 3,
                    21: 5,
                    22: 7,
                    23: 9,
                    16: 11,
                    19: 12,
                    20: 14
                },
                eE = {
                    17: 2,
                    18: 4,
                    21: 6,
                    22: 8,
                    23: 10,
                    19: 13,
                    20: 15
                },
                ey = {
                    25: 1,
                    26: 3,
                    29: 5,
                    30: 7,
                    31: 9,
                    24: 11,
                    27: 12,
                    28: 14
                },
                ev = {
                    25: 2,
                    26: 4,
                    29: 6,
                    30: 8,
                    31: 10,
                    27: 13,
                    28: 15
                },
                eS = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
            let CaptionsLogger = class CaptionsLogger {
                constructor() {
                    this.time = null, this.verboseLevel = 0
                }
                log(e, t) {
                    if (this.verboseLevel >= e) {
                        let r = "function" == typeof t ? t() : t;
                        L.log(`${this.time} [${e}] ${r}`)
                    }
                }
            };
            let numArrayToHexArray = function(e) {
                let t = [];
                for (let r = 0; r < e.length; r++) t.push(e[r].toString(16));
                return t
            };
            let PenState = class PenState {
                constructor(e, t, r, i, s) {
                    this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = e || "white", this.underline = t || !1, this.italics = r || !1, this.background = i || "black", this.flash = s || !1
                }
                reset() {
                    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                }
                setStyles(e) {
                    let t = ["foreground", "underline", "italics", "background", "flash"];
                    for (let r = 0; r < t.length; r++) {
                        let i = t[r];
                        e.hasOwnProperty(i) && (this[i] = e[i])
                    }
                }
                isDefault() {
                    return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                }
                equals(e) {
                    return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
                }
                copy(e) {
                    this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash
                }
                toString() {
                    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                }
            };
            let StyledUnicodeChar = class StyledUnicodeChar {
                constructor(e, t, r, i, s, a) {
                    this.uchar = void 0, this.penState = void 0, this.uchar = e || " ", this.penState = new PenState(t, r, i, s, a)
                }
                reset() {
                    this.uchar = " ", this.penState.reset()
                }
                setChar(e, t) {
                    this.uchar = e, this.penState.copy(t)
                }
                setPenState(e) {
                    this.penState.copy(e)
                }
                equals(e) {
                    return this.uchar === e.uchar && this.penState.equals(e.penState)
                }
                copy(e) {
                    this.uchar = e.uchar, this.penState.copy(e.penState)
                }
                isEmpty() {
                    return " " === this.uchar && this.penState.isDefault()
                }
            };
            let Row = class Row {
                constructor(e) {
                    this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
                    for (let e = 0; e < 100; e++) this.chars.push(new StyledUnicodeChar);
                    this.logger = e, this.pos = 0, this.currPenState = new PenState
                }
                equals(e) {
                    let t = !0;
                    for (let r = 0; r < 100; r++)
                        if (!this.chars[r].equals(e.chars[r])) {
                            t = !1;
                            break
                        }
                    return t
                }
                copy(e) {
                    for (let t = 0; t < 100; t++) this.chars[t].copy(e.chars[t])
                }
                isEmpty() {
                    let e = !0;
                    for (let t = 0; t < 100; t++)
                        if (!this.chars[t].isEmpty()) {
                            e = !1;
                            break
                        }
                    return e
                }
                setCursor(e) {
                    this.pos !== e && (this.pos = e), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > 100 && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = 100)
                }
                moveCursor(e) {
                    let t = this.pos + e;
                    if (e > 1)
                        for (let e = this.pos + 1; e < t + 1; e++) this.chars[e].setPenState(this.currPenState);
                    this.setCursor(t)
                }
                backSpace() {
                    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                }
                insertChar(e) {
                    e >= 144 && this.backSpace();
                    let t = getCharForByte(e);
                    if (this.pos >= 100) {
                        this.logger.log(0, () => "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
                        return
                    }
                    this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1)
                }
                clearFromPos(e) {
                    let t;
                    for (t = e; t < 100; t++) this.chars[t].reset()
                }
                clear() {
                    this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                }
                clearToEndOfRow() {
                    this.clearFromPos(this.pos)
                }
                getTextString() {
                    let e = [],
                        t = !0;
                    for (let r = 0; r < 100; r++) {
                        let i = this.chars[r].uchar;
                        " " !== i && (t = !1), e.push(i)
                    }
                    return t ? "" : e.join("")
                }
                setPenStyles(e) {
                    this.currPenState.setStyles(e);
                    let t = this.chars[this.pos];
                    t.setPenState(this.currPenState)
                }
            };
            let CaptionScreen = class CaptionScreen {
                constructor(e) {
                    this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
                    for (let t = 0; t < 15; t++) this.rows.push(new Row(e));
                    this.logger = e, this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset()
                }
                reset() {
                    for (let e = 0; e < 15; e++) this.rows[e].clear();
                    this.currRow = 14
                }
                equals(e) {
                    let t = !0;
                    for (let r = 0; r < 15; r++)
                        if (!this.rows[r].equals(e.rows[r])) {
                            t = !1;
                            break
                        }
                    return t
                }
                copy(e) {
                    for (let t = 0; t < 15; t++) this.rows[t].copy(e.rows[t])
                }
                isEmpty() {
                    let e = !0;
                    for (let t = 0; t < 15; t++)
                        if (!this.rows[t].isEmpty()) {
                            e = !1;
                            break
                        }
                    return e
                }
                backSpace() {
                    let e = this.rows[this.currRow];
                    e.backSpace()
                }
                clearToEndOfRow() {
                    let e = this.rows[this.currRow];
                    e.clearToEndOfRow()
                }
                insertChar(e) {
                    let t = this.rows[this.currRow];
                    t.insertChar(e)
                }
                setPen(e) {
                    let t = this.rows[this.currRow];
                    t.setPenStyles(e)
                }
                moveCursor(e) {
                    let t = this.rows[this.currRow];
                    t.moveCursor(e)
                }
                setCursor(e) {
                    this.logger.log(2, "setCursor: " + e);
                    let t = this.rows[this.currRow];
                    t.setCursor(e)
                }
                setPAC(e) {
                    this.logger.log(2, () => "pacData = " + JSON.stringify(e));
                    let t = e.row - 1;
                    if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
                        for (let e = 0; e < 15; e++) this.rows[e].clear();
                        let e = this.currRow + 1 - this.nrRollUpRows,
                            r = this.lastOutputScreen;
                        if (r) {
                            let i = r.rows[e].cueStartTime,
                                s = this.logger.time;
                            if (i && null !== s && i < s)
                                for (let i = 0; i < this.nrRollUpRows; i++) this.rows[t - this.nrRollUpRows + i + 1].copy(r.rows[e + i])
                        }
                    }
                    this.currRow = t;
                    let r = this.rows[this.currRow];
                    if (null !== e.indent) {
                        let t = e.indent;
                        r.setCursor(e.indent), e.color = r.chars[Math.max(t - 1, 0)].penState.foreground
                    }
                    let i = {
                        foreground: e.color,
                        underline: e.underline,
                        italics: e.italics,
                        background: "black",
                        flash: !1
                    };
                    this.setPen(i)
                }
                setBkgData(e) {
                    this.logger.log(2, () => "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32)
                }
                setRollUpRows(e) {
                    this.nrRollUpRows = e
                }
                rollUp() {
                    if (null === this.nrRollUpRows) {
                        this.logger.log(3, "roll_up but nrRollUpRows not set yet");
                        return
                    }
                    this.logger.log(1, () => this.getDisplayText());
                    let e = this.currRow + 1 - this.nrRollUpRows,
                        t = this.rows.splice(e, 1)[0];
                    t.clear(), this.rows.splice(this.currRow, 0, t), this.logger.log(2, "Rolling up")
                }
                getDisplayText(e) {
                    e = e || !1;
                    let t = [],
                        r = "",
                        i = -1;
                    for (let r = 0; r < 15; r++) {
                        let s = this.rows[r].getTextString();
                        s && (i = r + 1, e ? t.push("Row " + i + ": '" + s + "'") : t.push(s.trim()))
                    }
                    return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]" : t.join("\n")), r
                }
                getTextAndFormat() {
                    return this.rows
                }
            };
            let Cea608Channel = class Cea608Channel {
                constructor(e, t, r) {
                    this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new CaptionScreen(r), this.nonDisplayedMemory = new CaptionScreen(r), this.lastOutputScreen = new CaptionScreen(r), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = r
                }
                reset() {
                    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                }
                getHandler() {
                    return this.outputFilter
                }
                setHandler(e) {
                    this.outputFilter = e
                }
                setPAC(e) {
                    this.writeScreen.setPAC(e)
                }
                setBkgData(e) {
                    this.writeScreen.setBkgData(e)
                }
                setMode(e) {
                    e !== this.mode && (this.mode = e, this.logger.log(2, () => "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
                }
                insertChars(e) {
                    for (let t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
                    let t = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                    this.logger.log(2, () => t + ": " + this.writeScreen.getDisplayText(!0)), ("MODE_PAINT-ON" === this.mode || "MODE_ROLL-UP" === this.mode) && (this.logger.log(1, () => "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                }
                ccRCL() {
                    this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                }
                ccBS() {
                    this.logger.log(2, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                }
                ccAOF() {}
                ccAON() {}
                ccDER() {
                    this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                }
                ccRU(e) {
                    this.logger.log(2, "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e)
                }
                ccFON() {
                    this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({
                        flash: !0
                    })
                }
                ccRDC() {
                    this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                }
                ccTR() {
                    this.logger.log(2, "TR"), this.setMode("MODE_TEXT")
                }
                ccRTD() {
                    this.logger.log(2, "RTD"), this.setMode("MODE_TEXT")
                }
                ccEDM() {
                    this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
                }
                ccCR() {
                    this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
                }
                ccENM() {
                    this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                }
                ccEOC() {
                    if (this.logger.log(2, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                        let e = this.displayedMemory;
                        this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, () => "DISP: " + this.displayedMemory.getDisplayText())
                    }
                    this.outputDataUpdate(!0)
                }
                ccTO(e) {
                    this.logger.log(2, "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e)
                }
                ccMIDROW(e) {
                    let t = {
                        flash: !1
                    };
                    t.underline = e % 2 == 1, t.italics = e >= 46, t.italics ? t.foreground = "white" : t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][Math.floor(e / 2) - 16], this.logger.log(2, "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t)
                }
                outputDataUpdate(e = !1) {
                    let t = this.logger.time;
                    null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
                }
                cueSplitAtTime(e) {
                    this.outputFilter && !this.displayedMemory.isEmpty() && (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e)
                }
            };
            let Cea608Parser = class Cea608Parser {
                constructor(e, t, r) {
                    this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
                    let i = new CaptionsLogger;
                    this.channels = [null, new Cea608Channel(e, t, i), new Cea608Channel(e + 1, r, i)], this.cmdHistory = createCmdHistory(), this.logger = i
                }
                getHandler(e) {
                    return this.channels[e].getHandler()
                }
                setHandler(e, t) {
                    this.channels[e].setHandler(t)
                }
                addData(e, t) {
                    let r, i, s;
                    let a = !1;
                    this.logger.time = e;
                    for (let e = 0; e < t.length; e += 2)
                        if (i = 127 & t[e], s = 127 & t[e + 1], 0 !== i || 0 !== s) {
                            if (this.logger.log(3, "[" + numArrayToHexArray([t[e], t[e + 1]]) + "] -> (" + numArrayToHexArray([i, s]) + ")"), (r = this.parseCmd(i, s)) || (r = this.parseMidrow(i, s)), r || (r = this.parsePAC(i, s)), r || (r = this.parseBackgroundAttributes(i, s)), !r && (a = this.parseChars(i, s))) {
                                let e = this.currentChannel;
                                if (e && e > 0) {
                                    let t = this.channels[e];
                                    t.insertChars(a)
                                } else this.logger.log(2, "No channel found yet. TEXT-MODE?")
                            }
                            r || a || this.logger.log(2, "Couldn't parse cleaned data " + numArrayToHexArray([i, s]) + " orig: " + numArrayToHexArray([t[e], t[e + 1]]))
                        }
                }
                parseCmd(e, t) {
                    let {
                        cmdHistory: r
                    } = this, i = (20 === e || 28 === e || 21 === e || 29 === e) && t >= 32 && t <= 47, s = (23 === e || 31 === e) && t >= 33 && t <= 35;
                    if (!(i || s)) return !1;
                    if (hasCmdRepeated(e, t, r)) return setLastCmd(null, null, r), this.logger.log(3, "Repeated command (" + numArrayToHexArray([e, t]) + ") is dropped"), !0;
                    let a = 20 === e || 21 === e || 23 === e ? 1 : 2,
                        n = this.channels[a];
                    return 20 === e || 21 === e || 28 === e || 29 === e ? 32 === t ? n.ccRCL() : 33 === t ? n.ccBS() : 34 === t ? n.ccAOF() : 35 === t ? n.ccAON() : 36 === t ? n.ccDER() : 37 === t ? n.ccRU(2) : 38 === t ? n.ccRU(3) : 39 === t ? n.ccRU(4) : 40 === t ? n.ccFON() : 41 === t ? n.ccRDC() : 42 === t ? n.ccTR() : 43 === t ? n.ccRTD() : 44 === t ? n.ccEDM() : 45 === t ? n.ccCR() : 46 === t ? n.ccENM() : 47 === t && n.ccEOC() : n.ccTO(t - 32), setLastCmd(e, t, r), this.currentChannel = a, !0
                }
                parseMidrow(e, t) {
                    let r = 0;
                    if ((17 === e || 25 === e) && t >= 32 && t <= 47) {
                        if ((r = 17 === e ? 1 : 2) !== this.currentChannel) return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
                        let i = this.channels[r];
                        return !!i && (i.ccMIDROW(t), this.logger.log(3, "MIDROW (" + numArrayToHexArray([e, t]) + ")"), !0)
                    }
                    return !1
                }
                parsePAC(e, t) {
                    let r;
                    let i = this.cmdHistory,
                        s = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127,
                        a = (16 === e || 24 === e) && t >= 64 && t <= 95;
                    if (!(s || a)) return !1;
                    if (hasCmdRepeated(e, t, i)) return setLastCmd(null, null, i), !0;
                    let n = e <= 23 ? 1 : 2;
                    r = t >= 64 && t <= 95 ? 1 === n ? eT[e] : ey[e] : 1 === n ? eE[e] : ev[e];
                    let l = this.channels[n];
                    return !!l && (l.setPAC(this.interpretPAC(r, t)), setLastCmd(e, t, i), this.currentChannel = n, !0)
                }
                interpretPAC(e, t) {
                    let r;
                    let i = {
                        color: null,
                        italics: !1,
                        indent: null,
                        underline: !1,
                        row: e
                    };
                    return r = t > 95 ? t - 96 : t - 64, i.underline = (1 & r) == 1, r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2), i
                }
                parseChars(e, t) {
                    let r;
                    let i = null,
                        s = null;
                    if (e >= 25 ? (r = 2, s = e - 8) : (r = 1, s = e), s >= 17 && s <= 19) {
                        let e;
                        e = 17 === s ? t + 80 : 18 === s ? t + 112 : t + 144, this.logger.log(2, "Special char '" + getCharForByte(e) + "' in channel " + r), i = [e]
                    } else e >= 32 && e <= 127 && (i = 0 === t ? [e] : [e, t]);
                    if (i) {
                        let r = numArrayToHexArray(i);
                        this.logger.log(3, "Char codes =  " + r.join(",")), setLastCmd(e, t, this.cmdHistory)
                    }
                    return i
                }
                parseBackgroundAttributes(e, t) {
                    let r;
                    let i = (16 === e || 24 === e) && t >= 32 && t <= 47,
                        s = (23 === e || 31 === e) && t >= 45 && t <= 47;
                    if (!(i || s)) return !1;
                    let a = {};
                    16 === e || 24 === e ? (r = Math.floor((t - 32) / 2), a.background = eS[r], t % 2 == 1 && (a.background = a.background + "_semi")) : 45 === t ? a.background = "transparent" : (a.foreground = "black", 47 === t && (a.underline = !0));
                    let n = e <= 23 ? 1 : 2,
                        l = this.channels[n];
                    return l.setBkgData(a), setLastCmd(e, t, this.cmdHistory), !0
                }
                reset() {
                    for (let e = 0; e < Object.keys(this.channels).length; e++) {
                        let t = this.channels[e];
                        t && t.reset()
                    }
                    this.cmdHistory = createCmdHistory()
                }
                cueSplitAtTime(e) {
                    for (let t = 0; t < this.channels.length; t++) {
                        let r = this.channels[t];
                        r && r.cueSplitAtTime(e)
                    }
                }
            };

            function setLastCmd(e, t, r) {
                r.a = e, r.b = t
            }

            function hasCmdRepeated(e, t, r) {
                return r.a === e && r.b === t
            }

            function createCmdHistory() {
                return {
                    a: null,
                    b: null
                }
            }
            let OutputFilter = class OutputFilter {
                constructor(e, t) {
                    this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e, this.trackName = t
                }
                dispatchCue() {
                    null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null)
                }
                newCue(e, t, r) {
                    (null === this.startTime || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = r, this.timelineController.createCaptionsTrack(this.trackName)
                }
                reset() {
                    this.cueRanges = [], this.startTime = null
                }
            };
            var eA = function() {
                if ("undefined" != typeof self && self.VTTCue) return self.VTTCue;
                let e = ["", "lr", "rl"],
                    t = ["start", "middle", "end", "left", "right"];

                function isAllowedValue(e, t) {
                    if ("string" != typeof t || !Array.isArray(e)) return !1;
                    let r = t.toLowerCase();
                    return !!~e.indexOf(r) && r
                }

                function extend(e, ...t) {
                    let r = 1;
                    for (; r < arguments.length; r++) {
                        let t = arguments[r];
                        for (let r in t) e[r] = t[r]
                    }
                    return e
                }

                function VTTCue(r, i, s) {
                    let a = {
                        enumerable: !0
                    };
                    this.hasBeenReset = !1;
                    let n = "",
                        l = !1,
                        o = r,
                        h = i,
                        d = s,
                        u = null,
                        c = "",
                        f = !0,
                        g = "auto",
                        m = "start",
                        p = 50,
                        T = "middle",
                        E = 50,
                        y = "middle";
                    Object.defineProperty(this, "id", extend({}, a, {
                        get: function() {
                            return n
                        },
                        set: function(e) {
                            n = "" + e
                        }
                    })), Object.defineProperty(this, "pauseOnExit", extend({}, a, {
                        get: function() {
                            return l
                        },
                        set: function(e) {
                            l = !!e
                        }
                    })), Object.defineProperty(this, "startTime", extend({}, a, {
                        get: function() {
                            return o
                        },
                        set: function(e) {
                            if ("number" != typeof e) throw TypeError("Start time must be set to a number.");
                            o = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(this, "endTime", extend({}, a, {
                        get: function() {
                            return h
                        },
                        set: function(e) {
                            if ("number" != typeof e) throw TypeError("End time must be set to a number.");
                            h = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(this, "text", extend({}, a, {
                        get: function() {
                            return d
                        },
                        set: function(e) {
                            d = "" + e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(this, "region", extend({}, a, {
                        get: function() {
                            return u
                        },
                        set: function(e) {
                            u = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(this, "vertical", extend({}, a, {
                        get: function() {
                            return c
                        },
                        set: function(t) {
                            let r = isAllowedValue(e, t);
                            if (!1 === r) throw SyntaxError("An invalid or illegal string was specified.");
                            c = r, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(this, "snapToLines", extend({}, a, {
                        get: function() {
                            return f
                        },
                        set: function(e) {
                            f = !!e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(this, "line", extend({}, a, {
                        get: function() {
                            return g
                        },
                        set: function(e) {
                            if ("number" != typeof e && "auto" !== e) throw SyntaxError("An invalid number or illegal string was specified.");
                            g = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(this, "lineAlign", extend({}, a, {
                        get: function() {
                            return m
                        },
                        set: function(e) {
                            let r = isAllowedValue(t, e);
                            if (!r) throw SyntaxError("An invalid or illegal string was specified.");
                            m = r, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(this, "position", extend({}, a, {
                        get: function() {
                            return p
                        },
                        set: function(e) {
                            if (e < 0 || e > 100) throw Error("Position must be between 0 and 100.");
                            p = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(this, "positionAlign", extend({}, a, {
                        get: function() {
                            return T
                        },
                        set: function(e) {
                            let r = isAllowedValue(t, e);
                            if (!r) throw SyntaxError("An invalid or illegal string was specified.");
                            T = r, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(this, "size", extend({}, a, {
                        get: function() {
                            return E
                        },
                        set: function(e) {
                            if (e < 0 || e > 100) throw Error("Size must be between 0 and 100.");
                            E = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(this, "align", extend({}, a, {
                        get: function() {
                            return y
                        },
                        set: function(e) {
                            let r = isAllowedValue(t, e);
                            if (!r) throw SyntaxError("An invalid or illegal string was specified.");
                            y = r, this.hasBeenReset = !0
                        }
                    })), this.displayState = void 0
                }
                return VTTCue.prototype.getCueAsHTML = function() {
                    let e = self.WebVTT;
                    return e.convertCueToDOMTree(self, this.text)
                }, VTTCue
            }();
            let StringDecoder = class StringDecoder {
                decode(e, t) {
                    if (!e) return "";
                    if ("string" != typeof e) throw Error("Error - expected string data.");
                    return decodeURIComponent(encodeURIComponent(e))
                }
            };

            function parseTimeStamp(e) {
                function computeSeconds(e, t, r, i) {
                    return (0 | e) * 3600 + (0 | t) * 60 + (0 | r) + parseFloat(i || 0)
                }
                let t = e.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
                return t ? parseFloat(t[2]) > 59 ? computeSeconds(t[2], t[3], 0, t[4]) : computeSeconds(t[1], t[2], t[3], t[4]) : null
            }
            let Settings = class Settings {
                constructor() {
                    this.values = Object.create(null)
                }
                set(e, t) {
                    this.get(e) || "" === t || (this.values[e] = t)
                }
                get(e, t, r) {
                    return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t
                }
                has(e) {
                    return e in this.values
                }
                alt(e, t, r) {
                    for (let i = 0; i < r.length; ++i)
                        if (t === r[i]) {
                            this.set(e, t);
                            break
                        }
                }
                integer(e, t) {
                    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
                }
                percent(e, t) {
                    if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
                        let r = parseFloat(t);
                        if (r >= 0 && r <= 100) return this.set(e, r), !0
                    }
                    return !1
                }
            };

            function parseOptions(e, t, r, i) {
                let s = i ? e.split(i) : [e];
                for (let e in s) {
                    if ("string" != typeof s[e]) continue;
                    let i = s[e].split(r);
                    if (2 !== i.length) continue;
                    let a = i[0],
                        n = i[1];
                    t(a, n)
                }
            }
            let eL = new eA(0, 0, ""),
                eR = "middle" === eL.align ? "middle" : "center";

            function fixLineBreaks(e) {
                return e.replace(/<br(?: \/)?>/gi, "\n")
            }
            let VTTParser = class VTTParser {
                constructor() {
                    this.state = "INITIAL", this.buffer = "", this.decoder = new StringDecoder, this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0
                }
                parse(e) {
                    let t = this;

                    function collectNextLine() {
                        let e = t.buffer,
                            r = 0;
                        for (e = fixLineBreaks(e); r < e.length && "\r" !== e[r] && "\n" !== e[r];) ++r;
                        let i = e.slice(0, r);
                        return "\r" === e[r] && ++r, "\n" === e[r] && ++r, t.buffer = e.slice(r), i
                    }
                    e && (t.buffer += t.decoder.decode(e, {
                        stream: !0
                    }));
                    try {
                        let e = "";
                        if ("INITIAL" === t.state) {
                            if (!/\r\n|\n/.test(t.buffer)) return this;
                            e = collectNextLine();
                            let r = e.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                            if (!(null != r && r[0])) throw Error("Malformed WebVTT signature.");
                            t.state = "HEADER"
                        }
                        let i = !1;
                        for (; t.buffer && /\r\n|\n/.test(t.buffer);) switch (i ? i = !1 : e = collectNextLine(), t.state) {
                            case "HEADER":
                                if (/:/.test(e)) {
                                    var r;
                                    r = e, parseOptions(r, function(e, t) {}, /:/)
                                } else e || (t.state = "ID");
                                continue;
                            case "NOTE":
                                e || (t.state = "ID");
                                continue;
                            case "ID":
                                if (/^NOTE($|[ \t])/.test(e)) {
                                    t.state = "NOTE";
                                    break
                                }
                                if (!e) continue;
                                if (t.cue = new eA(0, 0, ""), t.state = "CUE", -1 === e.indexOf("-->")) {
                                    t.cue.id = e;
                                    continue
                                }
                            case "CUE":
                                if (!t.cue) {
                                    t.state = "BADCUE";
                                    continue
                                }
                                try {
                                    ! function(e, t, r) {
                                        let i = e;

                                        function consumeTimeStamp() {
                                            let t = parseTimeStamp(e);
                                            if (null === t) throw Error("Malformed timestamp: " + i);
                                            return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
                                        }

                                        function skipWhitespace() {
                                            e = e.replace(/^\s+/, "")
                                        }
                                        if (skipWhitespace(), t.startTime = consumeTimeStamp(), skipWhitespace(), "-->" !== e.slice(0, 3)) throw Error("Malformed time stamp (time stamps must be separated by '-->'): " + i);
                                        e = e.slice(3), skipWhitespace(), t.endTime = consumeTimeStamp(), skipWhitespace(),
                                            function(e, t) {
                                                let i = new Settings;
                                                parseOptions(e, function(e, t) {
                                                    let s;
                                                    switch (e) {
                                                        case "region":
                                                            for (let s = r.length - 1; s >= 0; s--)
                                                                if (r[s].id === t) {
                                                                    i.set(e, r[s].region);
                                                                    break
                                                                }
                                                            break;
                                                        case "vertical":
                                                            i.alt(e, t, ["rl", "lr"]);
                                                            break;
                                                        case "line":
                                                            s = t.split(","), i.integer(e, s[0]), i.percent(e, s[0]) && i.set("snapToLines", !1), i.alt(e, s[0], ["auto"]), 2 === s.length && i.alt("lineAlign", s[1], ["start", eR, "end"]);
                                                            break;
                                                        case "position":
                                                            s = t.split(","), i.percent(e, s[0]), 2 === s.length && i.alt("positionAlign", s[1], ["start", eR, "end", "line-left", "line-right", "auto"]);
                                                            break;
                                                        case "size":
                                                            i.percent(e, t);
                                                            break;
                                                        case "align":
                                                            i.alt(e, t, ["start", eR, "end", "left", "right"])
                                                    }
                                                }, /:/, /\s/), t.region = i.get("region", null), t.vertical = i.get("vertical", "");
                                                let s = i.get("line", "auto");
                                                "auto" === s && -1 === eL.line && (s = -1), t.line = s, t.lineAlign = i.get("lineAlign", "start"), t.snapToLines = i.get("snapToLines", !0), t.size = i.get("size", 100), t.align = i.get("align", eR);
                                                let a = i.get("position", "auto");
                                                "auto" === a && 50 === eL.position && (a = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50), t.position = a
                                            }(e, t)
                                    }(e, t.cue, t.regionList)
                                } catch (e) {
                                    t.cue = null, t.state = "BADCUE";
                                    continue
                                }
                                t.state = "CUETEXT";
                                continue;
                            case "CUETEXT":
                                {
                                    let r = -1 !== e.indexOf("-->");
                                    if (!e || r && (i = !0)) {
                                        t.oncue && t.cue && t.oncue(t.cue), t.cue = null, t.state = "ID";
                                        continue
                                    }
                                    if (null === t.cue) continue;t.cue.text && (t.cue.text += "\n"),
                                    t.cue.text += e
                                }
                                continue;
                            case "BADCUE":
                                e || (t.state = "ID")
                        }
                    } catch (e) {
                        "CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE"
                    }
                    return this
                }
                flush() {
                    try {
                        if ((this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state || "BADWEBVTT" === this.state) throw Error("Malformed WebVTT signature.")
                    } catch (e) {
                        this.onparsingerror && this.onparsingerror(e)
                    }
                    return this.onflush && this.onflush(), this
                }
            };
            let eI = /\r\n|\n\r|\n|\r/g,
                startsWith = function(e, t, r = 0) {
                    return e.slice(r, r + t.length) === t
                },
                cueString2millis = function(e) {
                    let t = parseInt(e.slice(-3)),
                        r = parseInt(e.slice(-6, -4)),
                        i = parseInt(e.slice(-9, -7)),
                        s = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
                    if (!T(t) || !T(r) || !T(i) || !T(s)) throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
                    return t + (1e3 * r + 6e4 * i + 36e5 * s)
                },
                hash = function(e) {
                    let t = 5381,
                        r = e.length;
                    for (; r;) t = 33 * t ^ e.charCodeAt(--r);
                    return (t >>> 0).toString()
                };

            function generateCueId(e, t, r) {
                return hash(e.toString()) + hash(t.toString()) + hash(r)
            }
            let calculateOffset = function(e, t, r) {
                    let i = e[t],
                        s = e[i.prevCC];
                    if (!s || !s.new && i.new) {
                        e.ccOffset = e.presentationOffset = i.start, i.new = !1;
                        return
                    }
                    for (; null != (a = s) && a.new;) {
                        var a;
                        e.ccOffset += i.start - s.start, i.new = !1, s = e[(i = s).prevCC]
                    }
                    e.presentationOffset = r
                },
                eD = "stpp.ttml.im1t",
                eb = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
                eC = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
                ek = {
                    left: "start",
                    center: "center",
                    right: "end",
                    start: "start",
                    end: "end"
                };

            function parseIMSC1(e, t, r, i) {
                let s = findBox(new Uint8Array(e), ["mdat"]);
                if (0 === s.length) {
                    i(Error("Could not parse IMSC1 mdat"));
                    return
                }
                let a = s.map(e => utf8ArrayToStr(e)),
                    n = function(e, t, r = 1, i = !1) {
                        return toTimescaleFromBase(e, 1, 1 / r, i)
                    }(t.baseTime, 0, t.timescale);
                try {
                    a.forEach(e => r(function(e, t) {
                        let r = new DOMParser,
                            i = r.parseFromString(e, "text/xml"),
                            s = i.getElementsByTagName("tt")[0];
                        if (!s) throw Error("Invalid ttml");
                        let a = {
                                frameRate: 30,
                                subFrameRate: 1,
                                frameRateMultiplier: 0,
                                tickRate: 0
                            },
                            n = Object.keys(a).reduce((e, t) => (e[t] = s.getAttribute(`ttp:${t}`) || a[t], e), {}),
                            l = "preserve" !== s.getAttribute("xml:space"),
                            o = collectionToDictionary(getElementCollection(s, "styling", "style")),
                            h = collectionToDictionary(getElementCollection(s, "layout", "region")),
                            d = getElementCollection(s, "body", "[begin]");
                        return [].map.call(d, e => {
                            let r = function getTextContent(e, t) {
                                return [].slice.call(e.childNodes).reduce((e, r, i) => {
                                    var s;
                                    return "br" === r.nodeName && i ? e + "\n" : null != (s = r.childNodes) && s.length ? getTextContent(r, t) : t ? e + r.textContent.trim().replace(/\s+/g, " ") : e + r.textContent
                                }, "")
                            }(e, l);
                            if (!r || !e.hasAttribute("begin")) return null;
                            let i = parseTtmlTime(e.getAttribute("begin"), n),
                                s = parseTtmlTime(e.getAttribute("dur"), n),
                                a = parseTtmlTime(e.getAttribute("end"), n);
                            if (null === i) throw timestampParsingError(e);
                            if (null === a) {
                                if (null === s) throw timestampParsingError(e);
                                a = i + s
                            }
                            let d = new eA(i - t, a - t, r);
                            d.id = generateCueId(d.startTime, d.endTime, d.text);
                            let u = h[e.getAttribute("region")],
                                c = o[e.getAttribute("style")],
                                f = function(e, t, r) {
                                    let i = "http://www.w3.org/ns/ttml#styling",
                                        s = null,
                                        a = null != e && e.hasAttribute("style") ? e.getAttribute("style") : null;
                                    return a && r.hasOwnProperty(a) && (s = r[a]), ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"].reduce((r, a) => {
                                        let n = getAttributeNS(t, i, a) || getAttributeNS(e, i, a) || getAttributeNS(s, i, a);
                                        return n && (r[a] = n), r
                                    }, {})
                                }(u, c, o),
                                {
                                    textAlign: g
                                } = f;
                            if (g) {
                                let e = ek[g];
                                e && (d.lineAlign = e), d.align = g
                            }
                            return _extends(d, f), d
                        }).filter(e => null !== e)
                    }(e, n)))
                } catch (e) {
                    i(e)
                }
            }

            function getElementCollection(e, t, r) {
                let i = e.getElementsByTagName(t)[0];
                return i ? [].slice.call(i.querySelectorAll(r)) : []
            }

            function collectionToDictionary(e) {
                return e.reduce((e, t) => {
                    let r = t.getAttribute("xml:id");
                    return r && (e[r] = t), e
                }, {})
            }

            function getAttributeNS(e, t, r) {
                return e && e.hasAttributeNS(t, r) ? e.getAttributeNS(t, r) : null
            }

            function timestampParsingError(e) {
                return Error(`Could not parse ttml timestamp ${e}`)
            }

            function parseTtmlTime(e, t) {
                if (!e) return null;
                let r = parseTimeStamp(e);
                return null === r && (eb.test(e) ? r = function(e, t) {
                    let r = eb.exec(e),
                        i = (0 | r[4]) + (0 | r[5]) / t.subFrameRate;
                    return (0 | r[1]) * 3600 + (0 | r[2]) * 60 + (0 | r[3]) + i / t.frameRate
                }(e, t) : eC.test(e) && (r = function(e, t) {
                    let r = eC.exec(e),
                        i = Number(r[1]),
                        s = r[2];
                    switch (s) {
                        case "h":
                            return 3600 * i;
                        case "m":
                            return 60 * i;
                        case "ms":
                            return 1e3 * i;
                        case "f":
                            return i / t.frameRate;
                        case "t":
                            return i / t.tickRate
                    }
                    return i
                }(e, t))), r
            }

            function newVTTCCs() {
                return {
                    ccOffset: 0,
                    presentationOffset: 0,
                    0: {
                        start: 0,
                        prevCC: -1,
                        new: !0
                    }
                }
            }
            let CapLevelController = class CapLevelController {
                constructor(e) {
                    this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = e, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners()
                }
                setStreamController(e) {
                    this.streamController = e
                }
                destroy() {
                    this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null
                }
                registerListeners() {
                    let {
                        hls: e
                    } = this;
                    e.on(E.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.on(E.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(E.MANIFEST_PARSED, this.onManifestParsed, this), e.on(E.BUFFER_CODECS, this.onBufferCodecs, this), e.on(E.MEDIA_DETACHING, this.onMediaDetaching, this)
                }
                unregisterListener() {
                    let {
                        hls: e
                    } = this;
                    e.off(E.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.off(E.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(E.MANIFEST_PARSED, this.onManifestParsed, this), e.off(E.BUFFER_CODECS, this.onBufferCodecs, this), e.off(E.MEDIA_DETACHING, this.onMediaDetaching, this)
                }
                onFpsDropLevelCapping(e, t) {
                    let r = this.hls.levels[t.droppedLevel];
                    this.isLevelAllowed(r) && this.restrictedLevels.push({
                        bitrate: r.bitrate,
                        height: r.height,
                        width: r.width
                    })
                }
                onMediaAttaching(e, t) {
                    this.media = t.media instanceof HTMLVideoElement ? t.media : null, this.clientRect = null
                }
                onManifestParsed(e, t) {
                    let r = this.hls;
                    this.restrictedLevels = [], this.firstLevel = t.firstLevel, r.config.capLevelToPlayerSize && t.video && this.startCapping()
                }
                onBufferCodecs(e, t) {
                    let r = this.hls;
                    r.config.capLevelToPlayerSize && t.video && this.startCapping()
                }
                onMediaDetaching() {
                    this.stopCapping()
                }
                detectPlayerSize() {
                    if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
                        let e = this.hls.levels;
                        if (e.length) {
                            let t = this.hls;
                            t.autoLevelCapping = this.getMaxLevel(e.length - 1), t.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping
                        }
                    }
                }
                getMaxLevel(e) {
                    let t = this.hls.levels;
                    if (!t.length) return -1;
                    let r = t.filter((t, r) => this.isLevelAllowed(t) && r <= e);
                    return this.clientRect = null, CapLevelController.getMaxLevelByMediaSize(r, this.mediaWidth, this.mediaHeight)
                }
                startCapping() {
                    this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                }
                stopCapping() {
                    this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0)
                }
                getDimensions() {
                    if (this.clientRect) return this.clientRect;
                    let e = this.media,
                        t = {
                            width: 0,
                            height: 0
                        };
                    if (e) {
                        let r = e.getBoundingClientRect();
                        t.width = r.width, t.height = r.height, t.width || t.height || (t.width = r.right - r.left || e.width || 0, t.height = r.bottom - r.top || e.height || 0)
                    }
                    return this.clientRect = t, t
                }
                get mediaWidth() {
                    return this.getDimensions().width * this.contentScaleFactor
                }
                get mediaHeight() {
                    return this.getDimensions().height * this.contentScaleFactor
                }
                get contentScaleFactor() {
                    let e = 1;
                    if (!this.hls.config.ignoreDevicePixelRatio) try {
                        e = self.devicePixelRatio
                    } catch (e) {}
                    return e
                }
                isLevelAllowed(e) {
                    let t = this.restrictedLevels;
                    return !t.some(t => e.bitrate === t.bitrate && e.width === t.width && e.height === t.height)
                }
                static getMaxLevelByMediaSize(e, t, r) {
                    if (!(null != e && e.length)) return -1;
                    let atGreatestBandwidth = (e, t) => !t || e.width !== t.width || e.height !== t.height,
                        i = e.length - 1;
                    for (let s = 0; s < e.length; s += 1) {
                        let a = e[s];
                        if ((a.width >= t || a.height >= r) && atGreatestBandwidth(a, e[s + 1])) {
                            i = s;
                            break
                        }
                    }
                    return i
                }
            };
            let eP = "[eme]";
            let EMEController = class EMEController {
                constructor(e) {
                    this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = EMEController.CDMCleanupPromise ? [EMEController.CDMCleanupPromise] : [], this.onMediaEncrypted = this._onMediaEncrypted.bind(this), this.onWaitingForKey = this._onWaitingForKey.bind(this), this.debug = L.debug.bind(L, eP), this.log = L.log.bind(L, eP), this.warn = L.warn.bind(L, eP), this.error = L.error.bind(L, eP), this.hls = e, this.config = e.config, this.registerListeners()
                }
                destroy() {
                    this.unregisterListeners(), this.onMediaDetached();
                    let e = this.config;
                    e.requestMediaKeySystemAccessFunc = null, e.licenseXhrSetup = e.licenseResponseCallback = void 0, e.drmSystems = e.drmSystemOptions = {}, this.hls = this.onMediaEncrypted = this.onWaitingForKey = this.keyIdToKeySessionPromise = null, this.config = null
                }
                registerListeners() {
                    this.hls.on(E.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(E.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(E.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(E.MANIFEST_LOADED, this.onManifestLoaded, this)
                }
                unregisterListeners() {
                    this.hls.off(E.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(E.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(E.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(E.MANIFEST_LOADED, this.onManifestLoaded, this)
                }
                getLicenseServerUrl(e) {
                    let {
                        drmSystems: t,
                        widevineLicenseUrl: r
                    } = this.config, i = t[e];
                    if (i) return i.licenseUrl;
                    if (e === b.WIDEVINE && r) return r;
                    throw Error(`no license server URL configured for key-system "${e}"`)
                }
                getServerCertificateUrl(e) {
                    let {
                        drmSystems: t
                    } = this.config, r = t[e];
                    if (r) return r.serverCertificateUrl;
                    this.log(`No Server Certificate in config.drmSystems["${e}"]`)
                }
                attemptKeySystemAccess(e) {
                    let t = this.hls.levels,
                        uniqueCodec = (e, t, r) => !!e && r.indexOf(e) === t,
                        r = t.map(e => e.audioCodec).filter(uniqueCodec),
                        i = t.map(e => e.videoCodec).filter(uniqueCodec);
                    return r.length + i.length === 0 && i.push("avc1.42e01e"), new Promise((t, s) => {
                        let attempt = e => {
                            let a = e.shift();
                            this.getMediaKeysPromise(a, r, i).then(e => t({
                                keySystem: a,
                                mediaKeys: e
                            })).catch(t => {
                                e.length ? attempt(e) : t instanceof EMEKeyError ? s(t) : s(new EMEKeyError({
                                    type: y.KEY_SYSTEM_ERROR,
                                    details: v.KEY_SYSTEM_NO_ACCESS,
                                    error: t,
                                    fatal: !0
                                }, t.message))
                            })
                        };
                        attempt(e)
                    })
                }
                requestMediaKeySystemAccess(e, t) {
                    let {
                        requestMediaKeySystemAccessFunc: r
                    } = this.config;
                    if ("function" != typeof r) {
                        let e = `Configured requestMediaKeySystemAccess is not a function ${r}`;
                        return null === P && "http:" === self.location.protocol && (e = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(Error(e))
                    }
                    return r(e, t)
                }
                getMediaKeysPromise(e, t, r) {
                    let i = function(e, t, r, i) {
                            let s;
                            switch (e) {
                                case b.FAIRPLAY:
                                    s = ["cenc", "sinf"];
                                    break;
                                case b.WIDEVINE:
                                case b.PLAYREADY:
                                    s = ["cenc"];
                                    break;
                                case b.CLEARKEY:
                                    s = ["cenc", "keyids"];
                                    break;
                                default:
                                    throw Error(`Unknown key-system: ${e}`)
                            }
                            return function(e, t, r, i) {
                                let s = {
                                    initDataTypes: e,
                                    persistentState: i.persistentState || "not-allowed",
                                    distinctiveIdentifier: i.distinctiveIdentifier || "not-allowed",
                                    sessionTypes: i.sessionTypes || [i.sessionType || "temporary"],
                                    audioCapabilities: t.map(e => ({
                                        contentType: `audio/mp4; codecs="${e}"`,
                                        robustness: i.audioRobustness || "",
                                        encryptionScheme: i.audioEncryptionScheme || null
                                    })),
                                    videoCapabilities: r.map(e => ({
                                        contentType: `video/mp4; codecs="${e}"`,
                                        robustness: i.videoRobustness || "",
                                        encryptionScheme: i.videoEncryptionScheme || null
                                    }))
                                };
                                return [s]
                            }(s, t, r, i)
                        }(e, t, r, this.config.drmSystemOptions),
                        s = this.keySystemAccessPromises[e],
                        a = null == s ? void 0 : s.keySystemAccess;
                    if (!a) {
                        this.log(`Requesting encrypted media "${e}" key-system access with config: ${JSON.stringify(i)}`), a = this.requestMediaKeySystemAccess(e, i);
                        let t = this.keySystemAccessPromises[e] = {
                            keySystemAccess: a
                        };
                        return a.catch(t => {
                            this.log(`Failed to obtain access to key-system "${e}": ${t}`)
                        }), a.then(r => {
                            this.log(`Access for key-system "${r.keySystem}" obtained`);
                            let i = this.fetchServerCertificate(e);
                            return this.log(`Create media-keys for "${e}"`), t.mediaKeys = r.createMediaKeys().then(t => (this.log(`Media-keys created for "${e}"`), i.then(r => r ? this.setMediaKeysServerCertificate(t, e, r) : t))), t.mediaKeys.catch(t => {
                                this.error(`Failed to create media-keys for "${e}"}: ${t}`)
                            }), t.mediaKeys
                        })
                    }
                    return a.then(() => s.mediaKeys)
                }
                createMediaKeySessionContext({
                    decryptdata: e,
                    keySystem: t,
                    mediaKeys: r
                }) {
                    this.log(`Creating key-system session "${t}" keyId: ${_.hexDump(e.keyId||[])}`);
                    let i = r.createSession(),
                        s = {
                            decryptdata: e,
                            keySystem: t,
                            mediaKeys: r,
                            mediaKeysSession: i,
                            keyStatus: "status-pending"
                        };
                    return this.mediaKeySessions.push(s), s
                }
                renewKeySession(e) {
                    let t = e.decryptdata;
                    if (t.pssh) {
                        let r = this.createMediaKeySessionContext(e),
                            i = this.getKeyIdString(t);
                        this.keyIdToKeySessionPromise[i] = this.generateRequestWithPreferredKeySession(r, "cenc", t.pssh, "expired")
                    } else this.warn("Could not renew expired session. Missing pssh initData.");
                    this.removeSession(e)
                }
                getKeyIdString(e) {
                    if (!e) throw Error("Could not read keyId of undefined decryptdata");
                    if (null === e.keyId) throw Error("keyId is null");
                    return _.hexDump(e.keyId)
                }
                updateKeySession(e, t) {
                    var r;
                    let i = e.mediaKeysSession;
                    return this.log(`Updating key-session "${i.sessionId}" for keyID ${_.hexDump((null==(r=e.decryptdata)?void 0:r.keyId)||[])}
      } (data length: ${t?t.byteLength:t})`), i.update(t)
                }
                selectKeySystemFormat(e) {
                    let t = Object.keys(e.levelkeys || {});
                    return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(t)), this.keyFormatPromise
                }
                getKeyFormatPromise(e) {
                    return new Promise((t, r) => {
                        let i = getKeySystemsForConfig(this.config),
                            s = e.map(keySystemFormatToKeySystemDomain).filter(e => !!e && -1 !== i.indexOf(e));
                        return this.getKeySystemSelectionPromise(s).then(({
                            keySystem: e
                        }) => {
                            let i = keySystemDomainToKeySystemFormat(e);
                            i ? t(i) : r(Error(`Unable to find format for key-system "${e}"`))
                        }).catch(r)
                    })
                }
                loadKey(e) {
                    let t = e.keyInfo.decryptdata,
                        r = this.getKeyIdString(t),
                        i = `(keyId: ${r} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
                    this.log(`Starting session for key ${i}`);
                    let s = this.keyIdToKeySessionPromise[r];
                    return s || (s = this.keyIdToKeySessionPromise[r] = this.getKeySystemForKeyPromise(t).then(({
                        keySystem: r,
                        mediaKeys: s
                    }) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${i}`), this.attemptSetMediaKeys(r, s).then(() => {
                        this.throwIfDestroyed();
                        let e = this.createMediaKeySessionContext({
                            keySystem: r,
                            mediaKeys: s,
                            decryptdata: t
                        });
                        return this.generateRequestWithPreferredKeySession(e, "cenc", t.pssh, "playlist-key")
                    })))).catch(e => this.handleError(e)), s
                }
                throwIfDestroyed(e = "Invalid state") {
                    if (!this.hls) throw Error("invalid state")
                }
                handleError(e) {
                    this.hls && (this.error(e.message), e instanceof EMEKeyError ? this.hls.trigger(E.ERROR, e.data) : this.hls.trigger(E.ERROR, {
                        type: y.KEY_SYSTEM_ERROR,
                        details: v.KEY_SYSTEM_NO_KEYS,
                        error: e,
                        fatal: !0
                    }))
                }
                getKeySystemForKeyPromise(e) {
                    let t = this.getKeyIdString(e),
                        r = this.keyIdToKeySessionPromise[t];
                    if (!r) {
                        let t = keySystemFormatToKeySystemDomain(e.keyFormat),
                            r = t ? [t] : getKeySystemsForConfig(this.config);
                        return this.attemptKeySystemAccess(r)
                    }
                    return r
                }
                getKeySystemSelectionPromise(e) {
                    if (e.length || (e = getKeySystemsForConfig(this.config)), 0 === e.length) throw new EMEKeyError({
                        type: y.KEY_SYSTEM_ERROR,
                        details: v.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
                        fatal: !0
                    }, `Missing key-system license configuration options ${JSON.stringify({drmSystems:this.config.drmSystems})}`);
                    return this.attemptKeySystemAccess(e)
                }
                _onMediaEncrypted(e) {
                    let t, r;
                    let {
                        initDataType: i,
                        initData: s
                    } = e;
                    if (this.debug(`"${e.type}" event: init data type: "${i}"`), null === s) return;
                    if ("sinf" === i && this.config.drmSystems[b.FAIRPLAY]) {
                        let e = bin2str(new Uint8Array(s));
                        try {
                            let i = base64Decode(JSON.parse(e).sinf),
                                s = parseSinf(new Uint8Array(i));
                            if (!s) return;
                            t = s.subarray(8, 24), r = b.FAIRPLAY
                        } catch (e) {
                            this.warn('Failed to parse sinf "encrypted" event message initData');
                            return
                        }
                    } else {
                        let e = function(e) {
                            if (!(e instanceof ArrayBuffer) || e.byteLength < 32) return null;
                            let t = {
                                    version: 0,
                                    systemId: "",
                                    kids: null,
                                    data: null
                                },
                                r = new DataView(e),
                                i = r.getUint32(0);
                            if (e.byteLength !== i && i > 44) return null;
                            let s = r.getUint32(4);
                            if (1886614376 !== s || (t.version = r.getUint32(8) >>> 24, t.version > 1)) return null;
                            t.systemId = _.hexDump(new Uint8Array(e, 12, 16));
                            let a = r.getUint32(28);
                            if (0 === t.version) {
                                if (i - 32 < a) return null;
                                t.data = new Uint8Array(e, 32, a)
                            } else if (1 === t.version) {
                                t.kids = [];
                                for (let r = 0; r < a; r++) t.kids.push(new Uint8Array(e, 32 + 16 * r, 16))
                            }
                            return t
                        }(s);
                        if (null === e) return;
                        0 === e.version && e.systemId === k.WIDEVINE && e.data && (t = e.data.subarray(8, 24)), r = function(e) {
                            if (e === k.WIDEVINE) return b.WIDEVINE
                        }(e.systemId)
                    }
                    if (!r || !t) return;
                    let a = _.hexDump(t),
                        {
                            keyIdToKeySessionPromise: n,
                            mediaKeySessions: l
                        } = this,
                        o = n[a];
                    for (let e = 0; e < l.length; e++) {
                        let r = l[e],
                            h = r.decryptdata;
                        if (h.pssh || !h.keyId) continue;
                        let d = _.hexDump(h.keyId);
                        if (a === d || -1 !== h.uri.replace(/-/g, "").indexOf(a)) {
                            o = n[d], delete n[d], h.pssh = new Uint8Array(s), h.keyId = t, o = n[a] = o.then(() => this.generateRequestWithPreferredKeySession(r, i, s, "encrypted-event-key-match"));
                            break
                        }
                    }
                    o || (o = n[a] = this.getKeySystemSelectionPromise([r]).then(({
                        keySystem: e,
                        mediaKeys: r
                    }) => {
                        var n;
                        this.throwIfDestroyed();
                        let l = new LevelKey("ISO-23001-7", a, null != (n = keySystemDomainToKeySystemFormat(e)) ? n : "");
                        return l.pssh = new Uint8Array(s), l.keyId = t, this.attemptSetMediaKeys(e, r).then(() => {
                            this.throwIfDestroyed();
                            let t = this.createMediaKeySessionContext({
                                decryptdata: l,
                                keySystem: e,
                                mediaKeys: r
                            });
                            return this.generateRequestWithPreferredKeySession(t, i, s, "encrypted-event-no-match")
                        })
                    })), o.catch(e => this.handleError(e))
                }
                _onWaitingForKey(e) {
                    this.log(`"${e.type}" event`)
                }
                attemptSetMediaKeys(e, t) {
                    let r = this.setMediaKeysQueue.slice();
                    this.log(`Setting media-keys for "${e}"`);
                    let i = Promise.all(r).then(() => {
                        if (!this.media) throw Error("Attempted to set mediaKeys without media element attached");
                        return this.media.setMediaKeys(t)
                    });
                    return this.setMediaKeysQueue.push(i), i.then(() => {
                        this.log(`Media-keys set for "${e}"`), r.push(i), this.setMediaKeysQueue = this.setMediaKeysQueue.filter(e => -1 === r.indexOf(e))
                    })
                }
                generateRequestWithPreferredKeySession(e, t, r, i) {
                    var s, a, n;
                    let l = null == (s = this.config.drmSystems) ? void 0 : null == (a = s[e.keySystem]) ? void 0 : a.generateRequest;
                    if (l) try {
                        let i = l.call(this.hls, t, r, e);
                        if (!i) throw Error("Invalid response from configured generateRequest filter");
                        t = i.initDataType, r = e.decryptdata.pssh = i.initData ? new Uint8Array(i.initData) : null
                    } catch (e) {
                        if (this.warn(e.message), null != (n = this.hls) && n.config.debug) throw e
                    }
                    if (null === r) return this.log(`Skipping key-session request for "${i}" (no initData)`), Promise.resolve(e);
                    let o = this.getKeyIdString(e.decryptdata);
                    this.log(`Generating key-session request for "${i}": ${o} (init data type: ${t} length: ${r?r.byteLength:null})`);
                    let h = new ec;
                    e.mediaKeysSession.onmessage = t => {
                        let r = e.mediaKeysSession;
                        if (!r) {
                            h.emit("error", Error("invalid state"));
                            return
                        }
                        let {
                            messageType: i,
                            message: s
                        } = t;
                        this.log(`"${i}" message event for session "${r.sessionId}" message size: ${s.byteLength}`), "license-request" === i || "license-renewal" === i ? this.renewLicense(e, s).catch(e => {
                            this.handleError(e), h.emit("error", e)
                        }) : "license-release" === i ? e.keySystem === b.FAIRPLAY && (this.updateKeySession(e, strToUtf8array("acknowledged")), this.removeSession(e)) : this.warn(`unhandled media key message type "${i}"`)
                    }, e.mediaKeysSession.onkeystatuseschange = t => {
                        let r = e.mediaKeysSession;
                        if (!r) {
                            h.emit("error", Error("invalid state"));
                            return
                        }
                        this.onKeyStatusChange(e);
                        let i = e.keyStatus;
                        h.emit("keyStatus", i), "expired" === i && (this.warn(`${e.keySystem} expired for key ${o}`), this.renewKeySession(e))
                    };
                    let d = new Promise((e, t) => {
                        h.on("error", t), h.on("keyStatus", r => {
                            r.startsWith("usable") ? e() : "output-restricted" === r ? t(new EMEKeyError({
                                type: y.KEY_SYSTEM_ERROR,
                                details: v.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
                                fatal: !1
                            }, "HDCP level output restricted")) : "internal-error" === r ? t(new EMEKeyError({
                                type: y.KEY_SYSTEM_ERROR,
                                details: v.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
                                fatal: !0
                            }, `key status changed to "${r}"`)) : "expired" === r ? t(Error("key expired while generating request")) : this.warn(`unhandled key status change "${r}"`)
                        })
                    });
                    return e.mediaKeysSession.generateRequest(t, r).then(() => {
                        var t;
                        this.log(`Request generated for key-session "${null==(t=e.mediaKeysSession)?void 0:t.sessionId}" keyId: ${o}`)
                    }).catch(e => {
                        throw new EMEKeyError({
                            type: y.KEY_SYSTEM_ERROR,
                            details: v.KEY_SYSTEM_NO_SESSION,
                            error: e,
                            fatal: !1
                        }, `Error generating key-session request: ${e}`)
                    }).then(() => d).catch(t => {
                        throw h.removeAllListeners(), this.removeSession(e), t
                    }).then(() => (h.removeAllListeners(), e))
                }
                onKeyStatusChange(e) {
                    e.mediaKeysSession.keyStatuses.forEach((t, r) => {
                        this.log(`key status change "${t}" for keyStatuses keyId: ${_.hexDump("buffer"in r?new Uint8Array(r.buffer,r.byteOffset,r.byteLength):new Uint8Array(r))} session keyId: ${_.hexDump(new Uint8Array(e.decryptdata.keyId||[]))} uri: ${e.decryptdata.uri}`), e.keyStatus = t
                    })
                }
                fetchServerCertificate(e) {
                    let t = this.config,
                        r = t.loader,
                        i = new r(t),
                        s = this.getServerCertificateUrl(e);
                    return s ? (this.log(`Fetching serverCertificate for "${e}"`), new Promise((r, a) => {
                        let n = {
                                responseType: "arraybuffer",
                                url: s
                            },
                            l = t.certLoadPolicy.default,
                            o = {
                                loadPolicy: l,
                                timeout: l.maxLoadTimeMs,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: 0
                            };
                        i.load(n, o, {
                            onSuccess: (e, t, i, s) => {
                                r(e.data)
                            },
                            onError: (t, r, i, l) => {
                                a(new EMEKeyError({
                                    type: y.KEY_SYSTEM_ERROR,
                                    details: v.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                                    fatal: !0,
                                    networkDetails: i,
                                    response: _objectSpread2({
                                        url: n.url,
                                        data: void 0
                                    }, t)
                                }, `"${e}" certificate request failed (${s}). Status: ${t.code} (${t.text})`))
                            },
                            onTimeout: (t, r, i) => {
                                a(new EMEKeyError({
                                    type: y.KEY_SYSTEM_ERROR,
                                    details: v.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                                    fatal: !0,
                                    networkDetails: i,
                                    response: {
                                        url: n.url,
                                        data: void 0
                                    }
                                }, `"${e}" certificate request timed out (${s})`))
                            },
                            onAbort: (e, t, r) => {
                                a(Error("aborted"))
                            }
                        })
                    })) : Promise.resolve()
                }
                setMediaKeysServerCertificate(e, t, r) {
                    return new Promise((i, s) => {
                        e.setServerCertificate(r).then(s => {
                            this.log(`setServerCertificate ${s?"success":"not supported by CDM"} (${null==r?void 0:r.byteLength}) on "${t}"`), i(e)
                        }).catch(e => {
                            s(new EMEKeyError({
                                type: y.KEY_SYSTEM_ERROR,
                                details: v.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
                                error: e,
                                fatal: !0
                            }, e.message))
                        })
                    })
                }
                renewLicense(e, t) {
                    return this.requestLicense(e, new Uint8Array(t)).then(t => this.updateKeySession(e, new Uint8Array(t)).catch(e => {
                        throw new EMEKeyError({
                            type: y.KEY_SYSTEM_ERROR,
                            details: v.KEY_SYSTEM_SESSION_UPDATE_FAILED,
                            error: e,
                            fatal: !0
                        }, e.message)
                    }))
                }
                setupLicenseXHR(e, t, r, i) {
                    let s = this.config.licenseXhrSetup;
                    return s ? Promise.resolve().then(() => {
                        if (!r.decryptdata) throw Error("Key removed");
                        return s.call(this.hls, e, t, r, i)
                    }).catch(a => {
                        if (!r.decryptdata) throw a;
                        return e.open("POST", t, !0), s.call(this.hls, e, t, r, i)
                    }).then(r => {
                        e.readyState || e.open("POST", t, !0);
                        let s = r || i;
                        return {
                            xhr: e,
                            licenseChallenge: s
                        }
                    }) : (e.open("POST", t, !0), Promise.resolve({
                        xhr: e,
                        licenseChallenge: i
                    }))
                }
                requestLicense(e, t) {
                    let r = this.config.keyLoadPolicy.default;
                    return new Promise((i, s) => {
                        let a = this.getLicenseServerUrl(e.keySystem);
                        this.log(`Sending license request to URL: ${a}`);
                        let n = new XMLHttpRequest;
                        n.responseType = "arraybuffer", n.onreadystatechange = () => {
                            if (!this.hls || !e.mediaKeysSession) return s(Error("invalid state"));
                            if (4 === n.readyState) {
                                if (200 === n.status) {
                                    this._requestLicenseFailureCount = 0;
                                    let t = n.response;
                                    this.log(`License received ${t instanceof ArrayBuffer?t.byteLength:t}`);
                                    let r = this.config.licenseResponseCallback;
                                    if (r) try {
                                        t = r.call(this.hls, n, a, e)
                                    } catch (e) {
                                        this.error(e)
                                    }
                                    i(t)
                                } else {
                                    let l = r.errorRetry,
                                        o = l ? l.maxNumRetry : 0;
                                    if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > o || n.status >= 400 && n.status < 500) s(new EMEKeyError({
                                        type: y.KEY_SYSTEM_ERROR,
                                        details: v.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                        fatal: !0,
                                        networkDetails: n,
                                        response: {
                                            url: a,
                                            data: void 0,
                                            code: n.status,
                                            text: n.statusText
                                        }
                                    }, `License Request XHR failed (${a}). Status: ${n.status} (${n.statusText})`));
                                    else {
                                        let r = o - this._requestLicenseFailureCount + 1;
                                        this.warn(`Retrying license request, ${r} attempts left`), this.requestLicense(e, t).then(i, s)
                                    }
                                }
                            }
                        }, e.licenseXhr && e.licenseXhr.readyState !== XMLHttpRequest.DONE && e.licenseXhr.abort(), e.licenseXhr = n, this.setupLicenseXHR(n, a, e, t).then(({
                            xhr: e,
                            licenseChallenge: t
                        }) => {
                            e.send(t)
                        })
                    })
                }
                onMediaAttached(e, t) {
                    if (!this.config.emeEnabled) return;
                    let r = t.media;
                    this.media = r, r.addEventListener("encrypted", this.onMediaEncrypted), r.addEventListener("waitingforkey", this.onWaitingForKey)
                }
                onMediaDetached() {
                    let e = this.media,
                        t = this.mediaKeySessions;
                    e && (e.removeEventListener("encrypted", this.onMediaEncrypted), e.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null), this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, LevelKey.clearKeyUriToKeyIdMap();
                    let r = t.length;
                    EMEController.CDMCleanupPromise = Promise.all(t.map(e => this.removeSession(e)).concat(null == e ? void 0 : e.setMediaKeys(null).catch(t => {
                        this.log(`Could not clear media keys: ${t}. media.src: ${null==e?void 0:e.src}`)
                    }))).then(() => {
                        r && (this.log("finished closing key sessions and clearing media keys"), t.length = 0)
                    }).catch(t => {
                        this.log(`Could not close sessions and clear media keys: ${t}. media.src: ${null==e?void 0:e.src}`)
                    })
                }
                onManifestLoading() {
                    this.keyFormatPromise = null
                }
                onManifestLoaded(e, {
                    sessionKeys: t
                }) {
                    if (t && this.config.emeEnabled && !this.keyFormatPromise) {
                        let e = t.reduce((e, t) => (-1 === e.indexOf(t.keyFormat) && e.push(t.keyFormat), e), []);
                        this.log(`Selecting key-system from session-keys ${e.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(e)
                    }
                }
                removeSession(e) {
                    let {
                        mediaKeysSession: t,
                        licenseXhr: r
                    } = e;
                    if (t) {
                        this.log(`Remove licenses and keys and close session ${t.sessionId}`), t.onmessage = null, t.onkeystatuseschange = null, r && r.readyState !== XMLHttpRequest.DONE && r.abort(), e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0;
                        let i = this.mediaKeySessions.indexOf(e);
                        return i > -1 && this.mediaKeySessions.splice(i, 1), t.remove().catch(e => {
                            this.log(`Could not remove session: ${e}`)
                        }).then(() => t.close()).catch(e => {
                            this.log(`Could not close session: ${e}`)
                        })
                    }
                }
            };
            EMEController.CDMCleanupPromise = void 0;
            let EMEKeyError = class EMEKeyError extends Error {
                constructor(e, t) {
                    super(t), this.data = void 0, e.error || (e.error = Error(t)), this.data = e, e.err = e.error
                }
            };
            var e_ = {
                MANIFEST: "m",
                AUDIO: "a",
                VIDEO: "v",
                MUXED: "av",
                INIT: "i",
                TIMED_TEXT: "tt"
            };
            let CMCDController = class CMCDController {
                constructor(e) {
                    this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = () => {
                        this.initialized && (this.starved = !0), this.buffering = !0
                    }, this.onPlaying = () => {
                        this.initialized || (this.initialized = !0), this.buffering = !1
                    }, this.applyPlaylistData = e => {
                        try {
                            this.apply(e, {
                                ot: e_.MANIFEST,
                                su: !this.initialized
                            })
                        } catch (e) {
                            L.warn("Could not generate manifest CMCD data.", e)
                        }
                    }, this.applyFragmentData = e => {
                        try {
                            let t = e.frag,
                                r = this.hls.levels[t.level],
                                i = this.getObjectType(t),
                                s = {
                                    d: 1e3 * t.duration,
                                    ot: i
                                };
                            (i === e_.VIDEO || i === e_.AUDIO || i == e_.MUXED) && (s.br = r.bitrate / 1e3, s.tb = this.getTopBandwidth(i) / 1e3, s.bl = this.getBufferLength(i)), this.apply(e, s)
                        } catch (e) {
                            L.warn("Could not generate segment CMCD data.", e)
                        }
                    }, this.hls = e;
                    let t = this.config = e.config,
                        {
                            cmcd: r
                        } = t;
                    null != r && (t.pLoader = this.createPlaylistLoader(), t.fLoader = this.createFragmentLoader(), this.sid = r.sessionId || CMCDController.uuid(), this.cid = r.contentId, this.useHeaders = !0 === r.useHeaders, this.registerListeners())
                }
                registerListeners() {
                    let e = this.hls;
                    e.on(E.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(E.MEDIA_DETACHED, this.onMediaDetached, this), e.on(E.BUFFER_CREATED, this.onBufferCreated, this)
                }
                unregisterListeners() {
                    let e = this.hls;
                    e.off(E.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(E.MEDIA_DETACHED, this.onMediaDetached, this), e.off(E.BUFFER_CREATED, this.onBufferCreated, this)
                }
                destroy() {
                    this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null
                }
                onMediaAttached(e, t) {
                    this.media = t.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying)
                }
                onMediaDetached() {
                    this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null)
                }
                onBufferCreated(e, t) {
                    var r, i;
                    this.audioBuffer = null == (r = t.tracks.audio) ? void 0 : r.buffer, this.videoBuffer = null == (i = t.tracks.video) ? void 0 : i.buffer
                }
                createData() {
                    var e;
                    return {
                        v: 1,
                        sf: "h",
                        sid: this.sid,
                        cid: this.cid,
                        pr: null == (e = this.media) ? void 0 : e.playbackRate,
                        mtp: this.hls.bandwidthEstimate / 1e3
                    }
                }
                apply(e, t = {}) {
                    _extends(t, this.createData());
                    let r = t.ot === e_.INIT || t.ot === e_.VIDEO || t.ot === e_.MUXED;
                    if (this.starved && r && (t.bs = !0, t.su = !0, this.starved = !1), null == t.su && (t.su = this.buffering), this.useHeaders) {
                        let r = CMCDController.toHeaders(t);
                        if (!Object.keys(r).length) return;
                        e.headers || (e.headers = {}), _extends(e.headers, r)
                    } else {
                        let r = CMCDController.toQuery(t);
                        if (!r) return;
                        e.url = CMCDController.appendQueryToUri(e.url, r)
                    }
                }
                getObjectType(e) {
                    let {
                        type: t
                    } = e;
                    return "subtitle" === t ? e_.TIMED_TEXT : "initSegment" === e.sn ? e_.INIT : "audio" === t ? e_.AUDIO : "main" === t ? this.hls.audioTracks.length ? e_.VIDEO : e_.MUXED : void 0
                }
                getTopBandwidth(e) {
                    let t, r = 0,
                        i = this.hls;
                    if (e === e_.AUDIO) t = i.audioTracks;
                    else {
                        let e = i.maxAutoLevel,
                            r = e > -1 ? e + 1 : i.levels.length;
                        t = i.levels.slice(0, r)
                    }
                    for (let e of t) e.bitrate > r && (r = e.bitrate);
                    return r > 0 ? r : NaN
                }
                getBufferLength(e) {
                    let t = this.hls.media,
                        r = e === e_.AUDIO ? this.audioBuffer : this.videoBuffer;
                    if (!r || !t) return NaN;
                    let i = BufferHelper.bufferInfo(r, t.currentTime, this.config.maxBufferHole);
                    return 1e3 * i.len
                }
                createPlaylistLoader() {
                    let {
                        pLoader: e
                    } = this.config, t = this.applyPlaylistData, r = e || this.config.loader;
                    return class {
                        constructor(e) {
                            this.loader = void 0, this.loader = new r(e)
                        }
                        get stats() {
                            return this.loader.stats
                        }
                        get context() {
                            return this.loader.context
                        }
                        destroy() {
                            this.loader.destroy()
                        }
                        abort() {
                            this.loader.abort()
                        }
                        load(e, r, i) {
                            t(e), this.loader.load(e, r, i)
                        }
                    }
                }
                createFragmentLoader() {
                    let {
                        fLoader: e
                    } = this.config, t = this.applyFragmentData, r = e || this.config.loader;
                    return class {
                        constructor(e) {
                            this.loader = void 0, this.loader = new r(e)
                        }
                        get stats() {
                            return this.loader.stats
                        }
                        get context() {
                            return this.loader.context
                        }
                        destroy() {
                            this.loader.destroy()
                        }
                        abort() {
                            this.loader.abort()
                        }
                        load(e, r, i) {
                            t(e), this.loader.load(e, r, i)
                        }
                    }
                }
                static uuid() {
                    let e = URL.createObjectURL(new Blob),
                        t = e.toString();
                    return URL.revokeObjectURL(e), t.slice(t.lastIndexOf("/") + 1)
                }
                static serialize(e) {
                    let t = [],
                        isValid = e => !Number.isNaN(e) && null != e && "" !== e && !1 !== e,
                        toRounded = e => Math.round(e),
                        toHundred = e => 100 * toRounded(e / 100),
                        r = {
                            br: toRounded,
                            d: toRounded,
                            bl: toHundred,
                            dl: toHundred,
                            mtp: toHundred,
                            nor: e => encodeURIComponent(e),
                            rtp: toHundred,
                            tb: toRounded
                        },
                        i = Object.keys(e || {}).sort();
                    for (let s of i) {
                        let i, a = e[s];
                        if (!isValid(a) || "v" === s && 1 === a || "pr" == s && 1 === a) continue;
                        let n = r[s];
                        n && (a = n(a));
                        let l = typeof a;
                        i = "ot" === s || "sf" === s || "st" === s ? `${s}=${a}` : "boolean" === l ? s : "number" === l ? `${s}=${a}` : `${s}=${JSON.stringify(a)}`, t.push(i)
                    }
                    return t.join(",")
                }
                static toHeaders(e) {
                    let t = Object.keys(e),
                        r = {},
                        i = ["Object", "Request", "Session", "Status"],
                        s = [{}, {}, {}, {}],
                        a = {
                            br: 0,
                            d: 0,
                            ot: 0,
                            tb: 0,
                            bl: 1,
                            dl: 1,
                            mtp: 1,
                            nor: 1,
                            nrr: 1,
                            su: 1,
                            cid: 2,
                            pr: 2,
                            sf: 2,
                            sid: 2,
                            st: 2,
                            v: 2,
                            bs: 3,
                            rtp: 3
                        };
                    for (let r of t) {
                        let t = null != a[r] ? a[r] : 1;
                        s[t][r] = e[r]
                    }
                    for (let e = 0; e < s.length; e++) {
                        let t = CMCDController.serialize(s[e]);
                        t && (r[`CMCD-${i[e]}`] = t)
                    }
                    return r
                }
                static toQuery(e) {
                    return `CMCD=${encodeURIComponent(CMCDController.serialize(e))}`
                }
                static appendQueryToUri(e, t) {
                    if (!t) return e;
                    let r = e.includes("?") ? "&" : "?";
                    return `${e}${r}${t}`
                }
            };

            function cloneRenditionGroups(e, t, r, i) {
                e && Object.keys(t).forEach(s => {
                    let a = e.filter(e => e.groupId === s).map(e => {
                        let a = _extends({}, e);
                        return a.details = void 0, a.attrs = new AttrList(a.attrs), a.url = a.attrs.URI = performUriReplacement(e.url, e.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", r), a.groupId = a.attrs["GROUP-ID"] = t[s], a.attrs["PATHWAY-ID"] = i, a
                    });
                    e.push(...a)
                })
            }

            function performUriReplacement(e, t, r, i) {
                let s;
                let {
                    HOST: a,
                    PARAMS: n,
                    [r]: l
                } = i;
                t && (s = null == l ? void 0 : l[t]) && (e = s);
                let o = new self.URL(e);
                return a && !s && (o.host = a), n && Object.keys(n).sort().forEach(e => {
                    e && o.searchParams.set(e, n[e])
                }), o.href
            }
            let eM = /^age:\s*[\d.]+\s*$/im;
            let XhrLoader = class XhrLoader {
                constructor(e) {
                    this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = e && e.xhrSetup || null, this.stats = new LoadStats, this.retryDelay = 0
                }
                destroy() {
                    this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null
                }
                abortInternal() {
                    let e = this.loader;
                    self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), e && (e.onreadystatechange = null, e.onprogress = null, 4 !== e.readyState && (this.stats.aborted = !0, e.abort()))
                }
                abort() {
                    var e;
                    this.abortInternal(), null != (e = this.callbacks) && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader)
                }
                load(e, t, r) {
                    if (this.stats.loading.start) throw Error("Loader can only be used once.");
                    this.stats.loading.start = self.performance.now(), this.context = e, this.config = t, this.callbacks = r, this.loadInternal()
                }
                loadInternal() {
                    let {
                        config: e,
                        context: t
                    } = this;
                    if (!e) return;
                    let r = this.loader = new self.XMLHttpRequest,
                        i = this.stats;
                    i.loading.first = 0, i.loaded = 0, i.aborted = !1;
                    let s = this.xhrSetup;
                    s ? Promise.resolve().then(() => {
                        if (!this.stats.aborted) return s(r, t.url)
                    }).catch(e => (r.open("GET", t.url, !0), s(r, t.url))).then(() => {
                        this.stats.aborted || this.openAndSendXhr(r, t, e)
                    }).catch(e => {
                        this.callbacks.onError({
                            code: r.status,
                            text: e.message
                        }, t, r, i)
                    }) : this.openAndSendXhr(r, t, e)
                }
                openAndSendXhr(e, t, r) {
                    e.readyState || e.open("GET", t.url, !0);
                    let i = this.context.headers,
                        {
                            maxTimeToFirstByteMs: s,
                            maxLoadTimeMs: a
                        } = r.loadPolicy;
                    if (i)
                        for (let t in i) e.setRequestHeader(t, i[t]);
                    t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, self.clearTimeout(this.requestTimeout), r.timeout = s && T(s) ? s : a, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r.timeout), e.send()
                }
                readystatechange() {
                    let {
                        context: e,
                        loader: t,
                        stats: r
                    } = this;
                    if (!e || !t) return;
                    let i = t.readyState,
                        s = this.config;
                    if (!r.aborted && i >= 2 && (0 === r.loading.first && (r.loading.first = Math.max(self.performance.now(), r.loading.start), s.timeout !== s.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), s.timeout = s.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s.loadPolicy.maxLoadTimeMs - (r.loading.first - r.loading.start)))), 4 === i)) {
                        self.clearTimeout(this.requestTimeout), t.onreadystatechange = null, t.onprogress = null;
                        let i = t.status,
                            a = "text" !== t.responseType;
                        if (i >= 200 && i < 300 && (a && t.response || null !== t.responseText)) {
                            r.loading.end = Math.max(self.performance.now(), r.loading.first);
                            let s = a ? t.response : t.responseText,
                                n = "arraybuffer" === t.responseType ? s.byteLength : s.length;
                            if (r.loaded = r.total = n, r.bwEstimate = 8e3 * r.total / (r.loading.end - r.loading.first), !this.callbacks) return;
                            let l = this.callbacks.onProgress;
                            if (l && l(r, e, s, t), !this.callbacks) return;
                            let o = {
                                url: t.responseURL,
                                data: s,
                                code: i
                            };
                            this.callbacks.onSuccess(o, r, e, t)
                        } else {
                            let a = s.loadPolicy.errorRetry,
                                n = r.retry;
                            shouldRetry(a, n, !1, i) ? this.retry(a) : (L.error(`${i} while loading ${e.url}`), this.callbacks.onError({
                                code: i,
                                text: t.statusText
                            }, e, t, r))
                        }
                    }
                }
                loadtimeout() {
                    var e;
                    let t = null == (e = this.config) ? void 0 : e.loadPolicy.timeoutRetry,
                        r = this.stats.retry;
                    if (shouldRetry(t, r, !0)) this.retry(t);
                    else {
                        L.warn(`timeout while loading ${this.context.url}`);
                        let e = this.callbacks;
                        e && (this.abortInternal(), e.onTimeout(this.stats, this.context, this.loader))
                    }
                }
                retry(e) {
                    let {
                        context: t,
                        stats: r
                    } = this;
                    this.retryDelay = getRetryDelay(e, r.retry), r.retry++, L.warn(`${status?"HTTP Status "+status:"Timeout"} while loading ${t.url}, retrying ${r.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay)
                }
                loadprogress(e) {
                    let t = this.stats;
                    t.loaded = e.loaded, e.lengthComputable && (t.total = e.total)
                }
                getCacheAge() {
                    let e = null;
                    if (this.loader && eM.test(this.loader.getAllResponseHeaders())) {
                        let t = this.loader.getResponseHeader("age");
                        e = t ? parseFloat(t) : null
                    }
                    return e
                }
                getResponseHeader(e) {
                    return this.loader && RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(e) : null
                }
            };
            let ew = /(\d+)-(\d+)\/(\d+)/;
            let FetchLoader = class FetchLoader {
                constructor(e) {
                    this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = e.fetchSetup || getRequest, this.controller = new self.AbortController, this.stats = new LoadStats
                }
                destroy() {
                    this.loader = this.callbacks = null, this.abortInternal()
                }
                abortInternal() {
                    let e = this.response;
                    null != e && e.ok || (this.stats.aborted = !0, this.controller.abort())
                }
                abort() {
                    var e;
                    this.abortInternal(), null != (e = this.callbacks) && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response)
                }
                load(e, t, r) {
                    let i = this.stats;
                    if (i.loading.start) throw Error("Loader can only be used once.");
                    i.loading.start = self.performance.now();
                    let s = function(e, t) {
                            let r = {
                                method: "GET",
                                mode: "cors",
                                credentials: "same-origin",
                                signal: t,
                                headers: new self.Headers(_extends({}, e.headers))
                            };
                            return e.rangeEnd && r.headers.set("Range", "bytes=" + e.rangeStart + "-" + String(e.rangeEnd - 1)), r
                        }(e, this.controller.signal),
                        a = r.onProgress,
                        n = "arraybuffer" === e.responseType,
                        l = n ? "byteLength" : "length",
                        {
                            maxTimeToFirstByteMs: o,
                            maxLoadTimeMs: h
                        } = t.loadPolicy;
                    this.context = e, this.config = t, this.callbacks = r, this.request = this.fetchSetup(e, s), self.clearTimeout(this.requestTimeout), t.timeout = o && T(o) ? o : h, this.requestTimeout = self.setTimeout(() => {
                        this.abortInternal(), r.onTimeout(i, e, this.response)
                    }, t.timeout), self.fetch(this.request).then(s => {
                        this.response = this.loader = s;
                        let l = Math.max(self.performance.now(), i.loading.start);
                        if (self.clearTimeout(this.requestTimeout), t.timeout = h, this.requestTimeout = self.setTimeout(() => {
                                this.abortInternal(), r.onTimeout(i, e, this.response)
                            }, h - (l - i.loading.start)), !s.ok) {
                            let {
                                status: e,
                                statusText: t
                            } = s;
                            throw new FetchError(t || "fetch, bad network response", e, s)
                        }
                        return (i.loading.first = l, i.total = function(e) {
                            let t = e.get("Content-Range");
                            if (t) {
                                let e = function(e) {
                                    let t = ew.exec(e);
                                    if (t) return parseInt(t[2]) - parseInt(t[1]) + 1
                                }(t);
                                if (T(e)) return e
                            }
                            let r = e.get("Content-Length");
                            if (r) return parseInt(r)
                        }(s.headers) || i.total, a && T(t.highWaterMark)) ? this.loadProgressively(s, i, e, t.highWaterMark, a) : n ? s.arrayBuffer() : "json" === e.responseType ? s.json() : s.text()
                    }).then(s => {
                        let {
                            response: n
                        } = this;
                        self.clearTimeout(this.requestTimeout), i.loading.end = Math.max(self.performance.now(), i.loading.first);
                        let o = s[l];
                        o && (i.loaded = i.total = o);
                        let h = {
                            url: n.url,
                            data: s,
                            code: n.status
                        };
                        a && !T(t.highWaterMark) && a(i, e, s, n), r.onSuccess(h, i, e, n)
                    }).catch(t => {
                        if (self.clearTimeout(this.requestTimeout), i.aborted) return;
                        let s = t && t.code || 0,
                            a = t ? t.message : null;
                        r.onError({
                            code: s,
                            text: a
                        }, e, t ? t.details : null, i)
                    })
                }
                getCacheAge() {
                    let e = null;
                    if (this.response) {
                        let t = this.response.headers.get("age");
                        e = t ? parseFloat(t) : null
                    }
                    return e
                }
                getResponseHeader(e) {
                    return this.response ? this.response.headers.get(e) : null
                }
                loadProgressively(e, t, r, i = 0, s) {
                    let a = new ChunkCache,
                        n = e.body.getReader(),
                        pump = () => n.read().then(n => {
                            if (n.done) return a.dataLength && s(t, r, a.flush(), e), Promise.resolve(new ArrayBuffer(0));
                            let l = n.value,
                                o = l.length;
                            return t.loaded += o, o < i || a.dataLength ? (a.push(l), a.dataLength >= i && s(t, r, a.flush(), e)) : s(t, r, l, e), pump()
                        }).catch(() => Promise.reject());
                    return pump()
                }
            };

            function getRequest(e, t) {
                return new self.Request(e.url, t)
            }
            let FetchError = class FetchError extends Error {
                constructor(e, t, r) {
                    super(e), this.code = void 0, this.details = void 0, this.code = t, this.details = r
                }
            };
            let ex = /\s/,
                eF = _objectSpread2(_objectSpread2({
                    autoStartLoad: !0,
                    startPosition: -1,
                    defaultAudioCodec: void 0,
                    debug: !1,
                    capLevelOnFPSDrop: !1,
                    capLevelToPlayerSize: !1,
                    ignoreDevicePixelRatio: !1,
                    initialLiveManifestSize: 1,
                    maxBufferLength: 30,
                    backBufferLength: 1 / 0,
                    maxBufferSize: 6e7,
                    maxBufferHole: .1,
                    highBufferWatchdogPeriod: 2,
                    nudgeOffset: .1,
                    nudgeMaxRetry: 3,
                    maxFragLookUpTolerance: .25,
                    liveSyncDurationCount: 3,
                    liveMaxLatencyDurationCount: 1 / 0,
                    liveSyncDuration: void 0,
                    liveMaxLatencyDuration: void 0,
                    maxLiveSyncPlaybackRate: 1,
                    liveDurationInfinity: !1,
                    liveBackBufferLength: null,
                    maxMaxBufferLength: 600,
                    enableWorker: !0,
                    workerPath: null,
                    enableSoftwareAES: !0,
                    startLevel: void 0,
                    startFragPrefetch: !1,
                    fpsDroppedMonitoringPeriod: 5e3,
                    fpsDroppedMonitoringThreshold: .2,
                    appendErrorMaxRetry: 3,
                    loader: XhrLoader,
                    fLoader: void 0,
                    pLoader: void 0,
                    xhrSetup: void 0,
                    licenseXhrSetup: void 0,
                    licenseResponseCallback: void 0,
                    abrController: class {
                        constructor(e) {
                            this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = -1, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = e;
                            let t = e.config;
                            this.bwEstimator = new EwmaBandWidthEstimator(t.abrEwmaSlowVoD, t.abrEwmaFastVoD, t.abrEwmaDefaultEstimate), this.registerListeners()
                        }
                        registerListeners() {
                            let {
                                hls: e
                            } = this;
                            e.on(E.FRAG_LOADING, this.onFragLoading, this), e.on(E.FRAG_LOADED, this.onFragLoaded, this), e.on(E.FRAG_BUFFERED, this.onFragBuffered, this), e.on(E.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(E.LEVEL_LOADED, this.onLevelLoaded, this)
                        }
                        unregisterListeners() {
                            let {
                                hls: e
                            } = this;
                            e.off(E.FRAG_LOADING, this.onFragLoading, this), e.off(E.FRAG_LOADED, this.onFragLoaded, this), e.off(E.FRAG_BUFFERED, this.onFragBuffered, this), e.off(E.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(E.LEVEL_LOADED, this.onLevelLoaded, this)
                        }
                        destroy() {
                            this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null
                        }
                        onFragLoading(e, t) {
                            var r;
                            let i = t.frag;
                            this.ignoreFragment(i) || (this.fragCurrent = i, this.partCurrent = null != (r = t.part) ? r : null, this.clearTimer(), this.timer = self.setInterval(this.onCheck, 100))
                        }
                        onLevelSwitching(e, t) {
                            this.clearTimer()
                        }
                        getTimeToLoadFrag(e, t, r, i) {
                            let s = i ? this.lastLevelLoadSec : 0;
                            return e + r / t + s
                        }
                        onLevelLoaded(e, t) {
                            let r = this.hls.config,
                                {
                                    total: i,
                                    bwEstimate: s
                                } = t.stats;
                            T(i) && T(s) && (this.lastLevelLoadSec = 8 * i / s), t.details.live ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive) : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD)
                        }
                        _abandonRulesCheck() {
                            let e;
                            let {
                                fragCurrent: t,
                                partCurrent: r,
                                hls: i
                            } = this, {
                                autoLevelEnabled: s,
                                media: a
                            } = i;
                            if (!t || !a) return;
                            let n = performance.now(),
                                l = r ? r.stats : t.stats,
                                o = r ? r.duration : t.duration,
                                h = n - l.loading.start;
                            if (l.aborted || l.loaded && l.loaded === l.total || 0 === t.level) {
                                this.clearTimer(), this._nextAutoLevel = -1;
                                return
                            }
                            if (!s || a.paused || !a.playbackRate || !a.readyState) return;
                            let d = i.mainForwardBufferInfo;
                            if (null === d) return;
                            let u = this.bwEstimator.getEstimateTTFB(),
                                c = Math.abs(a.playbackRate);
                            if (h <= Math.max(u, 1e3 * (o / (2 * c)))) return;
                            let f = d.len / c;
                            if (f >= 2 * o / c) return;
                            let g = l.loading.first ? l.loading.first - l.loading.start : -1,
                                m = l.loaded && g > -1,
                                p = this.bwEstimator.getEstimate(),
                                {
                                    levels: y,
                                    minAutoLevel: v
                                } = i,
                                S = y[t.level],
                                A = l.total || Math.max(l.loaded, Math.round(o * S.maxBitrate / 8)),
                                R = h - g;
                            R < 1 && m && (R = Math.min(h, 8 * l.loaded / p));
                            let I = m ? 1e3 * l.loaded / R : 0,
                                D = I ? (A - l.loaded) / I : 8 * A / p + u / 1e3;
                            if (D <= f) return;
                            let b = I ? 8 * I : p,
                                C = Number.POSITIVE_INFINITY;
                            for (e = t.level - 1; e > v; e--) {
                                let t = y[e].maxBitrate;
                                if ((C = this.getTimeToLoadFrag(u / 1e3, b, o * t, !y[e].details)) < f) break
                            }
                            C >= D || C > 10 * o || (i.nextLoadLevel = e, m ? this.bwEstimator.sample(h - Math.min(u, g), l.loaded) : this.bwEstimator.sampleTTFB(h), this.clearTimer(), L.warn(`[abr] Fragment ${t.sn}${r?" part "+r.index:""} of level ${t.level} is loading too slowly;
      Time to underbuffer: ${f.toFixed(3)} s
      Estimated load time for current fragment: ${D.toFixed(3)} s
      Estimated load time for down switch fragment: ${C.toFixed(3)} s
      TTFB estimate: ${g}
      Current BW estimate: ${T(p)?(p/1024).toFixed(3):"Unknown"} Kb/s
      New BW estimate: ${(this.bwEstimator.getEstimate()/1024).toFixed(3)} Kb/s
      Aborting and switching to level ${e}`), t.loader && (this.fragCurrent = this.partCurrent = null, t.abortRequests()), i.trigger(E.FRAG_LOAD_EMERGENCY_ABORTED, {
                                frag: t,
                                part: r,
                                stats: l
                            }))
                        }
                        onFragLoaded(e, {
                            frag: t,
                            part: r
                        }) {
                            let i = r ? r.stats : t.stats;
                            if (t.type === V.MAIN && this.bwEstimator.sampleTTFB(i.loading.first - i.loading.start), !this.ignoreFragment(t)) {
                                if (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                                    let e = r ? r.duration : t.duration,
                                        s = this.hls.levels[t.level],
                                        a = (s.loaded ? s.loaded.bytes : 0) + i.loaded,
                                        n = (s.loaded ? s.loaded.duration : 0) + e;
                                    s.loaded = {
                                        bytes: a,
                                        duration: n
                                    }, s.realBitrate = Math.round(8 * a / n)
                                }
                                if (t.bitrateTest) {
                                    let e = {
                                        stats: i,
                                        frag: t,
                                        part: r,
                                        id: t.type
                                    };
                                    this.onFragBuffered(E.FRAG_BUFFERED, e), t.bitrateTest = !1
                                }
                            }
                        }
                        onFragBuffered(e, t) {
                            let {
                                frag: r,
                                part: i
                            } = t, s = null != i && i.stats.loaded ? i.stats : r.stats;
                            if (s.aborted || this.ignoreFragment(r)) return;
                            let a = s.parsing.end - s.loading.start - Math.min(s.loading.first - s.loading.start, this.bwEstimator.getEstimateTTFB());
                            this.bwEstimator.sample(a, s.loaded), s.bwEstimate = this.bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0
                        }
                        ignoreFragment(e) {
                            return e.type !== V.MAIN || "initSegment" === e.sn
                        }
                        clearTimer() {
                            self.clearInterval(this.timer)
                        }
                        get nextAutoLevel() {
                            let e = this._nextAutoLevel,
                                t = this.bwEstimator;
                            if (-1 !== e && !t.canEstimate()) return e;
                            let r = this.getNextABRAutoLevel();
                            if (-1 !== e) {
                                let t = this.hls.levels;
                                if (t.length > Math.max(e, r) && t[e].loadError <= t[r].loadError) return e
                            }
                            return -1 !== e && (r = Math.min(e, r)), r
                        }
                        getNextABRAutoLevel() {
                            let {
                                fragCurrent: e,
                                partCurrent: t,
                                hls: r
                            } = this, {
                                maxAutoLevel: i,
                                config: s,
                                minAutoLevel: a,
                                media: n
                            } = r, l = t ? t.duration : e ? e.duration : 0, o = n && 0 !== n.playbackRate ? Math.abs(n.playbackRate) : 1, h = this.bwEstimator ? this.bwEstimator.getEstimate() : s.abrEwmaDefaultEstimate, d = r.mainForwardBufferInfo, u = (d ? d.len : 0) / o, c = this.findBestLevel(h, a, i, u, s.abrBandWidthFactor, s.abrBandWidthUpFactor);
                            if (c >= 0) return c;
                            L.trace(`[abr] ${u?"rebuffering expected":"buffer is empty"}, finding optimal quality level`);
                            let f = l ? Math.min(l, s.maxStarvationDelay) : s.maxStarvationDelay,
                                g = s.abrBandWidthFactor,
                                m = s.abrBandWidthUpFactor;
                            if (!u) {
                                let e = this.bitrateTestDelay;
                                if (e) {
                                    let t = l ? Math.min(l, s.maxLoadingDelay) : s.maxLoadingDelay;
                                    f = t - e, L.trace(`[abr] bitrate test took ${Math.round(1e3*e)}ms, set first fragment max fetchDuration to ${Math.round(1e3*f)} ms`), g = m = 1
                                }
                            }
                            return Math.max(c = this.findBestLevel(h, a, i, u + f, g, m), 0)
                        }
                        findBestLevel(e, t, r, i, s, a) {
                            var n;
                            let {
                                fragCurrent: l,
                                partCurrent: o,
                                lastLoadedFragLevel: h
                            } = this, {
                                levels: d
                            } = this.hls, u = d[h], c = !!(null != u && null != (n = u.details) && n.live), f = null == u ? void 0 : u.codecSet, g = o ? o.duration : l ? l.duration : 0, m = this.bwEstimator.getEstimateTTFB() / 1e3, p = t, E = -1;
                            for (let n = r; n >= t; n--) {
                                let t;
                                let r = d[n];
                                if (!r || f && r.codecSet !== f) {
                                    r && (p = Math.min(n, p), E = Math.max(n, E));
                                    continue
                                } - 1 !== E && L.trace(`[abr] Skipped level(s) ${p}-${E} with CODECS:"${d[E].attrs.CODECS}"; not compatible with "${u.attrs.CODECS}"`);
                                let l = r.details,
                                    y = (o ? null == l ? void 0 : l.partTarget : null == l ? void 0 : l.averagetargetduration) || g;
                                t = n <= h ? s * e : a * e;
                                let v = d[n].maxBitrate,
                                    S = this.getTimeToLoadFrag(m, t, v * y, void 0 === l);
                                if (L.trace(`[abr] level:${n} adjustedbw-bitrate:${Math.round(t-v)} avgDuration:${y.toFixed(1)} maxFetchDuration:${i.toFixed(1)} fetchDuration:${S.toFixed(1)}`), t > v && (0 === S || !T(S) || c && !this.bitrateTestDelay || S < i)) return n
                            }
                            return -1
                        }
                        set nextAutoLevel(e) {
                            this._nextAutoLevel = e
                        }
                    },
                    bufferController: class {
                        constructor(e) {
                            this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = () => {
                                let {
                                    media: e,
                                    mediaSource: t
                                } = this;
                                L.log("[buffer-controller]: Media source opened"), e && (e.removeEventListener("emptied", this._onMediaEmptied), this.updateMediaElementDuration(), this.hls.trigger(E.MEDIA_ATTACHED, {
                                    media: e
                                })), t && t.removeEventListener("sourceopen", this._onMediaSourceOpen), this.checkPendingTracks()
                            }, this._onMediaSourceClose = () => {
                                L.log("[buffer-controller]: Media source closed")
                            }, this._onMediaSourceEnded = () => {
                                L.log("[buffer-controller]: Media source ended")
                            }, this._onMediaEmptied = () => {
                                let {
                                    media: e,
                                    _objectUrl: t
                                } = this;
                                e && e.src !== t && L.error(`Media element src was set while attaching MediaSource (${t} > ${e.src})`)
                            }, this.hls = e, this._initSourceBuffer(), this.registerListeners()
                        }
                        hasSourceTypes() {
                            return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0
                        }
                        destroy() {
                            this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null
                        }
                        registerListeners() {
                            let {
                                hls: e
                            } = this;
                            e.on(E.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(E.MANIFEST_LOADING, this.onManifestLoading, this), e.on(E.MANIFEST_PARSED, this.onManifestParsed, this), e.on(E.BUFFER_RESET, this.onBufferReset, this), e.on(E.BUFFER_APPENDING, this.onBufferAppending, this), e.on(E.BUFFER_CODECS, this.onBufferCodecs, this), e.on(E.BUFFER_EOS, this.onBufferEos, this), e.on(E.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(E.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(E.FRAG_PARSED, this.onFragParsed, this), e.on(E.FRAG_CHANGED, this.onFragChanged, this)
                        }
                        unregisterListeners() {
                            let {
                                hls: e
                            } = this;
                            e.off(E.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(E.MANIFEST_LOADING, this.onManifestLoading, this), e.off(E.MANIFEST_PARSED, this.onManifestParsed, this), e.off(E.BUFFER_RESET, this.onBufferReset, this), e.off(E.BUFFER_APPENDING, this.onBufferAppending, this), e.off(E.BUFFER_CODECS, this.onBufferCodecs, this), e.off(E.BUFFER_EOS, this.onBufferEos, this), e.off(E.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(E.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(E.FRAG_PARSED, this.onFragParsed, this), e.off(E.FRAG_CHANGED, this.onFragChanged, this)
                        }
                        _initSourceBuffer() {
                            this.sourceBuffer = {}, this.operationQueue = new BufferOperationQueue(this.sourceBuffer), this.listeners = {
                                audio: [],
                                video: [],
                                audiovideo: []
                            }, this.lastMpegAudioChunk = null
                        }
                        onManifestLoading() {
                            this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null
                        }
                        onManifestParsed(e, t) {
                            let r = 2;
                            (!t.audio || t.video) && t.altAudio || (r = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r, L.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`)
                        }
                        onMediaAttaching(e, t) {
                            let r = this.media = t.media;
                            if (r && eg) {
                                let e = this.mediaSource = new eg;
                                e.addEventListener("sourceopen", this._onMediaSourceOpen), e.addEventListener("sourceended", this._onMediaSourceEnded), e.addEventListener("sourceclose", this._onMediaSourceClose), r.src = self.URL.createObjectURL(e), this._objectUrl = r.src, r.addEventListener("emptied", this._onMediaEmptied)
                            }
                        }
                        onMediaDetaching() {
                            let {
                                media: e,
                                mediaSource: t,
                                _objectUrl: r
                            } = this;
                            if (t) {
                                if (L.log("[buffer-controller]: media source detaching"), "open" === t.readyState) try {
                                    t.endOfStream()
                                } catch (e) {
                                    L.warn(`[buffer-controller]: onMediaDetaching: ${e.message} while calling endOfStream`)
                                }
                                this.onBufferReset(), t.removeEventListener("sourceopen", this._onMediaSourceOpen), t.removeEventListener("sourceended", this._onMediaSourceEnded), t.removeEventListener("sourceclose", this._onMediaSourceClose), e && (e.removeEventListener("emptied", this._onMediaEmptied), r && self.URL.revokeObjectURL(r), e.src === r ? (e.removeAttribute("src"), e.load()) : L.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}
                            }
                            this.hls.trigger(E.MEDIA_DETACHED, void 0)
                        }
                        onBufferReset() {
                            this.getSourceBufferTypes().forEach(e => {
                                let t = this.sourceBuffer[e];
                                try {
                                    t && (this.removeBufferListeners(e), this.mediaSource && this.mediaSource.removeSourceBuffer(t), this.sourceBuffer[e] = void 0)
                                } catch (t) {
                                    L.warn(`[buffer-controller]: Failed to reset the ${e} buffer`, t)
                                }
                            }), this._initSourceBuffer()
                        }
                        onBufferCodecs(e, t) {
                            let r = this.getSourceBufferTypes().length;
                            Object.keys(t).forEach(e => {
                                if (r) {
                                    let r = this.tracks[e];
                                    if (r && "function" == typeof r.buffer.changeType) {
                                        let {
                                            id: i,
                                            codec: s,
                                            levelCodec: a,
                                            container: n,
                                            metadata: l
                                        } = t[e], o = (r.levelCodec || r.codec).replace(em, "$1"), h = (a || s).replace(em, "$1");
                                        if (o !== h) {
                                            let t = `${n};codecs=${a||s}`;
                                            this.appendChangeType(e, t), L.log(`[buffer-controller]: switching codec ${o} to ${h}`), this.tracks[e] = {
                                                buffer: r.buffer,
                                                codec: s,
                                                container: n,
                                                levelCodec: a,
                                                metadata: l,
                                                id: i
                                            }
                                        }
                                    }
                                } else this.pendingTracks[e] = t[e]
                            }), !r && (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
                        }
                        appendChangeType(e, t) {
                            let {
                                operationQueue: r
                            } = this;
                            r.append({
                                execute: () => {
                                    let i = this.sourceBuffer[e];
                                    i && (L.log(`[buffer-controller]: changing ${e} sourceBuffer type to ${t}`), i.changeType(t)), r.shiftAndExecuteNext(e)
                                },
                                onStart: () => {},
                                onComplete: () => {},
                                onError: t => {
                                    L.warn(`[buffer-controller]: Failed to change ${e} SourceBuffer type`, t)
                                }
                            }, e)
                        }
                        onBufferAppending(e, t) {
                            let {
                                hls: r,
                                operationQueue: i,
                                tracks: s
                            } = this, {
                                data: a,
                                type: n,
                                frag: l,
                                part: o,
                                chunkMeta: h
                            } = t, d = h.buffering[n], u = self.performance.now();
                            d.start = u;
                            let c = l.stats.buffering,
                                f = o ? o.stats.buffering : null;
                            0 === c.start && (c.start = u), f && 0 === f.start && (f.start = u);
                            let g = s.audio,
                                m = !1;
                            "audio" === n && (null == g ? void 0 : g.container) === "audio/mpeg" && (m = !this.lastMpegAudioChunk || 1 === h.id || this.lastMpegAudioChunk.sn !== h.sn, this.lastMpegAudioChunk = h);
                            let p = l.start;
                            i.append({
                                execute: () => {
                                    if (d.executeStart = self.performance.now(), m) {
                                        let e = this.sourceBuffer[n];
                                        if (e) {
                                            let t = p - e.timestampOffset;
                                            Math.abs(t) >= .1 && (L.log(`[buffer-controller]: Updating audio SourceBuffer timestampOffset to ${p} (delta: ${t}) sn: ${l.sn})`), e.timestampOffset = p)
                                        }
                                    }
                                    this.appendExecutor(a, n)
                                },
                                onStart: () => {},
                                onComplete: () => {
                                    let e = self.performance.now();
                                    d.executeEnd = d.end = e, 0 === c.first && (c.first = e), f && 0 === f.first && (f.first = e);
                                    let {
                                        sourceBuffer: t
                                    } = this, r = {};
                                    for (let e in t) r[e] = BufferHelper.getBuffered(t[e]);
                                    this.appendError = 0, this.hls.trigger(E.BUFFER_APPENDED, {
                                        type: n,
                                        frag: l,
                                        part: o,
                                        chunkMeta: h,
                                        parent: l.type,
                                        timeRanges: r
                                    })
                                },
                                onError: e => {
                                    L.error(`[buffer-controller]: Error encountered while trying to append to the ${n} SourceBuffer`, e);
                                    let t = {
                                        type: y.MEDIA_ERROR,
                                        parent: l.type,
                                        details: v.BUFFER_APPEND_ERROR,
                                        frag: l,
                                        part: o,
                                        chunkMeta: h,
                                        error: e,
                                        err: e,
                                        fatal: !1
                                    };
                                    e.code === DOMException.QUOTA_EXCEEDED_ERR ? t.details = v.BUFFER_FULL_ERROR : (this.appendError++, t.details = v.BUFFER_APPEND_ERROR, this.appendError > r.config.appendErrorMaxRetry && (L.error(`[buffer-controller]: Failed ${r.config.appendErrorMaxRetry} times to append segment in sourceBuffer`), t.fatal = !0)), r.trigger(E.ERROR, t)
                                }
                            }, n)
                        }
                        onBufferFlushing(e, t) {
                            let {
                                operationQueue: r
                            } = this, flushOperation = e => ({
                                execute: this.removeExecutor.bind(this, e, t.startOffset, t.endOffset),
                                onStart: () => {},
                                onComplete: () => {
                                    this.hls.trigger(E.BUFFER_FLUSHED, {
                                        type: e
                                    })
                                },
                                onError: t => {
                                    L.warn(`[buffer-controller]: Failed to remove from ${e} SourceBuffer`, t)
                                }
                            });
                            t.type ? r.append(flushOperation(t.type), t.type) : this.getSourceBufferTypes().forEach(e => {
                                r.append(flushOperation(e), e)
                            })
                        }
                        onFragParsed(e, t) {
                            let {
                                frag: r,
                                part: i
                            } = t, s = [], a = i ? i.elementaryStreams : r.elementaryStreams;
                            a[D.AUDIOVIDEO] ? s.push("audiovideo") : (a[D.AUDIO] && s.push("audio"), a[D.VIDEO] && s.push("video")), 0 === s.length && L.warn(`Fragments must have at least one ElementaryStreamType set. type: ${r.type} level: ${r.level} sn: ${r.sn}`), this.blockBuffers(() => {
                                let e = self.performance.now();
                                r.stats.buffering.end = e, i && (i.stats.buffering.end = e);
                                let t = i ? i.stats : r.stats;
                                this.hls.trigger(E.FRAG_BUFFERED, {
                                    frag: r,
                                    part: i,
                                    stats: t,
                                    id: r.type
                                })
                            }, s)
                        }
                        onFragChanged(e, t) {
                            this.flushBackBuffer()
                        }
                        onBufferEos(e, t) {
                            let r = this.getSourceBufferTypes().reduce((e, r) => {
                                let i = this.sourceBuffer[r];
                                return !i || t.type && t.type !== r || (i.ending = !0, i.ended || (i.ended = !0, L.log(`[buffer-controller]: ${r} sourceBuffer now EOS`))), e && !!(!i || i.ended)
                            }, !0);
                            r && (L.log("[buffer-controller]: Queueing mediaSource.endOfStream()"), this.blockBuffers(() => {
                                this.getSourceBufferTypes().forEach(e => {
                                    let t = this.sourceBuffer[e];
                                    t && (t.ending = !1)
                                });
                                let {
                                    mediaSource: e
                                } = this;
                                if (!e || "open" !== e.readyState) {
                                    e && L.info(`[buffer-controller]: Could not call mediaSource.endOfStream(). mediaSource.readyState: ${e.readyState}`);
                                    return
                                }
                                L.log("[buffer-controller]: Calling mediaSource.endOfStream()"), e.endOfStream()
                            }))
                        }
                        onLevelUpdated(e, {
                            details: t
                        }) {
                            t.fragments.length && (this.details = t, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration())
                        }
                        flushBackBuffer() {
                            let {
                                hls: e,
                                details: t,
                                media: r,
                                sourceBuffer: i
                            } = this;
                            if (!r || null === t) return;
                            let s = this.getSourceBufferTypes();
                            if (!s.length) return;
                            let a = t.live && null !== e.config.liveBackBufferLength ? e.config.liveBackBufferLength : e.config.backBufferLength;
                            if (!T(a) || a < 0) return;
                            let n = r.currentTime,
                                l = t.levelTargetDuration,
                                o = Math.max(a, l),
                                h = Math.floor(n / l) * l - o;
                            s.forEach(r => {
                                let s = i[r];
                                if (s) {
                                    let i = BufferHelper.getBuffered(s);
                                    if (i.length > 0 && h > i.start(0)) {
                                        if (e.trigger(E.BACK_BUFFER_REACHED, {
                                                bufferEnd: h
                                            }), t.live) e.trigger(E.LIVE_BACK_BUFFER_REACHED, {
                                            bufferEnd: h
                                        });
                                        else if (s.ended && i.end(i.length - 1) - n < 2 * l) {
                                            L.info(`[buffer-controller]: Cannot flush ${r} back buffer while SourceBuffer is in ended state`);
                                            return
                                        }
                                        e.trigger(E.BUFFER_FLUSHING, {
                                            startOffset: 0,
                                            endOffset: h,
                                            type: r
                                        })
                                    }
                                }
                            })
                        }
                        updateMediaElementDuration() {
                            if (!this.details || !this.media || !this.mediaSource || "open" !== this.mediaSource.readyState) return;
                            let {
                                details: e,
                                hls: t,
                                media: r,
                                mediaSource: i
                            } = this, s = e.fragments[0].start + e.totalduration, a = r.duration, n = T(i.duration) ? i.duration : 0;
                            e.live && t.config.liveDurationInfinity ? (L.log("[buffer-controller]: Media Source duration is set to Infinity"), i.duration = 1 / 0, this.updateSeekableRange(e)) : (s > n && s > a || !T(a)) && (L.log(`[buffer-controller]: Updating Media Source duration to ${s.toFixed(3)}`), i.duration = s)
                        }
                        updateSeekableRange(e) {
                            let t = this.mediaSource,
                                r = e.fragments,
                                i = r.length;
                            if (i && e.live && null != t && t.setLiveSeekableRange) {
                                let i = Math.max(0, r[0].start),
                                    s = Math.max(i, i + e.totalduration);
                                t.setLiveSeekableRange(i, s)
                            }
                        }
                        checkPendingTracks() {
                            let {
                                bufferCodecEventsExpected: e,
                                operationQueue: t,
                                pendingTracks: r
                            } = this, i = Object.keys(r).length;
                            if (i && !e || 2 === i) {
                                this.createSourceBuffers(r), this.pendingTracks = {};
                                let e = this.getSourceBufferTypes();
                                if (e.length) this.hls.trigger(E.BUFFER_CREATED, {
                                    tracks: this.tracks
                                }), e.forEach(e => {
                                    t.executeNext(e)
                                });
                                else {
                                    let e = Error("could not create source buffer for media codec(s)");
                                    this.hls.trigger(E.ERROR, {
                                        type: y.MEDIA_ERROR,
                                        details: v.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                                        fatal: !0,
                                        error: e,
                                        reason: e.message
                                    })
                                }
                            }
                        }
                        createSourceBuffers(e) {
                            let {
                                sourceBuffer: t,
                                mediaSource: r
                            } = this;
                            if (!r) throw Error("createSourceBuffers called when mediaSource was null");
                            for (let i in e)
                                if (!t[i]) {
                                    let s = e[i];
                                    if (!s) throw Error(`source buffer exists for track ${i}, however track does not`);
                                    let a = s.levelCodec || s.codec,
                                        n = `${s.container};codecs=${a}`;
                                    L.log(`[buffer-controller]: creating sourceBuffer(${n})`);
                                    try {
                                        let e = t[i] = r.addSourceBuffer(n);
                                        this.addBufferListener(i, "updatestart", this._onSBUpdateStart), this.addBufferListener(i, "updateend", this._onSBUpdateEnd), this.addBufferListener(i, "error", this._onSBUpdateError), this.tracks[i] = {
                                            buffer: e,
                                            codec: a,
                                            container: s.container,
                                            levelCodec: s.levelCodec,
                                            metadata: s.metadata,
                                            id: s.id
                                        }
                                    } catch (e) {
                                        L.error(`[buffer-controller]: error while trying to add sourceBuffer: ${e.message}`), this.hls.trigger(E.ERROR, {
                                            type: y.MEDIA_ERROR,
                                            details: v.BUFFER_ADD_CODEC_ERROR,
                                            fatal: !1,
                                            error: e,
                                            mimeType: n
                                        })
                                    }
                                }
                        }
                        _onSBUpdateStart(e) {
                            let {
                                operationQueue: t
                            } = this, r = t.current(e);
                            r.onStart()
                        }
                        _onSBUpdateEnd(e) {
                            let {
                                operationQueue: t
                            } = this, r = t.current(e);
                            r.onComplete(), t.shiftAndExecuteNext(e)
                        }
                        _onSBUpdateError(e, t) {
                            let r = Error(`${e} SourceBuffer error`);
                            L.error(`[buffer-controller]: ${r}`, t), this.hls.trigger(E.ERROR, {
                                type: y.MEDIA_ERROR,
                                details: v.BUFFER_APPENDING_ERROR,
                                error: r,
                                fatal: !1
                            });
                            let i = this.operationQueue.current(e);
                            i && i.onError(t)
                        }
                        removeExecutor(e, t, r) {
                            let {
                                media: i,
                                mediaSource: s,
                                operationQueue: a,
                                sourceBuffer: n
                            } = this, l = n[e];
                            if (!i || !s || !l) {
                                L.warn(`[buffer-controller]: Attempting to remove from the ${e} SourceBuffer, but it does not exist`), a.shiftAndExecuteNext(e);
                                return
                            }
                            let o = T(i.duration) ? i.duration : 1 / 0,
                                h = T(s.duration) ? s.duration : 1 / 0,
                                d = Math.max(0, t),
                                u = Math.min(r, o, h);
                            u > d && !l.ending ? (l.ended = !1, L.log(`[buffer-controller]: Removing [${d},${u}] from the ${e} SourceBuffer`), l.remove(d, u)) : a.shiftAndExecuteNext(e)
                        }
                        appendExecutor(e, t) {
                            let {
                                operationQueue: r,
                                sourceBuffer: i
                            } = this, s = i[t];
                            if (!s) {
                                L.warn(`[buffer-controller]: Attempting to append to the ${t} SourceBuffer, but it does not exist`), r.shiftAndExecuteNext(t);
                                return
                            }
                            s.ended = !1, s.appendBuffer(e)
                        }
                        blockBuffers(e, t = this.getSourceBufferTypes()) {
                            if (!t.length) {
                                L.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(e);
                                return
                            }
                            let {
                                operationQueue: r
                            } = this, i = t.map(e => r.appendBlocker(e));
                            Promise.all(i).then(() => {
                                e(), t.forEach(e => {
                                    let t = this.sourceBuffer[e];
                                    null != t && t.updating || r.shiftAndExecuteNext(e)
                                })
                            })
                        }
                        getSourceBufferTypes() {
                            return Object.keys(this.sourceBuffer)
                        }
                        addBufferListener(e, t, r) {
                            let i = this.sourceBuffer[e];
                            if (!i) return;
                            let s = r.bind(this, e);
                            this.listeners[e].push({
                                event: t,
                                listener: s
                            }), i.addEventListener(t, s)
                        }
                        removeBufferListeners(e) {
                            let t = this.sourceBuffer[e];
                            t && this.listeners[e].forEach(e => {
                                t.removeEventListener(e.event, e.listener)
                            })
                        }
                    },
                    capLevelController: CapLevelController,
                    errorController: class {
                        constructor(e) {
                            this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.log = void 0, this.warn = void 0, this.error = void 0, this.hls = e, this.log = L.log.bind(L, "[info]:"), this.warn = L.warn.bind(L, "[warning]:"), this.error = L.error.bind(L, "[error]:"), this.registerListeners()
                        }
                        registerListeners() {
                            let e = this.hls;
                            e.on(E.ERROR, this.onError, this), e.on(E.MANIFEST_LOADING, this.onManifestLoading, this), e.on(E.LEVEL_UPDATED, this.onLevelUpdated, this)
                        }
                        unregisterListeners() {
                            let e = this.hls;
                            e && (e.off(E.ERROR, this.onError, this), e.off(E.ERROR, this.onErrorOut, this), e.off(E.MANIFEST_LOADING, this.onManifestLoading, this), e.off(E.LEVEL_UPDATED, this.onLevelUpdated, this))
                        }
                        destroy() {
                            this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {}
                        }
                        startLoad(e) {
                            this.playlistError = 0
                        }
                        stopLoad() {}
                        getVariantLevelIndex(e) {
                            return (null == e ? void 0 : e.type) === V.MAIN ? e.level : this.hls.loadLevel
                        }
                        onManifestLoading() {
                            this.playlistError = 0, this.penalizedRenditions = {}
                        }
                        onLevelUpdated() {
                            this.playlistError = 0
                        }
                        onError(e, t) {
                            var r, i, s, a;
                            if (t.fatal) return;
                            let n = this.hls,
                                l = t.context;
                            switch (t.details) {
                                case v.FRAG_LOAD_ERROR:
                                case v.FRAG_LOAD_TIMEOUT:
                                case v.KEY_LOAD_ERROR:
                                case v.KEY_LOAD_TIMEOUT:
                                    t.errorAction = this.getFragRetryOrSwitchAction(t);
                                    return;
                                case v.FRAG_PARSING_ERROR:
                                    if (null != (r = t.frag) && r.gap) {
                                        t.errorAction = {
                                            action: X.DoNothing,
                                            flags: Q.None
                                        };
                                        return
                                    }
                                case v.FRAG_GAP:
                                case v.FRAG_DECRYPT_ERROR:
                                    t.errorAction = this.getFragRetryOrSwitchAction(t), t.errorAction.action = X.SendAlternateToPenaltyBox;
                                    return;
                                case v.LEVEL_EMPTY_ERROR:
                                case v.LEVEL_PARSING_ERROR:
                                    {
                                        let e = t.parent === V.MAIN ? t.level : n.loadLevel;t.details === v.LEVEL_EMPTY_ERROR && null != (s = t.context) && null != (a = s.levelDetails) && a.live ? t.errorAction = this.getPlaylistRetryOrSwitchAction(t, e) : (t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, e))
                                    }
                                    return;
                                case v.LEVEL_LOAD_ERROR:
                                case v.LEVEL_LOAD_TIMEOUT:
                                    "number" == typeof(null == l ? void 0 : l.level) && (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, l.level));
                                    return;
                                case v.AUDIO_TRACK_LOAD_ERROR:
                                case v.AUDIO_TRACK_LOAD_TIMEOUT:
                                case v.SUBTITLE_LOAD_ERROR:
                                case v.SUBTITLE_TRACK_LOAD_TIMEOUT:
                                    if (l) {
                                        let e = n.levels[n.loadLevel];
                                        e && (l.type === H.AUDIO_TRACK && l.groupId === e.audioGroupId || l.type === H.SUBTITLE_TRACK && l.groupId === e.textGroupId) && (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, n.loadLevel), t.errorAction.action = X.SendAlternateToPenaltyBox, t.errorAction.flags = Q.MoveAllAlternatesMatchingHost)
                                    }
                                    return;
                                case v.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
                                    {
                                        let e = n.levels[n.loadLevel],
                                            r = null == e ? void 0 : e.attrs["HDCP-LEVEL"];r && (t.errorAction = {
                                            action: X.SendAlternateToPenaltyBox,
                                            flags: Q.MoveAllAlternatesMatchingHDCP,
                                            hdcpLevel: r
                                        })
                                    }
                                    return;
                                case v.BUFFER_ADD_CODEC_ERROR:
                                case v.REMUX_ALLOC_ERROR:
                                    t.errorAction = this.getLevelSwitchAction(t, null != (i = t.level) ? i : n.loadLevel);
                                    return;
                                case v.INTERNAL_EXCEPTION:
                                case v.BUFFER_APPENDING_ERROR:
                                case v.BUFFER_APPEND_ERROR:
                                case v.BUFFER_FULL_ERROR:
                                case v.LEVEL_SWITCH_ERROR:
                                case v.BUFFER_STALLED_ERROR:
                                case v.BUFFER_SEEK_OVER_HOLE:
                                case v.BUFFER_NUDGE_ON_STALL:
                                    t.errorAction = {
                                        action: X.DoNothing,
                                        flags: Q.None
                                    };
                                    return
                            }
                            if (t.type === y.KEY_SYSTEM_ERROR) {
                                let e = this.getVariantLevelIndex(t.frag);
                                t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, e);
                                return
                            }
                        }
                        getPlaylistRetryOrSwitchAction(e, t) {
                            var r;
                            let i = this.hls,
                                s = getRetryConfig(i.config.playlistLoadPolicy, e),
                                a = this.playlistError++,
                                n = null == (r = e.response) ? void 0 : r.code,
                                l = shouldRetry(s, a, isTimeoutError(e), n);
                            if (l) return {
                                action: X.RetryRequest,
                                flags: Q.None,
                                retryConfig: s,
                                retryCount: a
                            };
                            let o = this.getLevelSwitchAction(e, t);
                            return s && (o.retryConfig = s, o.retryCount = a), o
                        }
                        getFragRetryOrSwitchAction(e) {
                            let t = this.hls,
                                r = this.getVariantLevelIndex(e.frag),
                                i = t.levels[r],
                                {
                                    fragLoadPolicy: s,
                                    keyLoadPolicy: a
                                } = t.config,
                                n = getRetryConfig(e.details.startsWith("key") ? a : s, e),
                                l = t.levels.reduce((e, t) => e + t.fragmentError, 0);
                            if (i) {
                                var o;
                                e.details !== v.FRAG_GAP && i.fragmentError++;
                                let t = null == (o = e.response) ? void 0 : o.code,
                                    r = shouldRetry(n, l, isTimeoutError(e), t);
                                if (r) return {
                                    action: X.RetryRequest,
                                    flags: Q.None,
                                    retryConfig: n,
                                    retryCount: l
                                }
                            }
                            let h = this.getLevelSwitchAction(e, r);
                            return n && (h.retryConfig = n, h.retryCount = l), h
                        }
                        getLevelSwitchAction(e, t) {
                            let r = this.hls;
                            null == t && (t = r.loadLevel);
                            let i = this.hls.levels[t];
                            if (i && (i.loadError++, r.autoLevelEnabled)) {
                                var s, a;
                                let t = -1,
                                    {
                                        levels: n,
                                        loadLevel: l,
                                        minAutoLevel: o,
                                        maxAutoLevel: h
                                    } = r,
                                    d = null == (s = e.frag) ? void 0 : s.type,
                                    {
                                        type: u,
                                        groupId: c
                                    } = null != (a = e.context) ? a : {};
                                for (let r = n.length; r--;) {
                                    let s = (r + l) % n.length;
                                    if (s !== l && s >= o && s <= h && 0 === n[s].loadError) {
                                        let r = n[s];
                                        if (e.details === v.FRAG_GAP && e.frag) {
                                            let t = n[s].details;
                                            if (t) {
                                                let r = findFragmentByPTS(e.frag, t.fragments, e.frag.start);
                                                if (null != r && r.gap) continue
                                            }
                                        } else if (u === H.AUDIO_TRACK && c === r.audioGroupId || u === H.SUBTITLE_TRACK && c === r.textGroupId) continue;
                                        else if (d === V.AUDIO && i.audioGroupId === r.audioGroupId || d === V.SUBTITLE && i.textGroupId === r.textGroupId) continue;
                                        t = s;
                                        break
                                    }
                                }
                                if (t > -1 && r.loadLevel !== t) return e.levelRetry = !0, this.playlistError = 0, {
                                    action: X.SendAlternateToPenaltyBox,
                                    flags: Q.None,
                                    nextAutoLevel: t
                                }
                            }
                            return {
                                action: X.SendAlternateToPenaltyBox,
                                flags: Q.MoveAllAlternatesMatchingHost
                            }
                        }
                        onErrorOut(e, t) {
                            var r;
                            switch (null == (r = t.errorAction) ? void 0 : r.action) {
                                case X.DoNothing:
                                    break;
                                case X.SendAlternateToPenaltyBox:
                                    this.sendAlternateToPenaltyBox(t), t.errorAction.resolved || t.details === v.FRAG_GAP || (t.fatal = !0)
                            }
                            if (t.fatal) {
                                this.hls.stopLoad();
                                return
                            }
                        }
                        sendAlternateToPenaltyBox(e) {
                            let t = this.hls,
                                r = e.errorAction;
                            if (!r) return;
                            let {
                                flags: i,
                                hdcpLevel: s,
                                nextAutoLevel: a
                            } = r;
                            switch (i) {
                                case Q.None:
                                    this.switchLevel(e, a);
                                    break;
                                case Q.MoveAllAlternatesMatchingHost:
                                    r.resolved || (r.resolved = this.redundantFailover(e));
                                    break;
                                case Q.MoveAllAlternatesMatchingHDCP:
                                    s && (t.maxHdcpLevel = j[j.indexOf(s) - 1], r.resolved = !0), this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`)
                            }
                            r.resolved || this.switchLevel(e, a)
                        }
                        switchLevel(e, t) {
                            void 0 !== t && e.errorAction && (this.warn(`switching to level ${t} after ${e.details}`), this.hls.nextAutoLevel = t, e.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel)
                        }
                        redundantFailover(e) {
                            let {
                                hls: t,
                                penalizedRenditions: r
                            } = this, i = e.parent === V.MAIN ? e.level : t.loadLevel, s = t.levels[i], a = s.url.length, n = e.frag ? e.frag.urlId : s.urlId;
                            s.urlId === n && (!e.frag || s.details) && this.penalizeRendition(s, e);
                            for (let l = 1; l < a; l++) {
                                let o = (n + l) % a,
                                    h = r[o];
                                if (!h || function(e, t, r) {
                                        if (performance.now() - e.lastErrorPerfMs > 3e5) return !0;
                                        let i = e.details;
                                        if (t.details === v.FRAG_GAP && i && t.frag) {
                                            let e = t.frag.start,
                                                r = findFragmentByPTS(null, i.fragments, e);
                                            if (r && !r.gap) return !0
                                        }
                                        if (r && e.errors.length < r.errors.length) {
                                            let r = e.errors[e.errors.length - 1];
                                            if (i && r.frag && t.frag && Math.abs(r.frag.start - t.frag.start) > 3 * i.targetduration) return !0
                                        }
                                        return !1
                                    }(h, e, r[n])) return this.warn(`Switching to Redundant Stream ${o+1}/${a}: "${s.url[o]}" after ${e.details}`), this.playlistError = 0, t.levels.forEach(e => {
                                    e.urlId = o
                                }), t.nextLoadLevel = i, !0
                            }
                            return !1
                        }
                        penalizeRendition(e, t) {
                            let {
                                penalizedRenditions: r
                            } = this, i = r[e.urlId] || {
                                lastErrorPerfMs: 0,
                                errors: [],
                                details: void 0
                            };
                            i.lastErrorPerfMs = performance.now(), i.errors.push(t), i.details = e.details, r[e.urlId] = i
                        }
                    },
                    fpsController: class {
                        constructor(e) {
                            this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = e, this.registerListeners()
                        }
                        setStreamController(e) {
                            this.streamController = e
                        }
                        registerListeners() {
                            this.hls.on(E.MEDIA_ATTACHING, this.onMediaAttaching, this)
                        }
                        unregisterListeners() {
                            this.hls.off(E.MEDIA_ATTACHING, this.onMediaAttaching, this)
                        }
                        destroy() {
                            this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null
                        }
                        onMediaAttaching(e, t) {
                            let r = this.hls.config;
                            if (r.capLevelOnFPSDrop) {
                                let e = t.media instanceof self.HTMLVideoElement ? t.media : null;
                                this.media = e, e && "function" == typeof e.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), r.fpsDroppedMonitoringPeriod)
                            }
                        }
                        checkFPS(e, t, r) {
                            let i = performance.now();
                            if (t) {
                                if (this.lastTime) {
                                    let e = i - this.lastTime,
                                        s = r - this.lastDroppedFrames,
                                        a = t - this.lastDecodedFrames,
                                        n = this.hls;
                                    if (n.trigger(E.FPS_DROP, {
                                            currentDropped: s,
                                            currentDecoded: a,
                                            totalDroppedFrames: r
                                        }), 1e3 * s / e > 0 && s > n.config.fpsDroppedMonitoringThreshold * a) {
                                        let e = n.currentLevel;
                                        L.warn("drop FPS ratio greater than max allowed value for currentLevel: " + e), e > 0 && (-1 === n.autoLevelCapping || n.autoLevelCapping >= e) && (e -= 1, n.trigger(E.FPS_DROP_LEVEL_CAPPING, {
                                            level: e,
                                            droppedLevel: n.currentLevel
                                        }), n.autoLevelCapping = e, this.streamController.nextLevelSwitch())
                                    }
                                }
                                this.lastTime = i, this.lastDroppedFrames = r, this.lastDecodedFrames = t
                            }
                        }
                        checkFPSInterval() {
                            let e = this.media;
                            if (e) {
                                if (this.isVideoPlaybackQualityAvailable) {
                                    let t = e.getVideoPlaybackQuality();
                                    this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
                                } else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
                            }
                        }
                    },
                    stretchShortVideoTrack: !1,
                    maxAudioFramesDrift: 1,
                    forceKeyFrameOnDiscontinuity: !0,
                    abrEwmaFastLive: 3,
                    abrEwmaSlowLive: 9,
                    abrEwmaFastVoD: 3,
                    abrEwmaSlowVoD: 9,
                    abrEwmaDefaultEstimate: 5e5,
                    abrBandWidthFactor: .95,
                    abrBandWidthUpFactor: .7,
                    abrMaxWithRealBitrate: !1,
                    maxStarvationDelay: 4,
                    maxLoadingDelay: 4,
                    minAutoBitrate: 0,
                    emeEnabled: !1,
                    widevineLicenseUrl: void 0,
                    drmSystems: {},
                    drmSystemOptions: {},
                    requestMediaKeySystemAccessFunc: P,
                    testBandwidth: !0,
                    progressive: !1,
                    lowLatencyMode: !0,
                    cmcd: void 0,
                    enableDateRangeMetadataCues: !0,
                    enableEmsgMetadataCues: !0,
                    enableID3MetadataCues: !0,
                    certLoadPolicy: {
                        default: {
                            maxTimeToFirstByteMs: 8e3,
                            maxLoadTimeMs: 2e4,
                            timeoutRetry: null,
                            errorRetry: null
                        }
                    },
                    keyLoadPolicy: {
                        default: {
                            maxTimeToFirstByteMs: 8e3,
                            maxLoadTimeMs: 2e4,
                            timeoutRetry: {
                                maxNumRetry: 1,
                                retryDelayMs: 1e3,
                                maxRetryDelayMs: 2e4,
                                backoff: "linear"
                            },
                            errorRetry: {
                                maxNumRetry: 8,
                                retryDelayMs: 1e3,
                                maxRetryDelayMs: 2e4,
                                backoff: "linear"
                            }
                        }
                    },
                    manifestLoadPolicy: {
                        default: {
                            maxTimeToFirstByteMs: 1 / 0,
                            maxLoadTimeMs: 2e4,
                            timeoutRetry: {
                                maxNumRetry: 2,
                                retryDelayMs: 0,
                                maxRetryDelayMs: 0
                            },
                            errorRetry: {
                                maxNumRetry: 1,
                                retryDelayMs: 1e3,
                                maxRetryDelayMs: 8e3
                            }
                        }
                    },
                    playlistLoadPolicy: {
                        default: {
                            maxTimeToFirstByteMs: 1e4,
                            maxLoadTimeMs: 2e4,
                            timeoutRetry: {
                                maxNumRetry: 2,
                                retryDelayMs: 0,
                                maxRetryDelayMs: 0
                            },
                            errorRetry: {
                                maxNumRetry: 2,
                                retryDelayMs: 1e3,
                                maxRetryDelayMs: 8e3
                            }
                        }
                    },
                    fragLoadPolicy: {
                        default: {
                            maxTimeToFirstByteMs: 1e4,
                            maxLoadTimeMs: 12e4,
                            timeoutRetry: {
                                maxNumRetry: 4,
                                retryDelayMs: 0,
                                maxRetryDelayMs: 0
                            },
                            errorRetry: {
                                maxNumRetry: 6,
                                retryDelayMs: 1e3,
                                maxRetryDelayMs: 8e3
                            }
                        }
                    },
                    steeringManifestLoadPolicy: {
                        default: {
                            maxTimeToFirstByteMs: 1e4,
                            maxLoadTimeMs: 2e4,
                            timeoutRetry: {
                                maxNumRetry: 2,
                                retryDelayMs: 0,
                                maxRetryDelayMs: 0
                            },
                            errorRetry: {
                                maxNumRetry: 1,
                                retryDelayMs: 1e3,
                                maxRetryDelayMs: 8e3
                            }
                        }
                    },
                    manifestLoadingTimeOut: 1e4,
                    manifestLoadingMaxRetry: 1,
                    manifestLoadingRetryDelay: 1e3,
                    manifestLoadingMaxRetryTimeout: 64e3,
                    levelLoadingTimeOut: 1e4,
                    levelLoadingMaxRetry: 4,
                    levelLoadingRetryDelay: 1e3,
                    levelLoadingMaxRetryTimeout: 64e3,
                    fragLoadingTimeOut: 2e4,
                    fragLoadingMaxRetry: 6,
                    fragLoadingRetryDelay: 1e3,
                    fragLoadingMaxRetryTimeout: 64e3
                }, {
                    cueHandler: {
                        newCue(e, t, r, i) {
                            let s, a, n, l, o;
                            let h = [],
                                d = self.VTTCue || self.TextTrackCue;
                            for (let c = 0; c < i.rows.length; c++)
                                if (s = i.rows[c], n = !0, l = 0, o = "", !s.isEmpty()) {
                                    var u;
                                    for (let e = 0; e < s.chars.length; e++) ex.test(s.chars[e].uchar) && n ? l++ : (o += s.chars[e].uchar, n = !1);
                                    s.cueStartTime = t, t === r && (r += 1e-4), l >= 16 ? l-- : l++;
                                    let i = fixLineBreaks(o.trim()),
                                        f = generateCueId(t, r, i);
                                    null != e && null != (u = e.cues) && u.getCueById(f) || ((a = new d(t, r, i)).id = f, a.line = c + 1, a.align = "left", a.position = 10 + Math.min(80, 10 * Math.floor(8 * l / 32)), h.push(a))
                                }
                            return e && h.length && (h.sort((e, t) => "auto" === e.line || "auto" === t.line ? 0 : e.line > 8 && t.line > 8 ? t.line - e.line : e.line - t.line), h.forEach(t => addCueToTrack(e, t))), h
                        }
                    },
                    enableWebVTT: !0,
                    enableIMSC1: !0,
                    enableCEA708Captions: !0,
                    captionsTextTrack1Label: "English",
                    captionsTextTrack1LanguageCode: "en",
                    captionsTextTrack2Label: "Spanish",
                    captionsTextTrack2LanguageCode: "es",
                    captionsTextTrack3Label: "Unknown CC",
                    captionsTextTrack3LanguageCode: "",
                    captionsTextTrack4Label: "Unknown CC",
                    captionsTextTrack4LanguageCode: "",
                    renderTextTracksNatively: !0
                }), {}, {
                    subtitleStreamController: class extends BaseStreamController {
                        constructor(e, t, r) {
                            super(e, t, r, "[subtitle-stream-controller]", V.SUBTITLE), this.levels = [], this.currentTrackId = -1, this.tracksBuffered = [], this.mainDetails = null, this._registerListeners()
                        }
                        onHandlerDestroying() {
                            this._unregisterListeners(), this.mainDetails = null
                        }
                        _registerListeners() {
                            let {
                                hls: e
                            } = this;
                            e.on(E.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(E.MANIFEST_LOADING, this.onManifestLoading, this), e.on(E.LEVEL_LOADED, this.onLevelLoaded, this), e.on(E.ERROR, this.onError, this), e.on(E.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(E.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(E.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(E.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.on(E.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(E.FRAG_BUFFERED, this.onFragBuffered, this)
                        }
                        _unregisterListeners() {
                            let {
                                hls: e
                            } = this;
                            e.off(E.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(E.MANIFEST_LOADING, this.onManifestLoading, this), e.off(E.LEVEL_LOADED, this.onLevelLoaded, this), e.off(E.ERROR, this.onError, this), e.off(E.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(E.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(E.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(E.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.off(E.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(E.FRAG_BUFFERED, this.onFragBuffered, this)
                        }
                        startLoad(e) {
                            this.stopLoad(), this.state = et.IDLE, this.setInterval(500), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
                        }
                        onManifestLoading() {
                            this.mainDetails = null, this.fragmentTracker.removeAllFragments()
                        }
                        onMediaDetaching() {
                            this.tracksBuffered = [], super.onMediaDetaching()
                        }
                        onLevelLoaded(e, t) {
                            this.mainDetails = t.details
                        }
                        onSubtitleFragProcessed(e, t) {
                            let r;
                            let {
                                frag: i,
                                success: s
                            } = t;
                            if (this.fragPrevious = i, this.state = et.IDLE, !s) return;
                            let a = this.tracksBuffered[this.currentTrackId];
                            if (!a) return;
                            let n = i.start;
                            for (let e = 0; e < a.length; e++)
                                if (n >= a[e].start && n <= a[e].end) {
                                    r = a[e];
                                    break
                                }
                            let l = i.start + i.duration;
                            r ? r.end = l : (r = {
                                start: n,
                                end: l
                            }, a.push(r)), this.fragmentTracker.fragBuffered(i)
                        }
                        onBufferFlushing(e, t) {
                            let {
                                startOffset: r,
                                endOffset: i
                            } = t;
                            if (0 === r && i !== Number.POSITIVE_INFINITY) {
                                let e = i - 1;
                                if (e <= 0) return;
                                t.endOffsetSubtitles = Math.max(0, e), this.tracksBuffered.forEach(t => {
                                    for (let r = 0; r < t.length;) {
                                        if (t[r].end <= e) {
                                            t.shift();
                                            continue
                                        }
                                        if (t[r].start < e) t[r].start = e;
                                        else break;
                                        r++
                                    }
                                }), this.fragmentTracker.removeFragmentsInRange(r, e, V.SUBTITLE)
                            }
                        }
                        onFragBuffered(e, t) {
                            if (!this.loadedmetadata && t.frag.type === V.MAIN) {
                                var r;
                                null != (r = this.media) && r.buffered.length && (this.loadedmetadata = !0)
                            }
                        }
                        onError(e, t) {
                            let r = t.frag;
                            (null == r ? void 0 : r.type) === V.SUBTITLE && (this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== et.STOPPED && (this.state = et.IDLE))
                        }
                        onSubtitleTracksUpdated(e, {
                            subtitleTracks: t
                        }) {
                            if (subtitleOptionsIdentical(this.levels, t)) {
                                this.levels = t.map(e => new Level(e));
                                return
                            }
                            this.tracksBuffered = [], this.levels = t.map(e => {
                                let t = new Level(e);
                                return this.tracksBuffered[t.id] = [], t
                            }), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, V.SUBTITLE), this.fragPrevious = null, this.mediaBuffer = null
                        }
                        onSubtitleTrackSwitch(e, t) {
                            if (this.currentTrackId = t.id, !this.levels.length || -1 === this.currentTrackId) {
                                this.clearInterval();
                                return
                            }
                            let r = this.levels[this.currentTrackId];
                            null != r && r.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, r && this.setInterval(500)
                        }
                        onSubtitleTrackLoaded(e, t) {
                            var r;
                            let {
                                details: i,
                                id: s
                            } = t, {
                                currentTrackId: a,
                                levels: n
                            } = this;
                            if (!n.length) return;
                            let l = n[a];
                            if (s >= n.length || s !== a || !l) return;
                            this.mediaBuffer = this.mediaBufferTimeRanges;
                            let o = 0;
                            if (i.live || null != (r = l.details) && r.live) {
                                let e = this.mainDetails;
                                if (i.deltaUpdateFailed || !e) return;
                                let t = e.fragments[0];
                                l.details ? 0 === (o = this.alignPlaylists(i, l.details)) && t && addSliding(i, o = t.start) : i.hasProgramDateTime && e.hasProgramDateTime ? (alignMediaPlaylistByPDT(i, e), o = i.fragments[0].start) : t && addSliding(i, o = t.start)
                            }
                            if (l.details = i, this.levelLastLoaded = s, this.startFragRequested || !this.mainDetails && i.live || this.setStartPosition(l.details, o), this.tick(), i.live && !this.fragCurrent && this.media && this.state === et.IDLE) {
                                let e = findFragmentByPTS(null, i.fragments, this.media.currentTime, 0);
                                e || (this.warn("Subtitle playlist not aligned with playback"), l.details = void 0)
                            }
                        }
                        _handleFragmentLoadComplete(e) {
                            let {
                                frag: t,
                                payload: r
                            } = e, i = t.decryptdata, s = this.hls;
                            if (!this.fragContextChanged(t) && r && r.byteLength > 0 && i && i.key && i.iv && "AES-128" === i.method) {
                                let e = performance.now();
                                this.decrypter.decrypt(new Uint8Array(r), i.key.buffer, i.iv.buffer).catch(e => {
                                    throw s.trigger(E.ERROR, {
                                        type: y.MEDIA_ERROR,
                                        details: v.FRAG_DECRYPT_ERROR,
                                        fatal: !1,
                                        error: e,
                                        reason: e.message,
                                        frag: t
                                    }), e
                                }).then(r => {
                                    let i = performance.now();
                                    s.trigger(E.FRAG_DECRYPTED, {
                                        frag: t,
                                        payload: r,
                                        stats: {
                                            tstart: e,
                                            tdecrypt: i
                                        }
                                    })
                                }).catch(e => {
                                    this.warn(`${e.name}: ${e.message}`), this.state = et.IDLE
                                })
                            }
                        }
                        doTick() {
                            if (!this.media) {
                                this.state = et.IDLE;
                                return
                            }
                            if (this.state === et.IDLE) {
                                let {
                                    currentTrackId: e,
                                    levels: t
                                } = this, r = t[e];
                                if (!t.length || !r || !r.details) return;
                                let {
                                    config: i
                                } = this, s = this.getLoadPosition(), a = BufferHelper.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], s, i.maxBufferHole), {
                                    end: n,
                                    len: l
                                } = a, o = this.getFwdBufferInfo(this.media, V.MAIN), h = r.details, d = this.getMaxBufferLength(null == o ? void 0 : o.len) + h.levelTargetDuration;
                                if (l > d) return;
                                let u = h.fragments,
                                    c = u.length,
                                    f = h.edge,
                                    g = null,
                                    m = this.fragPrevious;
                                if (n < f) {
                                    let e = i.maxFragLookUpTolerance,
                                        t = n > f - e ? 0 : e;
                                    (g = findFragmentByPTS(m, u, Math.max(u[0].start, n), t)) || !m || !(m.start < u[0].start) || (g = u[0])
                                } else g = u[c - 1];
                                if (!g) return;
                                if ("initSegment" !== (g = this.mapToInitFragWhenRequired(g)).sn) {
                                    let e = g.sn - h.startSN,
                                        t = u[e - 1];
                                    t && t.cc === g.cc && this.fragmentTracker.getState(t) === J.NOT_LOADED && (g = t)
                                }
                                this.fragmentTracker.getState(g) === J.NOT_LOADED && this.loadFragment(g, r, n)
                            }
                        }
                        getMaxBufferLength(e) {
                            let t = super.getMaxBufferLength();
                            return e ? Math.max(t, e) : t
                        }
                        loadFragment(e, t, r) {
                            this.fragCurrent = e, "initSegment" === e.sn ? this._loadInitSegment(e, t) : (this.startFragRequested = !0, super.loadFragment(e, t, r))
                        }
                        get mediaBufferTimeRanges() {
                            return new BufferableInstance(this.tracksBuffered[this.currentTrackId] || [])
                        }
                    },
                    subtitleTrackController: class extends BasePlaylistController {
                        constructor(e) {
                            super(e, "[subtitle-track-controller]"), this.media = null, this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0, this.queuedDefaultTrack = -1, this.trackChangeListener = () => this.onTextTracksChanged(), this.asyncPollTrackChange = () => this.pollTrackChange(0), this.useTextTrackPolling = !1, this.subtitlePollingInterval = -1, this._subtitleDisplay = !0, this.registerListeners()
                        }
                        destroy() {
                            this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, super.destroy()
                        }
                        get subtitleDisplay() {
                            return this._subtitleDisplay
                        }
                        set subtitleDisplay(e) {
                            this._subtitleDisplay = e, this.trackId > -1 && this.toggleTrackModes(this.trackId)
                        }
                        registerListeners() {
                            let {
                                hls: e
                            } = this;
                            e.on(E.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(E.MANIFEST_LOADING, this.onManifestLoading, this), e.on(E.MANIFEST_PARSED, this.onManifestParsed, this), e.on(E.LEVEL_LOADING, this.onLevelLoading, this), e.on(E.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(E.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(E.ERROR, this.onError, this)
                        }
                        unregisterListeners() {
                            let {
                                hls: e
                            } = this;
                            e.off(E.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(E.MANIFEST_LOADING, this.onManifestLoading, this), e.off(E.MANIFEST_PARSED, this.onManifestParsed, this), e.off(E.LEVEL_LOADING, this.onLevelLoading, this), e.off(E.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(E.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(E.ERROR, this.onError, this)
                        }
                        onMediaAttached(e, t) {
                            this.media = t.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange))
                        }
                        pollTrackChange(e) {
                            self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, e)
                        }
                        onMediaDetaching() {
                            if (!this.media) return;
                            self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId);
                            let e = filterSubtitleTracks(this.media.textTracks);
                            e.forEach(e => {
                                clearCurrentCues(e)
                            }), this.subtitleTrack = -1, this.media = null
                        }
                        onManifestLoading() {
                            this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0
                        }
                        onManifestParsed(e, t) {
                            this.tracks = t.subtitleTracks
                        }
                        onSubtitleTrackLoaded(e, t) {
                            let {
                                id: r,
                                details: i
                            } = t, {
                                trackId: s
                            } = this, a = this.tracksInGroup[s];
                            if (!a) {
                                this.warn(`Invalid subtitle track id ${r}`);
                                return
                            }
                            let n = a.details;
                            a.details = t.details, this.log(`subtitle track ${r} loaded [${i.startSN}-${i.endSN}]`), r === this.trackId && this.playlistLoaded(r, t, n)
                        }
                        onLevelLoading(e, t) {
                            this.switchLevel(t.level)
                        }
                        onLevelSwitching(e, t) {
                            this.switchLevel(t.level)
                        }
                        switchLevel(e) {
                            let t = this.hls.levels[e];
                            if (!(null != t && t.textGroupIds)) return;
                            let r = t.textGroupIds[t.urlId],
                                i = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
                            if (this.groupId !== r) {
                                let e = this.tracks.filter(e => !r || e.groupId === r);
                                this.tracksInGroup = e;
                                let t = this.findTrackId(null == i ? void 0 : i.name) || this.findTrackId();
                                this.groupId = r || null, this.log(`Updating subtitle tracks, ${e.length} track(s) found in "${r}" group-id`), this.hls.trigger(E.SUBTITLE_TRACKS_UPDATED, {
                                    subtitleTracks: e
                                }), -1 !== t && this.setSubtitleTrack(t, i)
                            } else this.shouldReloadPlaylist(i) && this.setSubtitleTrack(this.trackId, i)
                        }
                        findTrackId(e) {
                            let t = this.tracksInGroup;
                            for (let r = 0; r < t.length; r++) {
                                let i = t[r];
                                if ((!this.selectDefaultTrack || i.default) && (!e || e === i.name)) return i.id
                            }
                            return -1
                        }
                        onError(e, t) {
                            !t.fatal && t.context && t.context.type === H.SUBTITLE_TRACK && t.context.id === this.trackId && t.context.groupId === this.groupId && this.checkRetry(t)
                        }
                        get subtitleTracks() {
                            return this.tracksInGroup
                        }
                        get subtitleTrack() {
                            return this.trackId
                        }
                        set subtitleTrack(e) {
                            this.selectDefaultTrack = !1;
                            let t = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
                            this.setSubtitleTrack(e, t)
                        }
                        loadPlaylist(e) {
                            super.loadPlaylist();
                            let t = this.tracksInGroup[this.trackId];
                            if (this.shouldLoadPlaylist(t)) {
                                let r = t.id,
                                    i = t.groupId,
                                    s = t.url;
                                if (e) try {
                                    s = e.addDirectives(s)
                                } catch (e) {
                                    this.warn(`Could not construct new URL with HLS Delivery Directives: ${e}`)
                                }
                                this.log(`Loading subtitle playlist for id ${r}`), this.hls.trigger(E.SUBTITLE_TRACK_LOADING, {
                                    url: s,
                                    id: r,
                                    groupId: i,
                                    deliveryDirectives: e || null
                                })
                            }
                        }
                        toggleTrackModes(e) {
                            let {
                                media: t,
                                trackId: r
                            } = this;
                            if (!t) return;
                            let i = filterSubtitleTracks(t.textTracks),
                                s = i.filter(e => e.groupId === this.groupId);
                            if (-1 === e)[].slice.call(i).forEach(e => {
                                e.mode = "disabled"
                            });
                            else {
                                let e = s[r];
                                e && (e.mode = "disabled")
                            }
                            let a = s[e];
                            a && (a.mode = this.subtitleDisplay ? "showing" : "hidden")
                        }
                        setSubtitleTrack(e, t) {
                            var r;
                            let i = this.tracksInGroup;
                            if (!this.media) {
                                this.queuedDefaultTrack = e;
                                return
                            }
                            if (this.trackId !== e && this.toggleTrackModes(e), this.trackId === e && (-1 === e || null != (r = i[e]) && r.details) || e < -1 || e >= i.length) return;
                            this.clearTimer();
                            let s = i[e];
                            if (this.log(`Switching to subtitle-track ${e}` + (s ? ` "${s.name}" lang:${s.lang} group:${s.groupId}` : "")), this.trackId = e, s) {
                                let {
                                    id: e,
                                    groupId: r = "",
                                    name: i,
                                    type: a,
                                    url: n
                                } = s;
                                this.hls.trigger(E.SUBTITLE_TRACK_SWITCH, {
                                    id: e,
                                    groupId: r,
                                    name: i,
                                    type: a,
                                    url: n
                                });
                                let l = this.switchParams(s.url, null == t ? void 0 : t.details);
                                this.loadPlaylist(l)
                            } else this.hls.trigger(E.SUBTITLE_TRACK_SWITCH, {
                                id: e
                            })
                        }
                        onTextTracksChanged() {
                            if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively) return;
                            let e = -1,
                                t = filterSubtitleTracks(this.media.textTracks);
                            for (let r = 0; r < t.length; r++)
                                if ("hidden" === t[r].mode) e = r;
                                else if ("showing" === t[r].mode) {
                                e = r;
                                break
                            }
                            this.subtitleTrack !== e && (this.subtitleTrack = e)
                        }
                    },
                    timelineController: class {
                        constructor(e) {
                            if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = newVTTCCs(), this.captionsProperties = void 0, this.hls = e, this.config = e.config, this.Cues = e.config.cueHandler, this.captionsProperties = {
                                    textTrack1: {
                                        label: this.config.captionsTextTrack1Label,
                                        languageCode: this.config.captionsTextTrack1LanguageCode
                                    },
                                    textTrack2: {
                                        label: this.config.captionsTextTrack2Label,
                                        languageCode: this.config.captionsTextTrack2LanguageCode
                                    },
                                    textTrack3: {
                                        label: this.config.captionsTextTrack3Label,
                                        languageCode: this.config.captionsTextTrack3LanguageCode
                                    },
                                    textTrack4: {
                                        label: this.config.captionsTextTrack4Label,
                                        languageCode: this.config.captionsTextTrack4LanguageCode
                                    }
                                }, this.config.enableCEA708Captions) {
                                let e = new OutputFilter(this, "textTrack1"),
                                    t = new OutputFilter(this, "textTrack2"),
                                    r = new OutputFilter(this, "textTrack3"),
                                    i = new OutputFilter(this, "textTrack4");
                                this.cea608Parser1 = new Cea608Parser(1, e, t), this.cea608Parser2 = new Cea608Parser(3, r, i)
                            }
                            e.on(E.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(E.MANIFEST_LOADING, this.onManifestLoading, this), e.on(E.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(E.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(E.FRAG_LOADING, this.onFragLoading, this), e.on(E.FRAG_LOADED, this.onFragLoaded, this), e.on(E.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.on(E.FRAG_DECRYPTED, this.onFragDecrypted, this), e.on(E.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(E.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.on(E.BUFFER_FLUSHING, this.onBufferFlushing, this)
                        }
                        destroy() {
                            let {
                                hls: e
                            } = this;
                            e.off(E.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(E.MANIFEST_LOADING, this.onManifestLoading, this), e.off(E.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(E.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(E.FRAG_LOADING, this.onFragLoading, this), e.off(E.FRAG_LOADED, this.onFragLoaded, this), e.off(E.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.off(E.FRAG_DECRYPTED, this.onFragDecrypted, this), e.off(E.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(E.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.off(E.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null
                        }
                        addCues(e, t, r, i, s) {
                            let a = !1;
                            for (let e = s.length; e--;) {
                                var n;
                                let i = s[e],
                                    l = (n = i[0], Math.min(i[1], r) - Math.max(n, t));
                                if (l >= 0 && (i[0] = Math.min(i[0], t), i[1] = Math.max(i[1], r), a = !0, l / (r - t) > .5)) return
                            }
                            if (a || s.push([t, r]), this.config.renderTextTracksNatively) {
                                let s = this.captionsTracks[e];
                                this.Cues.newCue(s, t, r, i)
                            } else {
                                let s = this.Cues.newCue(null, t, r, i);
                                this.hls.trigger(E.CUES_PARSED, {
                                    type: "captions",
                                    cues: s,
                                    track: e
                                })
                            }
                        }
                        onInitPtsFound(e, {
                            frag: t,
                            id: r,
                            initPTS: i,
                            timescale: s
                        }) {
                            let {
                                unparsedVttFrags: a
                            } = this;
                            "main" === r && (this.initPTS[t.cc] = {
                                baseTime: i,
                                timescale: s
                            }), a.length && (this.unparsedVttFrags = [], a.forEach(e => {
                                this.onFragLoaded(E.FRAG_LOADED, e)
                            }))
                        }
                        getExistingTrack(e) {
                            let {
                                media: t
                            } = this;
                            if (t)
                                for (let r = 0; r < t.textTracks.length; r++) {
                                    let i = t.textTracks[r];
                                    if (i[e]) return i
                                }
                            return null
                        }
                        createCaptionsTrack(e) {
                            this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e)
                        }
                        createNativeTrack(e) {
                            if (this.captionsTracks[e]) return;
                            let {
                                captionsProperties: t,
                                captionsTracks: r,
                                media: i
                            } = this, {
                                label: s,
                                languageCode: a
                            } = t[e], n = this.getExistingTrack(e);
                            if (n) r[e] = n, clearCurrentCues(r[e]), sendAddTrackEvent(r[e], i);
                            else {
                                let t = this.createTextTrack("captions", s, a);
                                t && (t[e] = !0, r[e] = t)
                            }
                        }
                        createNonNativeTrack(e) {
                            if (this.nonNativeCaptionsTracks[e]) return;
                            let t = this.captionsProperties[e];
                            if (!t) return;
                            let r = t.label,
                                i = {
                                    _id: e,
                                    label: r,
                                    kind: "captions",
                                    default: !!t.media && !!t.media.default,
                                    closedCaptions: t.media
                                };
                            this.nonNativeCaptionsTracks[e] = i, this.hls.trigger(E.NON_NATIVE_TEXT_TRACKS_FOUND, {
                                tracks: [i]
                            })
                        }
                        createTextTrack(e, t, r) {
                            let i = this.media;
                            if (i) return i.addTextTrack(e, t, r)
                        }
                        onMediaAttaching(e, t) {
                            this.media = t.media, this._cleanTracks()
                        }
                        onMediaDetaching() {
                            let {
                                captionsTracks: e
                            } = this;
                            Object.keys(e).forEach(t => {
                                clearCurrentCues(e[t]), delete e[t]
                            }), this.nonNativeCaptionsTracks = {}
                        }
                        onManifestLoading() {
                            this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = newVTTCCs(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset())
                        }
                        _cleanTracks() {
                            let {
                                media: e
                            } = this;
                            if (!e) return;
                            let t = e.textTracks;
                            if (t)
                                for (let e = 0; e < t.length; e++) clearCurrentCues(t[e])
                        }
                        onSubtitleTracksUpdated(e, t) {
                            let r = t.subtitleTracks || [],
                                i = r.some(e => e.textCodec === eD);
                            if (this.config.enableWebVTT || i && this.config.enableIMSC1) {
                                let e = subtitleOptionsIdentical(this.tracks, r);
                                if (e) {
                                    this.tracks = r;
                                    return
                                }
                                if (this.textTracks = [], this.tracks = r, this.config.renderTextTracksNatively) {
                                    let e = this.media ? this.media.textTracks : null;
                                    this.tracks.forEach((t, r) => {
                                        let i;
                                        if (e && r < e.length) {
                                            let r = null;
                                            for (let i = 0; i < e.length; i++) {
                                                var s;
                                                if ((s = e[i]) && s.label === t.name && !(s.textTrack1 || s.textTrack2)) {
                                                    r = e[i];
                                                    break
                                                }
                                            }
                                            r && (i = r)
                                        }
                                        if (i) clearCurrentCues(i);
                                        else {
                                            let e = this._captionsOrSubtitlesFromCharacteristics(t);
                                            (i = this.createTextTrack(e, t.name, t.lang)) && (i.mode = "disabled")
                                        }
                                        i && (i.groupId = t.groupId, this.textTracks.push(i))
                                    })
                                } else if (this.tracks.length) {
                                    let e = this.tracks.map(e => ({
                                        label: e.name,
                                        kind: e.type.toLowerCase(),
                                        default: e.default,
                                        subtitleTrack: e
                                    }));
                                    this.hls.trigger(E.NON_NATIVE_TEXT_TRACKS_FOUND, {
                                        tracks: e
                                    })
                                }
                            }
                        }
                        _captionsOrSubtitlesFromCharacteristics(e) {
                            if (e.attrs.CHARACTERISTICS) {
                                let t = /transcribes-spoken-dialog/gi.test(e.attrs.CHARACTERISTICS),
                                    r = /describes-music-and-sound/gi.test(e.attrs.CHARACTERISTICS);
                                if (t && r) return "captions"
                            }
                            return "subtitles"
                        }
                        onManifestLoaded(e, t) {
                            this.config.enableCEA708Captions && t.captions && t.captions.forEach(e => {
                                let t = /(?:CC|SERVICE)([1-4])/.exec(e.instreamId);
                                if (!t) return;
                                let r = `textTrack${t[1]}`,
                                    i = this.captionsProperties[r];
                                i && (i.label = e.name, e.lang && (i.languageCode = e.lang), i.media = e)
                            })
                        }
                        closedCaptionsForLevel(e) {
                            let t = this.hls.levels[e.level];
                            return null == t ? void 0 : t.attrs["CLOSED-CAPTIONS"]
                        }
                        onFragLoading(e, t) {
                            let {
                                cea608Parser1: r,
                                cea608Parser2: i,
                                lastSn: s,
                                lastPartIndex: a
                            } = this;
                            if (this.enabled && r && i && t.frag.type === V.MAIN) {
                                var n, l;
                                let e = t.frag.sn,
                                    o = null != (n = null == t ? void 0 : null == (l = t.part) ? void 0 : l.index) ? n : -1;
                                e === s + 1 || e === s && o === a + 1 || (r.reset(), i.reset()), this.lastSn = e, this.lastPartIndex = o
                            }
                        }
                        onFragLoaded(e, t) {
                            let {
                                frag: r,
                                payload: i
                            } = t;
                            if (r.type === V.SUBTITLE) {
                                if (i.byteLength) {
                                    let e = r.decryptdata,
                                        s = "stats" in t;
                                    if (null == e || !e.encrypted || s) {
                                        let e = this.tracks[r.level],
                                            s = this.vttCCs;
                                        s[r.cc] || (s[r.cc] = {
                                            start: r.start,
                                            prevCC: this.prevCC,
                                            new: !0
                                        }, this.prevCC = r.cc), e && e.textCodec === eD ? this._parseIMSC1(r, i) : this._parseVTTs(t)
                                    }
                                } else this.hls.trigger(E.SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: r,
                                    error: Error("Empty subtitle payload")
                                })
                            }
                        }
                        _parseIMSC1(e, t) {
                            let r = this.hls;
                            parseIMSC1(t, this.initPTS[e.cc], t => {
                                this._appendCues(t, e.level), r.trigger(E.SUBTITLE_FRAG_PROCESSED, {
                                    success: !0,
                                    frag: e
                                })
                            }, t => {
                                L.log(`Failed to parse IMSC1: ${t}`), r.trigger(E.SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: e,
                                    error: t
                                })
                            })
                        }
                        _parseVTTs(e) {
                            var t;
                            let {
                                frag: r,
                                payload: i
                            } = e, {
                                initPTS: s,
                                unparsedVttFrags: a
                            } = this, n = s.length - 1;
                            if (!s[r.cc] && -1 === n) {
                                a.push(e);
                                return
                            }
                            let l = this.hls,
                                o = null != (t = r.initSegment) && t.data ? appendUint8Array(r.initSegment.data, new Uint8Array(i)) : i;
                            ! function(e, t, r, i, s, a, n) {
                                let l;
                                let o = new VTTParser,
                                    h = utf8ArrayToStr(new Uint8Array(e)).trim().replace(eI, "\n").split("\n"),
                                    d = [],
                                    u = t ? function(e, t = 1) {
                                        return toTimescaleFromBase(e, 9e4, 1 / t)
                                    }(t.baseTime, t.timescale) : 0,
                                    c = "00:00.000",
                                    f = 0,
                                    g = 0,
                                    m = !0;
                                o.oncue = function(e) {
                                    let a = r[i],
                                        n = r.ccOffset,
                                        o = (f - u) / 9e4;
                                    if (null != a && a.new && (void 0 !== g ? n = r.ccOffset = a.start : calculateOffset(r, i, o)), o) {
                                        if (!t) {
                                            l = Error("Missing initPTS for VTT MPEGTS");
                                            return
                                        }
                                        n = o - r.presentationOffset
                                    }
                                    let h = e.endTime - e.startTime,
                                        c = normalizePts((e.startTime + n - g) * 9e4, 9e4 * s) / 9e4;
                                    e.startTime = Math.max(c, 0), e.endTime = Math.max(c + h, 0);
                                    let m = e.text.trim();
                                    e.text = decodeURIComponent(encodeURIComponent(m)), e.id || (e.id = generateCueId(e.startTime, e.endTime, m)), e.endTime > 0 && d.push(e)
                                }, o.onparsingerror = function(e) {
                                    l = e
                                }, o.onflush = function() {
                                    if (l) {
                                        n(l);
                                        return
                                    }
                                    a(d)
                                }, h.forEach(e => {
                                    if (m) {
                                        if (startsWith(e, "X-TIMESTAMP-MAP=")) {
                                            m = !1, e.slice(16).split(",").forEach(e => {
                                                startsWith(e, "LOCAL:") ? c = e.slice(6) : startsWith(e, "MPEGTS:") && (f = parseInt(e.slice(7)))
                                            });
                                            try {
                                                g = cueString2millis(c) / 1e3
                                            } catch (e) {
                                                l = e
                                            }
                                            return
                                        }
                                        "" === e && (m = !1)
                                    }
                                    o.parse(e + "\n")
                                }), o.flush()
                            }(o, this.initPTS[r.cc], this.vttCCs, r.cc, r.start, e => {
                                this._appendCues(e, r.level), l.trigger(E.SUBTITLE_FRAG_PROCESSED, {
                                    success: !0,
                                    frag: r
                                })
                            }, t => {
                                let s = "Missing initPTS for VTT MPEGTS" === t.message;
                                s ? a.push(e) : this._fallbackToIMSC1(r, i), L.log(`Failed to parse VTT cue: ${t}`), s && n > r.cc || l.trigger(E.SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: r,
                                    error: t
                                })
                            })
                        }
                        _fallbackToIMSC1(e, t) {
                            let r = this.tracks[e.level];
                            r.textCodec || parseIMSC1(t, this.initPTS[e.cc], () => {
                                r.textCodec = eD, this._parseIMSC1(e, t)
                            }, () => {
                                r.textCodec = "wvtt"
                            })
                        }
                        _appendCues(e, t) {
                            let r = this.hls;
                            if (this.config.renderTextTracksNatively) {
                                let r = this.textTracks[t];
                                if (!r || "disabled" === r.mode) return;
                                e.forEach(e => addCueToTrack(r, e))
                            } else {
                                let i = this.tracks[t];
                                if (!i) return;
                                let s = i.default ? "default" : "subtitles" + t;
                                r.trigger(E.CUES_PARSED, {
                                    type: "subtitles",
                                    cues: e,
                                    track: s
                                })
                            }
                        }
                        onFragDecrypted(e, t) {
                            let {
                                frag: r
                            } = t;
                            r.type === V.SUBTITLE && this.onFragLoaded(E.FRAG_LOADED, t)
                        }
                        onSubtitleTracksCleared() {
                            this.tracks = [], this.captionsTracks = {}
                        }
                        onFragParsingUserdata(e, t) {
                            let {
                                cea608Parser1: r,
                                cea608Parser2: i
                            } = this;
                            if (!this.enabled || !(r && i)) return;
                            let {
                                frag: s,
                                samples: a
                            } = t;
                            if (s.type !== V.MAIN || "NONE" !== this.closedCaptionsForLevel(s))
                                for (let e = 0; e < a.length; e++) {
                                    let t = a[e].bytes;
                                    if (t) {
                                        let s = this.extractCea608Data(t);
                                        r.addData(a[e].pts, s[0]), i.addData(a[e].pts, s[1])
                                    }
                                }
                        }
                        onBufferFlushing(e, {
                            startOffset: t,
                            endOffset: r,
                            endOffsetSubtitles: i,
                            type: s
                        }) {
                            let {
                                media: a
                            } = this;
                            if (a && !(a.currentTime < r)) {
                                if (!s || "video" === s) {
                                    let {
                                        captionsTracks: e
                                    } = this;
                                    Object.keys(e).forEach(i => removeCuesInRange(e[i], t, r))
                                }
                                if (this.config.renderTextTracksNatively && 0 === t && void 0 !== i) {
                                    let {
                                        textTracks: e
                                    } = this;
                                    Object.keys(e).forEach(r => removeCuesInRange(e[r], t, i))
                                }
                            }
                        }
                        extractCea608Data(e) {
                            let t = [
                                    [],
                                    []
                                ],
                                r = 31 & e[0],
                                i = 2;
                            for (let s = 0; s < r; s++) {
                                let r = e[i++],
                                    s = 127 & e[i++],
                                    a = 127 & e[i++];
                                if (0 === s && 0 === a) continue;
                                let n = (4 & r) != 0;
                                if (n) {
                                    let e = 3 & r;
                                    (0 === e || 1 === e) && (t[e].push(s), t[e].push(a))
                                }
                            }
                            return t
                        }
                    },
                    audioStreamController: class extends BaseStreamController {
                        constructor(e, t, r) {
                            super(e, t, r, "[audio-stream-controller]", V.AUDIO), this.videoBuffer = null, this.videoTrackCC = -1, this.waitingVideoCC = -1, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = -1, this.waitingData = null, this.mainDetails = null, this.bufferFlushed = !1, this.cachedTrackLoadedData = null, this._registerListeners()
                        }
                        onHandlerDestroying() {
                            this._unregisterListeners(), this.mainDetails = null, this.bufferedTrack = null, this.switchingTrack = null
                        }
                        _registerListeners() {
                            let {
                                hls: e
                            } = this;
                            e.on(E.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(E.MANIFEST_LOADING, this.onManifestLoading, this), e.on(E.LEVEL_LOADED, this.onLevelLoaded, this), e.on(E.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.on(E.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(E.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(E.ERROR, this.onError, this), e.on(E.BUFFER_RESET, this.onBufferReset, this), e.on(E.BUFFER_CREATED, this.onBufferCreated, this), e.on(E.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(E.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(E.FRAG_BUFFERED, this.onFragBuffered, this)
                        }
                        _unregisterListeners() {
                            let {
                                hls: e
                            } = this;
                            e.off(E.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(E.MANIFEST_LOADING, this.onManifestLoading, this), e.off(E.LEVEL_LOADED, this.onLevelLoaded, this), e.off(E.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.off(E.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(E.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(E.ERROR, this.onError, this), e.off(E.BUFFER_RESET, this.onBufferReset, this), e.off(E.BUFFER_CREATED, this.onBufferCreated, this), e.off(E.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(E.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(E.FRAG_BUFFERED, this.onFragBuffered, this)
                        }
                        onInitPtsFound(e, {
                            frag: t,
                            id: r,
                            initPTS: i,
                            timescale: s
                        }) {
                            if ("main" === r) {
                                let e = t.cc;
                                this.initPTS[t.cc] = {
                                    baseTime: i,
                                    timescale: s
                                }, this.log(`InitPTS for cc: ${e} found from main: ${i}`), this.videoTrackCC = e, this.state === et.WAITING_INIT_PTS && this.tick()
                            }
                        }
                        startLoad(e) {
                            if (!this.levels) {
                                this.startPosition = e, this.state = et.STOPPED;
                                return
                            }
                            let t = this.lastCurrentTime;
                            this.stopLoad(), this.setInterval(100), t > 0 && -1 === e ? (this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`), e = t, this.state = et.IDLE) : (this.loadedmetadata = !1, this.state = et.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
                        }
                        doTick() {
                            var e, t;
                            switch (this.state) {
                                case et.IDLE:
                                    this.doTickIdle();
                                    break;
                                case et.WAITING_TRACK:
                                    {
                                        let {
                                            levels: t,
                                            trackId: r
                                        } = this,
                                        i = null == t ? void 0 : null == (e = t[r]) ? void 0 : e.details;
                                        if (i) {
                                            if (this.waitForCdnTuneIn(i)) break;
                                            this.state = et.WAITING_INIT_PTS
                                        }
                                        break
                                    }
                                case et.FRAG_LOADING_WAITING_RETRY:
                                    {
                                        let e = performance.now(),
                                            r = this.retryDate;
                                        (!r || e >= r || null != (t = this.media) && t.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded(this.trackId), this.state = et.IDLE);
                                        break
                                    }
                                case et.WAITING_INIT_PTS:
                                    {
                                        let e = this.waitingData;
                                        if (e) {
                                            let {
                                                frag: t,
                                                part: r,
                                                cache: i,
                                                complete: s
                                            } = e;
                                            if (void 0 !== this.initPTS[t.cc]) {
                                                this.waitingData = null, this.waitingVideoCC = -1, this.state = et.FRAG_LOADING;
                                                let e = i.flush(),
                                                    a = {
                                                        frag: t,
                                                        part: r,
                                                        payload: e,
                                                        networkDetails: null
                                                    };
                                                this._handleFragmentLoadProgress(a), s && super._handleFragmentLoadComplete(a)
                                            } else if (this.videoTrackCC !== this.waitingVideoCC) this.log(`Waiting fragment cc (${t.cc}) cancelled because video is at cc ${this.videoTrackCC}`), this.clearWaitingFragment();
                                            else {
                                                let e = this.getLoadPosition(),
                                                    r = BufferHelper.bufferInfo(this.mediaBuffer, e, this.config.maxBufferHole),
                                                    i = fragmentWithinToleranceTest(r.end, this.config.maxFragLookUpTolerance, t);
                                                i < 0 && (this.log(`Waiting fragment cc (${t.cc}) @ ${t.start} cancelled because another fragment at ${r.end} is needed`), this.clearWaitingFragment())
                                            }
                                        } else this.state = et.IDLE
                                    }
                            }
                            this.onTickEnd()
                        }
                        clearWaitingFragment() {
                            let e = this.waitingData;
                            e && (this.fragmentTracker.removeFragment(e.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = et.IDLE)
                        }
                        resetLoadingState() {
                            this.clearWaitingFragment(), super.resetLoadingState()
                        }
                        onTickEnd() {
                            let {
                                media: e
                            } = this;
                            null != e && e.readyState && (this.lastCurrentTime = e.currentTime)
                        }
                        doTickIdle() {
                            let {
                                hls: e,
                                levels: t,
                                media: r,
                                trackId: i
                            } = this, s = e.config;
                            if (!(null != t && t[i]) || !r && (this.startFragRequested || !s.startFragPrefetch)) return;
                            let a = t[i],
                                n = a.details;
                            if (!n || n.live && this.levelLastLoaded !== i || this.waitForCdnTuneIn(n)) {
                                this.state = et.WAITING_TRACK;
                                return
                            }
                            let l = this.mediaBuffer ? this.mediaBuffer : this.media;
                            this.bufferFlushed && l && (this.bufferFlushed = !1, this.afterBufferFlushed(l, D.AUDIO, V.AUDIO));
                            let o = this.getFwdBufferInfo(l, V.AUDIO);
                            if (null === o) return;
                            let {
                                bufferedTrack: h,
                                switchingTrack: d
                            } = this;
                            if (!d && this._streamEnded(o, n)) {
                                e.trigger(E.BUFFER_EOS, {
                                    type: "audio"
                                }), this.state = et.ENDED;
                                return
                            }
                            let u = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, V.MAIN),
                                c = o.len,
                                f = this.getMaxBufferLength(null == u ? void 0 : u.len);
                            if (c >= f && !d) return;
                            let g = n.fragments,
                                m = g[0].start,
                                p = o.end;
                            if (d && r) {
                                let e = this.getLoadPosition();
                                h && d.attrs !== h.attrs && (p = e), n.PTSKnown && e < m && (o.end > m || o.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), r.currentTime = m + .05)
                            }
                            let T = this.getNextFragment(p, n),
                                y = !1;
                            if (T && this.isLoopLoading(T, p) && (y = !!T.gap, T = this.getNextFragmentLoopLoading(T, n, o, V.MAIN, f)), !T) {
                                this.bufferFlushed = !0;
                                return
                            }
                            let v = u && T.start > u.end + n.targetduration;
                            if (v || !(null != u && u.len) && o.len) {
                                let e = this.getAppendedFrag(T.start, V.MAIN);
                                if (null === e || (y || (y = !!e.gap || !!v && 0 === u.len), v && !y || y && o.nextStart && o.nextStart < e.end)) return
                            }
                            this.loadFragment(T, a, p)
                        }
                        getMaxBufferLength(e) {
                            let t = super.getMaxBufferLength();
                            return e ? Math.min(Math.max(t, e), this.config.maxMaxBufferLength) : t
                        }
                        onMediaDetaching() {
                            this.videoBuffer = null, super.onMediaDetaching()
                        }
                        onAudioTracksUpdated(e, {
                            audioTracks: t
                        }) {
                            this.resetTransmuxer(), this.levels = t.map(e => new Level(e))
                        }
                        onAudioTrackSwitching(e, t) {
                            let r = !!t.url;
                            this.trackId = t.id;
                            let {
                                fragCurrent: i
                            } = this;
                            i && (i.abortRequests(), this.removeUnbufferedFrags(i.start)), this.resetLoadingState(), r ? this.setInterval(100) : this.resetTransmuxer(), r ? (this.switchingTrack = t, this.state = et.IDLE) : (this.switchingTrack = null, this.bufferedTrack = t, this.state = et.STOPPED), this.tick()
                        }
                        onManifestLoading() {
                            this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = !1, this.levels = this.mainDetails = this.waitingData = this.bufferedTrack = this.cachedTrackLoadedData = this.switchingTrack = null, this.startFragRequested = !1, this.trackId = this.videoTrackCC = this.waitingVideoCC = -1
                        }
                        onLevelLoaded(e, t) {
                            this.mainDetails = t.details, null !== this.cachedTrackLoadedData && (this.hls.trigger(E.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null)
                        }
                        onAudioTrackLoaded(e, t) {
                            var r;
                            if (null == this.mainDetails) {
                                this.cachedTrackLoadedData = t;
                                return
                            }
                            let {
                                levels: i
                            } = this, {
                                details: s,
                                id: a
                            } = t;
                            if (!i) {
                                this.warn(`Audio tracks were reset while loading level ${a}`);
                                return
                            }
                            this.log(`Track ${a} loaded [${s.startSN},${s.endSN}]${s.lastPartSn?`[part-${s.lastPartSn}-${s.lastPartIndex}]`:""},duration:${s.totalduration}`);
                            let n = i[a],
                                l = 0;
                            if (s.live || null != (r = n.details) && r.live) {
                                this.checkLiveUpdate(s);
                                let e = this.mainDetails;
                                if (s.deltaUpdateFailed || !e) return;
                                !n.details && s.hasProgramDateTime && e.hasProgramDateTime ? (alignMediaPlaylistByPDT(s, e), l = s.fragments[0].start) : l = this.alignPlaylists(s, n.details)
                            }
                            n.details = s, this.levelLastLoaded = a, this.startFragRequested || !this.mainDetails && s.live || this.setStartPosition(n.details, l), this.state !== et.WAITING_TRACK || this.waitForCdnTuneIn(s) || (this.state = et.IDLE), this.tick()
                        }
                        _handleFragmentLoadProgress(e) {
                            var t;
                            let {
                                frag: r,
                                part: i,
                                payload: s
                            } = e, {
                                config: a,
                                trackId: n,
                                levels: l
                            } = this;
                            if (!l) {
                                this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${r.sn} of level ${r.level} will not be buffered`);
                                return
                            }
                            let o = l[n];
                            if (!o) {
                                this.warn("Audio track is undefined on fragment load progress");
                                return
                            }
                            let h = o.details;
                            if (!h) {
                                this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(r.start);
                                return
                            }
                            let d = a.defaultAudioCodec || o.audioCodec || "mp4a.40.2",
                                u = this.transmuxer;
                            u || (u = this.transmuxer = new TransmuxerInterface(this.hls, V.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
                            let c = this.initPTS[r.cc],
                                f = null == (t = r.initSegment) ? void 0 : t.data;
                            if (void 0 !== c) {
                                let e = i ? i.index : -1,
                                    t = -1 !== e,
                                    a = new ChunkMetadata(r.level, r.sn, r.stats.chunkCount, s.byteLength, e, t);
                                u.push(s, f, d, "", r, i, h.totalduration, !1, a, c)
                            } else {
                                this.log(`Unknown video PTS for cc ${r.cc}, waiting for video PTS before demuxing audio frag ${r.sn} of [${h.startSN} ,${h.endSN}],track ${n}`);
                                let {
                                    cache: e
                                } = this.waitingData = this.waitingData || {
                                    frag: r,
                                    part: i,
                                    cache: new ChunkCache,
                                    complete: !1
                                };
                                e.push(new Uint8Array(s)), this.waitingVideoCC = this.videoTrackCC, this.state = et.WAITING_INIT_PTS
                            }
                        }
                        _handleFragmentLoadComplete(e) {
                            if (this.waitingData) {
                                this.waitingData.complete = !0;
                                return
                            }
                            super._handleFragmentLoadComplete(e)
                        }
                        onBufferReset() {
                            this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
                        }
                        onBufferCreated(e, t) {
                            let r = t.tracks.audio;
                            r && (this.mediaBuffer = r.buffer || null), t.tracks.video && (this.videoBuffer = t.tracks.video.buffer || null)
                        }
                        onFragBuffered(e, t) {
                            let {
                                frag: r,
                                part: i
                            } = t;
                            if (r.type !== V.AUDIO) {
                                if (!this.loadedmetadata && r.type === V.MAIN) {
                                    let e = this.videoBuffer || this.media;
                                    if (e) {
                                        let t = BufferHelper.getBuffered(e);
                                        t.length && (this.loadedmetadata = !0)
                                    }
                                }
                                return
                            }
                            if (this.fragContextChanged(r)) {
                                this.warn(`Fragment ${r.sn}${i?" p: "+i.index:""} of level ${r.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack?this.switchingTrack.name:"false"}`);
                                return
                            }
                            if ("initSegment" !== r.sn) {
                                this.fragPrevious = r;
                                let e = this.switchingTrack;
                                e && (this.bufferedTrack = e, this.switchingTrack = null, this.hls.trigger(E.AUDIO_TRACK_SWITCHED, _objectSpread2({}, e)))
                            }
                            this.fragBufferedComplete(r, i)
                        }
                        onError(e, t) {
                            var r;
                            if (t.fatal) {
                                this.state = et.ERROR;
                                return
                            }
                            switch (t.details) {
                                case v.FRAG_GAP:
                                case v.FRAG_PARSING_ERROR:
                                case v.FRAG_DECRYPT_ERROR:
                                case v.FRAG_LOAD_ERROR:
                                case v.FRAG_LOAD_TIMEOUT:
                                case v.KEY_LOAD_ERROR:
                                case v.KEY_LOAD_TIMEOUT:
                                    this.onFragmentOrKeyLoadError(V.AUDIO, t);
                                    break;
                                case v.AUDIO_TRACK_LOAD_ERROR:
                                case v.AUDIO_TRACK_LOAD_TIMEOUT:
                                case v.LEVEL_PARSING_ERROR:
                                    t.levelRetry || this.state !== et.WAITING_TRACK || (null == (r = t.context) ? void 0 : r.type) !== H.AUDIO_TRACK || (this.state = et.IDLE);
                                    break;
                                case v.BUFFER_FULL_ERROR:
                                    if (!t.parent || "audio" !== t.parent) return;
                                    this.reduceLengthAndFlushBuffer(t) && (this.bufferedTrack = null, super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
                                    break;
                                case v.INTERNAL_EXCEPTION:
                                    this.recoverWorkerError(t)
                            }
                        }
                        onBufferFlushed(e, {
                            type: t
                        }) {
                            t === D.AUDIO && (this.bufferFlushed = !0, this.state === et.ENDED && (this.state = et.IDLE))
                        }
                        _handleTransmuxComplete(e) {
                            var t;
                            let r = "audio",
                                {
                                    hls: i
                                } = this,
                                {
                                    remuxResult: s,
                                    chunkMeta: a
                                } = e,
                                n = this.getCurrentContext(a);
                            if (!n) {
                                this.resetWhenMissingContext(a);
                                return
                            }
                            let {
                                frag: l,
                                part: o,
                                level: h
                            } = n, {
                                details: d
                            } = h, {
                                audio: u,
                                text: c,
                                id3: f,
                                initSegment: g
                            } = s;
                            if (this.fragContextChanged(l) || !d) {
                                this.fragmentTracker.removeFragment(l);
                                return
                            }
                            if (this.state = et.PARSING, this.switchingTrack && u && this.completeAudioSwitch(this.switchingTrack), null != g && g.tracks) {
                                let e = l.initSegment || l;
                                this._bufferInitSegment(g.tracks, e, a), i.trigger(E.FRAG_PARSING_INIT_SEGMENT, {
                                    frag: e,
                                    id: r,
                                    tracks: g.tracks
                                })
                            }
                            if (u) {
                                let {
                                    startPTS: e,
                                    endPTS: t,
                                    startDTS: r,
                                    endDTS: i
                                } = u;
                                o && (o.elementaryStreams[D.AUDIO] = {
                                    startPTS: e,
                                    endPTS: t,
                                    startDTS: r,
                                    endDTS: i
                                }), l.setElementaryStreamInfo(D.AUDIO, e, t, r, i), this.bufferFragmentData(u, l, o, a)
                            }
                            if (null != f && null != (t = f.samples) && t.length) {
                                let e = _extends({
                                    id: r,
                                    frag: l,
                                    details: d
                                }, f);
                                i.trigger(E.FRAG_PARSING_METADATA, e)
                            }
                            if (c) {
                                let e = _extends({
                                    id: r,
                                    frag: l,
                                    details: d
                                }, c);
                                i.trigger(E.FRAG_PARSING_USERDATA, e)
                            }
                        }
                        _bufferInitSegment(e, t, r) {
                            if (this.state !== et.PARSING) return;
                            e.video && delete e.video;
                            let i = e.audio;
                            if (!i) return;
                            i.levelCodec = i.codec, i.id = "audio", this.log(`Init audio buffer, container:${i.container}, codecs[parsed]=[${i.codec}]`), this.hls.trigger(E.BUFFER_CODECS, e);
                            let s = i.initSegment;
                            if (null != s && s.byteLength) {
                                let e = {
                                    type: "audio",
                                    frag: t,
                                    part: null,
                                    chunkMeta: r,
                                    parent: t.type,
                                    data: s
                                };
                                this.hls.trigger(E.BUFFER_APPENDING, e)
                            }
                            this.tick()
                        }
                        loadFragment(e, t, r) {
                            let i = this.fragmentTracker.getState(e);
                            if (this.fragCurrent = e, this.switchingTrack || i === J.NOT_LOADED || i === J.PARTIAL) {
                                var s;
                                "initSegment" === e.sn ? this._loadInitSegment(e, t) : null != (s = t.details) && s.live && !this.initPTS[e.cc] ? (this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`), this.state = et.WAITING_INIT_PTS) : (this.startFragRequested = !0, super.loadFragment(e, t, r))
                            } else this.clearTrackerIfNeeded(e)
                        }
                        completeAudioSwitch(e) {
                            let {
                                hls: t,
                                media: r,
                                bufferedTrack: i
                            } = this, s = null == i ? void 0 : i.attrs, a = e.attrs;
                            r && s && (s.CHANNELS !== a.CHANNELS || s.NAME !== a.NAME || s.LANGUAGE !== a.LANGUAGE) && (this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio")), this.bufferedTrack = e, this.switchingTrack = null, t.trigger(E.AUDIO_TRACK_SWITCHED, _objectSpread2({}, e))
                        }
                    },
                    audioTrackController: class extends BasePlaylistController {
                        constructor(e) {
                            super(e, "[audio-track-controller]"), this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.registerListeners()
                        }
                        registerListeners() {
                            let {
                                hls: e
                            } = this;
                            e.on(E.MANIFEST_LOADING, this.onManifestLoading, this), e.on(E.MANIFEST_PARSED, this.onManifestParsed, this), e.on(E.LEVEL_LOADING, this.onLevelLoading, this), e.on(E.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(E.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(E.ERROR, this.onError, this)
                        }
                        unregisterListeners() {
                            let {
                                hls: e
                            } = this;
                            e.off(E.MANIFEST_LOADING, this.onManifestLoading, this), e.off(E.MANIFEST_PARSED, this.onManifestParsed, this), e.off(E.LEVEL_LOADING, this.onLevelLoading, this), e.off(E.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(E.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(E.ERROR, this.onError, this)
                        }
                        destroy() {
                            this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, super.destroy()
                        }
                        onManifestLoading() {
                            this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0
                        }
                        onManifestParsed(e, t) {
                            this.tracks = t.audioTracks || []
                        }
                        onAudioTrackLoaded(e, t) {
                            let {
                                id: r,
                                groupId: i,
                                details: s
                            } = t, a = this.tracksInGroup[r];
                            if (!a || a.groupId !== i) {
                                this.warn(`Track with id:${r} and group:${i} not found in active group ${a.groupId}`);
                                return
                            }
                            let n = a.details;
                            a.details = t.details, this.log(`audio-track ${r} "${a.name}" lang:${a.lang} group:${i} loaded [${s.startSN}-${s.endSN}]`), r === this.trackId && this.playlistLoaded(r, t, n)
                        }
                        onLevelLoading(e, t) {
                            this.switchLevel(t.level)
                        }
                        onLevelSwitching(e, t) {
                            this.switchLevel(t.level)
                        }
                        switchLevel(e) {
                            let t = this.hls.levels[e];
                            if (!(null != t && t.audioGroupIds)) return;
                            let r = t.audioGroupIds[t.urlId];
                            if (this.groupId !== r) {
                                this.groupId = r || null;
                                let e = this.tracks.filter(e => !r || e.groupId === r);
                                this.selectDefaultTrack && !e.some(e => e.default) && (this.selectDefaultTrack = !1), this.tracksInGroup = e, this.log(`Updating audio tracks, ${e.length} track(s) found in group:${r}`), this.hls.trigger(E.AUDIO_TRACKS_UPDATED, {
                                    audioTracks: e
                                }), this.selectInitialTrack()
                            } else this.shouldReloadPlaylist(this.currentTrack) && this.setAudioTrack(this.trackId)
                        }
                        onError(e, t) {
                            !t.fatal && t.context && t.context.type === H.AUDIO_TRACK && t.context.id === this.trackId && t.context.groupId === this.groupId && (this.requestScheduled = -1, this.checkRetry(t))
                        }
                        get audioTracks() {
                            return this.tracksInGroup
                        }
                        get audioTrack() {
                            return this.trackId
                        }
                        set audioTrack(e) {
                            this.selectDefaultTrack = !1, this.setAudioTrack(e)
                        }
                        setAudioTrack(e) {
                            let t = this.tracksInGroup;
                            if (e < 0 || e >= t.length) {
                                this.warn("Invalid id passed to audio-track controller");
                                return
                            }
                            this.clearTimer();
                            let r = this.currentTrack;
                            t[this.trackId];
                            let i = t[e],
                                {
                                    groupId: s,
                                    name: a
                                } = i;
                            if (this.log(`Switching to audio-track ${e} "${a}" lang:${i.lang} group:${s}`), this.trackId = e, this.currentTrack = i, this.selectDefaultTrack = !1, this.hls.trigger(E.AUDIO_TRACK_SWITCHING, _objectSpread2({}, i)), i.details && !i.details.live) return;
                            let n = this.switchParams(i.url, null == r ? void 0 : r.details);
                            this.loadPlaylist(n)
                        }
                        selectInitialTrack() {
                            let e = this.tracksInGroup,
                                t = this.findTrackId(this.currentTrack) | this.findTrackId(null);
                            if (-1 !== t) this.setAudioTrack(t);
                            else {
                                let t = Error(`No track found for running audio group-ID: ${this.groupId} track count: ${e.length}`);
                                this.warn(t.message), this.hls.trigger(E.ERROR, {
                                    type: y.MEDIA_ERROR,
                                    details: v.AUDIO_TRACK_LOAD_ERROR,
                                    fatal: !0,
                                    error: t
                                })
                            }
                        }
                        findTrackId(e) {
                            let t = this.tracksInGroup;
                            for (let r = 0; r < t.length; r++) {
                                let i = t[r];
                                if ((!this.selectDefaultTrack || i.default) && (!e || void 0 !== e.attrs["STABLE-RENDITION-ID"] && e.attrs["STABLE-RENDITION-ID"] === i.attrs["STABLE-RENDITION-ID"] || e.name === i.name && e.lang === i.lang)) return i.id
                            }
                            return -1
                        }
                        loadPlaylist(e) {
                            super.loadPlaylist();
                            let t = this.tracksInGroup[this.trackId];
                            if (this.shouldLoadPlaylist(t)) {
                                let r = t.id,
                                    i = t.groupId,
                                    s = t.url;
                                if (e) try {
                                    s = e.addDirectives(s)
                                } catch (e) {
                                    this.warn(`Could not construct new URL with HLS Delivery Directives: ${e}`)
                                }
                                this.log(`loading audio-track playlist ${r} "${t.name}" lang:${t.lang} group:${i}`), this.clearTimer(), this.hls.trigger(E.AUDIO_TRACK_LOADING, {
                                    url: s,
                                    id: r,
                                    groupId: i,
                                    deliveryDirectives: e || null
                                })
                            }
                        }
                    },
                    emeController: EMEController,
                    cmcdController: CMCDController,
                    contentSteeringController: class {
                        constructor(e) {
                            this.hls = void 0, this.log = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this.pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = e, this.log = L.log.bind(L, "[content-steering]:"), this.registerListeners()
                        }
                        registerListeners() {
                            let e = this.hls;
                            e.on(E.MANIFEST_LOADING, this.onManifestLoading, this), e.on(E.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(E.MANIFEST_PARSED, this.onManifestParsed, this), e.on(E.ERROR, this.onError, this)
                        }
                        unregisterListeners() {
                            let e = this.hls;
                            e && (e.off(E.MANIFEST_LOADING, this.onManifestLoading, this), e.off(E.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(E.MANIFEST_PARSED, this.onManifestParsed, this), e.off(E.ERROR, this.onError, this))
                        }
                        startLoad() {
                            if (this.started = !0, self.clearTimeout(this.reloadTimer), this.enabled && this.uri) {
                                if (this.updated) {
                                    let e = Math.max(1e3 * this.timeToLoad - (performance.now() - this.updated), 0);
                                    this.scheduleRefresh(this.uri, e)
                                } else this.loadSteeringManifest(this.uri)
                            }
                        }
                        stopLoad() {
                            this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), self.clearTimeout(this.reloadTimer)
                        }
                        destroy() {
                            this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null
                        }
                        removeLevel(e) {
                            let t = this.levels;
                            t && (this.levels = t.filter(t => t !== e))
                        }
                        onManifestLoading() {
                            this.stopLoad(), this.enabled = !0, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null
                        }
                        onManifestLoaded(e, t) {
                            let {
                                contentSteering: r
                            } = t;
                            null !== r && (this.pathwayId = r.pathwayId, this.uri = r.uri, this.started && this.startLoad())
                        }
                        onManifestParsed(e, t) {
                            this.audioTracks = t.audioTracks, this.subtitleTracks = t.subtitleTracks
                        }
                        onError(e, t) {
                            let {
                                errorAction: r
                            } = t;
                            if ((null == r ? void 0 : r.action) === X.SendAlternateToPenaltyBox && r.flags === Q.MoveAllAlternatesMatchingHost) {
                                let e = this.pathwayPriority,
                                    t = this.pathwayId;
                                this.penalizedPathways[t] || (this.penalizedPathways[t] = performance.now()), !e && this.levels && (e = this.levels.reduce((e, t) => (-1 === e.indexOf(t.pathwayId) && e.push(t.pathwayId), e), [])), e && e.length > 1 && (this.updatePathwayPriority(e), r.resolved = this.pathwayId !== t)
                            }
                        }
                        filterParsedLevels(e) {
                            this.levels = e;
                            let t = this.getLevelsForPathway(this.pathwayId);
                            if (0 === t.length) {
                                let r = e[0].pathwayId;
                                this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${r}"`), t = this.getLevelsForPathway(r), this.pathwayId = r
                            }
                            return t.length !== e.length ? (this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`), t) : e
                        }
                        getLevelsForPathway(e) {
                            return null === this.levels ? [] : this.levels.filter(t => e === t.pathwayId)
                        }
                        updatePathwayPriority(e) {
                            let t;
                            this.pathwayPriority = e;
                            let r = this.penalizedPathways,
                                i = performance.now();
                            Object.keys(r).forEach(e => {
                                i - r[e] > 3e5 && delete r[e]
                            });
                            for (let i = 0; i < e.length; i++) {
                                let s = e[i];
                                if (r[s]) continue;
                                if (s === this.pathwayId) return;
                                let a = this.hls.nextLoadLevel,
                                    n = this.hls.levels[a];
                                if ((t = this.getLevelsForPathway(s)).length > 0) {
                                    this.log(`Setting Pathway to "${s}"`), this.pathwayId = s, this.hls.trigger(E.LEVELS_UPDATED, {
                                        levels: t
                                    });
                                    let e = this.hls.levels[a];
                                    n && e && this.levels && (e.attrs["STABLE-VARIANT-ID"] !== n.attrs["STABLE-VARIANT-ID"] && e.bitrate !== n.bitrate && this.log(`Unstable Pathways change from bitrate ${n.bitrate} to ${e.bitrate}`), this.hls.nextLoadLevel = a);
                                    break
                                }
                            }
                        }
                        clonePathways(e) {
                            let t = this.levels;
                            if (!t) return;
                            let r = {},
                                i = {};
                            e.forEach(e => {
                                let {
                                    ID: s,
                                    "BASE-ID": a,
                                    "URI-REPLACEMENT": n
                                } = e;
                                if (t.some(e => e.pathwayId === s)) return;
                                let l = this.getLevelsForPathway(a).map(e => {
                                    let t = _extends({}, e);
                                    t.details = void 0, t.url = performUriReplacement(e.uri, e.attrs["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", n);
                                    let a = new AttrList(e.attrs);
                                    a["PATHWAY-ID"] = s;
                                    let l = a.AUDIO && `${a.AUDIO}_clone_${s}`,
                                        o = a.SUBTITLES && `${a.SUBTITLES}_clone_${s}`;
                                    l && (r[a.AUDIO] = l, a.AUDIO = l), o && (i[a.SUBTITLES] = o, a.SUBTITLES = o), t.attrs = a;
                                    let h = new Level(t);
                                    return addGroupId(h, "audio", l), addGroupId(h, "text", o), h
                                });
                                t.push(...l), cloneRenditionGroups(this.audioTracks, r, n, s), cloneRenditionGroups(this.subtitleTracks, i, n, s)
                            })
                        }
                        loadSteeringManifest(e) {
                            let t;
                            let r = this.hls.config,
                                i = r.loader;
                            this.loader && this.loader.destroy(), this.loader = new i(r);
                            try {
                                t = new self.URL(e)
                            } catch (t) {
                                this.enabled = !1, this.log(`Failed to parse Steering Manifest URI: ${e}`);
                                return
                            }
                            if ("data:" !== t.protocol) {
                                let e = 0 | (this.hls.bandwidthEstimate || r.abrEwmaDefaultEstimate);
                                t.searchParams.set("_HLS_pathway", this.pathwayId), t.searchParams.set("_HLS_throughput", "" + e)
                            }
                            let s = {
                                    responseType: "json",
                                    url: t.href
                                },
                                a = r.steeringManifestLoadPolicy.default,
                                n = a.errorRetry || a.timeoutRetry || {},
                                l = {
                                    loadPolicy: a,
                                    timeout: a.maxLoadTimeMs,
                                    maxRetry: n.maxNumRetry || 0,
                                    retryDelay: n.retryDelayMs || 0,
                                    maxRetryDelay: n.maxRetryDelayMs || 0
                                };
                            this.log(`Requesting steering manifest: ${t}`), this.loader.load(s, l, {
                                onSuccess: (e, r, i, s) => {
                                    this.log(`Loaded steering manifest: "${t}"`);
                                    let a = e.data;
                                    if (1 !== a.VERSION) {
                                        this.log(`Steering VERSION ${a.VERSION} not supported!`);
                                        return
                                    }
                                    this.updated = performance.now(), this.timeToLoad = a.TTL;
                                    let {
                                        "RELOAD-URI": n,
                                        "PATHWAY-CLONES": l,
                                        "PATHWAY-PRIORITY": o
                                    } = a;
                                    if (n) try {
                                        this.uri = new self.URL(n, t).href
                                    } catch (e) {
                                        this.enabled = !1, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${n}`);
                                        return
                                    }
                                    this.scheduleRefresh(this.uri || i.url), l && this.clonePathways(l), o && this.updatePathwayPriority(o)
                                },
                                onError: (e, t, r, i) => {
                                    if (this.log(`Error loading steering manifest: ${e.code} ${e.text} (${t.url})`), this.stopLoad(), 410 === e.code) {
                                        this.enabled = !1, this.log(`Steering manifest ${t.url} no longer available`);
                                        return
                                    }
                                    let s = 1e3 * this.timeToLoad;
                                    if (429 === e.code) {
                                        let e = this.loader;
                                        if ("function" == typeof(null == e ? void 0 : e.getResponseHeader)) {
                                            let t = e.getResponseHeader("Retry-After");
                                            t && (s = 1e3 * parseFloat(t))
                                        }
                                        this.log(`Steering manifest ${t.url} rate limited`);
                                        return
                                    }
                                    this.scheduleRefresh(this.uri || t.url, s)
                                },
                                onTimeout: (e, t, r) => {
                                    this.log(`Timeout loading steering manifest (${t.url})`), this.scheduleRefresh(this.uri || t.url)
                                }
                            })
                        }
                        scheduleRefresh(e, t = 1e3 * this.timeToLoad) {
                            self.clearTimeout(this.reloadTimer), this.reloadTimer = self.setTimeout(() => {
                                this.loadSteeringManifest(e)
                            }, t)
                        }
                    }
                });
            let Hls = class Hls {
                static get version() {
                    return "1.4.12"
                }
                static isSupported() {
                    return function() {
                        let e = getMediaSource();
                        if (!e) return !1;
                        let t = getSourceBuffer(),
                            r = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                            i = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
                        return !!r && !!i
                    }()
                }
                static get Events() {
                    return E
                }
                static get ErrorTypes() {
                    return y
                }
                static get ErrorDetails() {
                    return v
                }
                static get DefaultConfig() {
                    return Hls.defaultConfig ? Hls.defaultConfig : eF
                }
                static set DefaultConfig(e) {
                    Hls.defaultConfig = e
                }
                constructor(e = {}) {
                    this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new ec, this._autoLevelCapping = void 0, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null,
                        function(e, t) {
                            if (self.console && !0 === e || "object" == typeof e) {
                                ! function(e, ...t) {
                                    t.forEach(function(t) {
                                        A[t] = e[t] ? e[t].bind(e) : function(e) {
                                            let t = self.console[e];
                                            return t ? t.bind(self.console, `[${e}] >`) : noop
                                        }(t)
                                    })
                                }(e, "debug", "log", "info", "warn", "error");
                                try {
                                    A.log(`Debug logs enabled for "${t}" in hls.js version 1.4.12`)
                                } catch (e) {
                                    A = S
                                }
                            } else A = S
                        }(e.debug || !1, "Hls instance");
                    let t = this.config = function(e, t) {
                        if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration)) throw Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                        if (void 0 !== t.liveMaxLatencyDurationCount && (void 0 === t.liveSyncDurationCount || t.liveMaxLatencyDurationCount <= t.liveSyncDurationCount)) throw Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
                        if (void 0 !== t.liveMaxLatencyDuration && (void 0 === t.liveSyncDuration || t.liveMaxLatencyDuration <= t.liveSyncDuration)) throw Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
                        let r = function deepCpy(e) {
                                return e && "object" == typeof e ? Array.isArray(e) ? e.map(deepCpy) : Object.keys(e).reduce((t, r) => (t[r] = deepCpy(e[r]), t), {}) : e
                            }(e),
                            i = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
                        return ["manifest", "level", "frag"].forEach(e => {
                            let s = `${"level"===e?"playlist":e}LoadPolicy`,
                                a = void 0 === t[s],
                                n = [];
                            i.forEach(i => {
                                let l = `${e}Loading${i}`,
                                    o = t[l];
                                if (void 0 !== o && a) {
                                    n.push(l);
                                    let e = r[s].default;
                                    switch (t[s] = {
                                        default: e
                                    }, i) {
                                        case "TimeOut":
                                            e.maxLoadTimeMs = o, e.maxTimeToFirstByteMs = o;
                                            break;
                                        case "MaxRetry":
                                            e.errorRetry.maxNumRetry = o, e.timeoutRetry.maxNumRetry = o;
                                            break;
                                        case "RetryDelay":
                                            e.errorRetry.retryDelayMs = o, e.timeoutRetry.retryDelayMs = o;
                                            break;
                                        case "MaxRetryTimeout":
                                            e.errorRetry.maxRetryDelayMs = o, e.timeoutRetry.maxRetryDelayMs = o
                                    }
                                }
                            }), n.length && L.warn(`hls.js config: "${n.join('", "')}" setting(s) are deprecated, use "${s}": ${JSON.stringify(t[s])}`)
                        }), _objectSpread2(_objectSpread2({}, r), t)
                    }(Hls.DefaultConfig, e);
                    this.userConfig = e, this._autoLevelCapping = -1, t.progressive && function(e) {
                        let t = e.loader;
                        if (t !== FetchLoader && t !== XhrLoader) L.log("[config]: Custom loader detected, cannot enable progressive streaming"), e.progressive = !1;
                        else {
                            let t = function() {
                                if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
                                    return new self.ReadableStream({}), !0
                                } catch (e) {}
                                return !1
                            }();
                            t && (e.loader = FetchLoader, e.progressive = !0, e.enableSoftwareAES = !0, L.log("[config]: Progressive streaming enabled, using FetchLoader"))
                        }
                    }(t);
                    let {
                        abrController: r,
                        bufferController: i,
                        capLevelController: s,
                        errorController: a,
                        fpsController: n
                    } = t, l = new a(this), o = this.abrController = new r(this), h = this.bufferController = new i(this), d = this.capLevelController = new s(this), u = new n(this), c = new PlaylistLoader(this), f = new ID3TrackController(this), g = t.contentSteeringController, m = g ? new g(this) : null, p = this.levelController = new LevelController(this, m), T = new FragmentTracker(this), y = new KeyLoader(this.config), v = this.streamController = new StreamController(this, T, y);
                    d.setStreamController(v), u.setStreamController(v);
                    let R = [c, p, v];
                    m && R.splice(1, 0, m), this.networkControllers = R;
                    let I = [o, h, d, u, f, T];
                    this.audioTrackController = this.createController(t.audioTrackController, R);
                    let D = t.audioStreamController;
                    D && R.push(new D(this, T, y)), this.subtitleTrackController = this.createController(t.subtitleTrackController, R);
                    let b = t.subtitleStreamController;
                    b && R.push(new b(this, T, y)), this.createController(t.timelineController, I), y.emeController = this.emeController = this.createController(t.emeController, I), this.cmcdController = this.createController(t.cmcdController, I), this.latencyController = this.createController(LatencyController, I), this.coreComponents = I, R.push(l);
                    let C = l.onErrorOut;
                    "function" == typeof C && this.on(E.ERROR, C, l)
                }
                createController(e, t) {
                    if (e) {
                        let r = new e(this);
                        return t && t.push(r), r
                    }
                    return null
                }
                on(e, t, r = this) {
                    this._emitter.on(e, t, r)
                }
                once(e, t, r = this) {
                    this._emitter.once(e, t, r)
                }
                removeAllListeners(e) {
                    this._emitter.removeAllListeners(e)
                }
                off(e, t, r = this, i) {
                    this._emitter.off(e, t, r, i)
                }
                listeners(e) {
                    return this._emitter.listeners(e)
                }
                emit(e, t, r) {
                    return this._emitter.emit(e, t, r)
                }
                trigger(e, t) {
                    if (this.config.debug) return this.emit(e, e, t);
                    try {
                        return this.emit(e, e, t)
                    } catch (t) {
                        L.error("An internal error happened while handling event " + e + '. Error message: "' + t.message + '". Here is a stacktrace:', t), this.trigger(E.ERROR, {
                            type: y.OTHER_ERROR,
                            details: v.INTERNAL_EXCEPTION,
                            fatal: !1,
                            event: e,
                            error: t
                        })
                    }
                    return !1
                }
                listenerCount(e) {
                    return this._emitter.listenerCount(e)
                }
                destroy() {
                    L.log("destroy"), this.trigger(E.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach(e => e.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach(e => e.destroy()), this.coreComponents.length = 0;
                    let e = this.config;
                    e.xhrSetup = e.fetchSetup = void 0, this.userConfig = null
                }
                attachMedia(e) {
                    L.log("attachMedia"), this._media = e, this.trigger(E.MEDIA_ATTACHING, {
                        media: e
                    })
                }
                detachMedia() {
                    L.log("detachMedia"), this.trigger(E.MEDIA_DETACHING, void 0), this._media = null
                }
                loadSource(e) {
                    this.stopLoad();
                    let t = this.media,
                        r = this.url,
                        i = this.url = p.buildAbsoluteURL(self.location.href, e, {
                            alwaysNormalize: !0
                        });
                    L.log(`loadSource:${i}`), t && r && (r !== i || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)), this.trigger(E.MANIFEST_LOADING, {
                        url: e
                    })
                }
                startLoad(e = -1) {
                    L.log(`startLoad(${e})`), this.networkControllers.forEach(t => {
                        t.startLoad(e)
                    })
                }
                stopLoad() {
                    L.log("stopLoad"), this.networkControllers.forEach(e => {
                        e.stopLoad()
                    })
                }
                swapAudioCodec() {
                    L.log("swapAudioCodec"), this.streamController.swapAudioCodec()
                }
                recoverMediaError() {
                    L.log("recoverMediaError");
                    let e = this._media;
                    this.detachMedia(), e && this.attachMedia(e)
                }
                removeLevel(e, t = 0) {
                    this.levelController.removeLevel(e, t)
                }
                get levels() {
                    let e = this.levelController.levels;
                    return e || []
                }
                get currentLevel() {
                    return this.streamController.currentLevel
                }
                set currentLevel(e) {
                    L.log(`set currentLevel:${e}`), this.loadLevel = e, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch()
                }
                get nextLevel() {
                    return this.streamController.nextLevel
                }
                set nextLevel(e) {
                    L.log(`set nextLevel:${e}`), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch()
                }
                get loadLevel() {
                    return this.levelController.level
                }
                set loadLevel(e) {
                    L.log(`set loadLevel:${e}`), this.levelController.manualLevel = e
                }
                get nextLoadLevel() {
                    return this.levelController.nextLoadLevel
                }
                set nextLoadLevel(e) {
                    this.levelController.nextLoadLevel = e
                }
                get firstLevel() {
                    return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                }
                set firstLevel(e) {
                    L.log(`set firstLevel:${e}`), this.levelController.firstLevel = e
                }
                get startLevel() {
                    return this.levelController.startLevel
                }
                set startLevel(e) {
                    L.log(`set startLevel:${e}`), -1 !== e && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e
                }
                get capLevelToPlayerSize() {
                    return this.config.capLevelToPlayerSize
                }
                set capLevelToPlayerSize(e) {
                    let t = !!e;
                    t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t)
                }
                get autoLevelCapping() {
                    return this._autoLevelCapping
                }
                get bandwidthEstimate() {
                    let {
                        bwEstimator: e
                    } = this.abrController;
                    return e ? e.getEstimate() : NaN
                }
                get ttfbEstimate() {
                    let {
                        bwEstimator: e
                    } = this.abrController;
                    return e ? e.getEstimateTTFB() : NaN
                }
                set autoLevelCapping(e) {
                    this._autoLevelCapping !== e && (L.log(`set autoLevelCapping:${e}`), this._autoLevelCapping = e)
                }
                get maxHdcpLevel() {
                    return this._maxHdcpLevel
                }
                set maxHdcpLevel(e) {
                    j.indexOf(e) > -1 && (this._maxHdcpLevel = e)
                }
                get autoLevelEnabled() {
                    return -1 === this.levelController.manualLevel
                }
                get manualLevel() {
                    return this.levelController.manualLevel
                }
                get minAutoLevel() {
                    let {
                        levels: e,
                        config: {
                            minAutoBitrate: t
                        }
                    } = this;
                    if (!e) return 0;
                    let r = e.length;
                    for (let i = 0; i < r; i++)
                        if (e[i].maxBitrate >= t) return i;
                    return 0
                }
                get maxAutoLevel() {
                    let e;
                    let {
                        levels: t,
                        autoLevelCapping: r,
                        maxHdcpLevel: i
                    } = this;
                    if (e = -1 === r && t && t.length ? t.length - 1 : r, i)
                        for (let r = e; r--;) {
                            let e = t[r].attrs["HDCP-LEVEL"];
                            if (e && e <= i) return r
                        }
                    return e
                }
                get nextAutoLevel() {
                    return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
                }
                set nextAutoLevel(e) {
                    this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e)
                }
                get playingDate() {
                    return this.streamController.currentProgramDateTime
                }
                get mainForwardBufferInfo() {
                    return this.streamController.getMainFwdBufferInfo()
                }
                get audioTracks() {
                    let e = this.audioTrackController;
                    return e ? e.audioTracks : []
                }
                get audioTrack() {
                    let e = this.audioTrackController;
                    return e ? e.audioTrack : -1
                }
                set audioTrack(e) {
                    let t = this.audioTrackController;
                    t && (t.audioTrack = e)
                }
                get subtitleTracks() {
                    let e = this.subtitleTrackController;
                    return e ? e.subtitleTracks : []
                }
                get subtitleTrack() {
                    let e = this.subtitleTrackController;
                    return e ? e.subtitleTrack : -1
                }
                get media() {
                    return this._media
                }
                set subtitleTrack(e) {
                    let t = this.subtitleTrackController;
                    t && (t.subtitleTrack = e)
                }
                get subtitleDisplay() {
                    let e = this.subtitleTrackController;
                    return !!e && e.subtitleDisplay
                }
                set subtitleDisplay(e) {
                    let t = this.subtitleTrackController;
                    t && (t.subtitleDisplay = e)
                }
                get lowLatencyMode() {
                    return this.config.lowLatencyMode
                }
                set lowLatencyMode(e) {
                    this.config.lowLatencyMode = e
                }
                get liveSyncPosition() {
                    return this.latencyController.liveSyncPosition
                }
                get latency() {
                    return this.latencyController.latency
                }
                get maxLatency() {
                    return this.latencyController.maxLatency
                }
                get targetLatency() {
                    return this.latencyController.targetLatency
                }
                get drift() {
                    return this.latencyController.drift
                }
                get forceStartLoad() {
                    return this.streamController.forceStartLoad
                }
            };
            Hls.defaultConfig = void 0
        }
    }
]);