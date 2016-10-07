System.register(["angular2/platform/browser", "./module_app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, module_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (module_app_component_1_1) {
                module_app_component_1 = module_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(module_app_component_1.MyModulesClass);
        }
    }
});
//# sourceMappingURL=module_main.js.map