goog.provide('com.wsscode.pathom.book.connect.batch3');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.core.async');
com.wsscode.pathom.book.connect.batch3.list_things = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch3","list-things","com.wsscode.pathom.book.connect.batch3/list-things",-1418728916,null),(function (){var G__60930 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null);
return G__60930;

})(),(function com$wsscode$pathom$book$connect$batch3$list_things(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(18)], null)], null)], null);
}));
com.wsscode.pathom.book.connect.batch3.slow_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch3","slow-resolver","com.wsscode.pathom.book.connect.batch3/slow-resolver",-135470339,null),(function (){var G__60984 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-added","number-added",1161719489)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322),com.wsscode.pathom.connect.transform_batch_resolver], null);
return G__60984;

})(),(function com$wsscode$pathom$book$connect$batch3$slow_resolver(_,input){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_61023){
var state_val_61024 = (state_61023[(1)]);
if((state_val_61024 === (1))){
var inst_60990 = cljs.core.async.timeout((1000));
var state_61023__$1 = state_61023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61023__$1,(2),inst_60990);
} else {
if((state_val_61024 === (2))){
var inst_60992 = (state_61023[(2)]);
var inst_61016 = (function (){return ((function (inst_60992,state_val_61024,c__47946__auto__){
return (function (v){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number-added","number-added",1161719489),(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(v) + (1))], null);
});
;})(inst_60992,state_val_61024,c__47946__auto__))
})();
var inst_61020 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_61016,input);
var state_61023__$1 = (function (){var statearr_61092 = state_61023;
(statearr_61092[(7)] = inst_60992);

return statearr_61092;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61023__$1,inst_61020);
} else {
return null;
}
}
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$book$connect$batch3$slow_resolver_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$connect$batch3$slow_resolver_$_state_machine__47664__auto____0 = (function (){
var statearr_61097 = [null,null,null,null,null,null,null,null];
(statearr_61097[(0)] = com$wsscode$pathom$book$connect$batch3$slow_resolver_$_state_machine__47664__auto__);

(statearr_61097[(1)] = (1));

return statearr_61097;
});
var com$wsscode$pathom$book$connect$batch3$slow_resolver_$_state_machine__47664__auto____1 = (function (state_61023){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61023);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61099){if((e61099 instanceof Object)){
var ex__47667__auto__ = e61099;
var statearr_61102_61165 = state_61023;
(statearr_61102_61165[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61099;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61172 = state_61023;
state_61023 = G__61172;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$batch3$slow_resolver_$_state_machine__47664__auto__ = function(state_61023){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$batch3$slow_resolver_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$batch3$slow_resolver_$_state_machine__47664__auto____1.call(this,state_61023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$batch3$slow_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$batch3$slow_resolver_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$connect$batch3$slow_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$batch3$slow_resolver_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$connect$batch3$slow_resolver_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_61109 = f__47947__auto__();
(statearr_61109[(6)] = c__47946__auto__);

return statearr_61109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.connect.batch3.app_registry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.batch3.list_things,com.wsscode.pathom.book.connect.batch3.slow_resolver], null);
com.wsscode.pathom.book.connect.batch3.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2,com.wsscode.pathom.connect.open_ident_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411),(function (env,error){
console.error("ERROR",error);

return com.wsscode.pathom.core.error_str(error);
})], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.batch3.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.batch3.js.map
