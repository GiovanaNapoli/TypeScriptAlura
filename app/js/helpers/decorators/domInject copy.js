System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function domInjec(seletor) {
        return function (target, key) {
            let elemento;
            const getter = function () {
                if (!elemento) {
                    console.log(`Buscando ${seletor} para injetar em ${key}`);
                    elemento = $(seletor);
                }
                return elemento;
            };
            Object.defineProperty(target, key, {
                get: getter
            });
        };
    }
    exports_1("domInjec", domInjec);
    return {
        setters: [],
        execute: function () {
        }
    };
});
