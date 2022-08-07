import Vue from 'vue'
import { formatCurrency } from '~/helpers/formatCurrency.helper'

Vue.filter('currency', function (value) {
  return formatCurrency(value)
})
