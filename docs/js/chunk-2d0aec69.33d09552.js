(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aec69"],{"0c00":function(e,s,t){"use strict";t.r(s);var r=t("3af1"),o=(t("e06a"),t("3e27")),i=t("1451"),c=t("9dee"),a=t("7220");class n{async decode(e){const s=await Object(i["a"])(e.data,e.options);return s&&s.toJSON()}symbolize(e){e.pixelBlock=o["a"].fromJSON(e.pixelBlock),e.extent=e.extent?r["a"].fromJSON(e.extent):null;const s=this.symbolizer.symbolize(e);return Promise.resolve(s&&s.toJSON())}async updateSymbolizer(e){var s;this.symbolizer=a["a"].fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(s=this.symbolizer)?void 0:s.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const s=this.symbolizer.simpleStretch(o["a"].fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(s&&s.toJSON())}estimateStatisticsHistograms(e){const s=Object(c["g"])(o["a"].fromJSON(e.srcPixelBlock));return Promise.resolve(s)}split(e){const s=Object(c["n"])(o["a"].fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return s&&s.forEach((e,t)=>{s.set(t,null==e?void 0:e.toJSON())}),Promise.resolve(s)}async mosaicAndTransform(e){const s=e.srcPixelBlocks.map(e=>e?new o["a"](e):null),t=Object(c["j"])(s,e.srcMosaicSize);if(!e.coefs)return t&&t.toJSON();const r=Object(c["a"])(t,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation);return r&&r.toJSON()}}s["default"]=n}}]);
//# sourceMappingURL=chunk-2d0aec69.33d09552.js.map