import Marionette from 'backbone.marionette';
import Mustache from "mustache";

Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
    Mustache.parse(rawTemplate);
    return _.partial(Mustache.render, rawTemplate);
};
Backbone.Marionette.Renderer.render = function(template, data){
  return Mustache.to_html(template, data);
};