(ns com.wsscode.pathom.gen-test
  (:require [clojure.test :refer :all]
            [clojure.spec.alpha :as s]
            [com.wsscode.pathom.gen :as sgen]
            [om.next :as om]))

(s/def ::coll (s/coll-of int?))
(s/def ::not-coll int?)
(s/def ::fixed-number #{42})
(s/def ::fixed-str #{"bla"})

(om/defui ^:once Component
  static om/IQuery
  (query [_] [::fixed-number ::fixed-str])

  static om/Ident
  (ident [_ props] [:fixed "here"])

  Object
  (render [this]))

(deftest test-coll-spec?
  (is (true? (sgen/coll-spec? ::coll)))
  (is (false? (sgen/coll-spec? ::not-coll)))
  (is (false? (sgen/coll-spec? ::invalid))))

(deftest test-query->props
  (is (= (sgen/query->props [::fixed-number ::fixed-str ::undefined])
         {::fixed-number 42 ::fixed-str "bla"})))

(deftest test-comp->props
  (is (= (sgen/comp->props Component)
         {::fixed-number 42 ::fixed-str "bla"}))

  (is (= (sgen/comp->props Component {::fixed-number 32 :other "bla"})
         {::fixed-number 32 ::fixed-str "bla" :other "bla"})))

(deftest test-comp->db
  (is (= (sgen/comp->db Component)
         {::fixed-number 42 ::fixed-str "bla" :om.next/tables #{}})))