const c = function () { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload")) return; for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e); new MutationObserver(e => { for (const o of e) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && s(i) }).observe(document, { childList: !0, subtree: !0 }); function r(e) { const o = {}; return e.integrity && (o.integrity = e.integrity), e.referrerpolicy && (o.referrerPolicy = e.referrerpolicy), e.crossorigin === "use-credentials" ? o.credentials = "include" : e.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o } function s(e) { if (e.ep) return; e.ep = !0; const o = r(e); fetch(e.href, o) } }; c(); $("#hamburger").click(() => { console.log("You cliked on icon"), $("#hamburger_expended").toggleClass("hidden") }); var l = 1; a(l); function a(n) { var t, r = document.getElementsByClassName("mySlides"), s = document.getElementsByClassName("dot"); for (n > r.length && (l = 1), n < 1 && (l = r.length), t = 0; t < r.length; t++)r[t].style.display = "none"; for (t = 0; t < s.length; t++)s[t].className = s[t].className.replace(" active", ""); r[l - 1].style.display = "block", s[l - 1].className += " active" }
