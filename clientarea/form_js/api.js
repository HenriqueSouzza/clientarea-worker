const ApiService = (function ($) {
  function doGet(url) {
    return $.ajax({
      type: 'GET',
      url: $('#base_url').val() + url,
      crossDomain: true,
      dataType: 'json',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
  }

  function doPut(url, data) {
    return $.ajax({
      type: 'PUT',
      url: $('#base_url').val() + url,
      crossDomain: true,
      dataType: 'json',
      data,
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
  }

  function doPost(url, data) {
    return $.ajax({
      type: 'POST',
      url: $('#base_url').val() + url,
      crossDomain: true,
      data: JSON.stringify(data),
      contentType: 'application/json',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
  }

  function doDelete(url) {
    return $.ajax({
      type: 'DELETE',
      url: $('#base_url').val() + url,
      crossDomain: true,
      dataType: 'json',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
  }

  function getHostings() {
    return doGet('/api/v2/ca/refunds/hostings');
  }

  function getAddons() {
    return doGet('/api/v2/ca/refunds/addons');
  }

  function getDomains() {
    return doGet('/api/v2/ca/refunds/domains');
  }

  function totalRefunds(hostingids, addonids, hostingaddonsids) {
    let params = [];
    if (hostingids) {
      params = params.concat(hostingids.map(id => `id=${id}`));
    }
    if (addonids) {
      params = params.concat(addonids.map(id => `addonid=${id}`));
    }

    if (hostingaddonsids) {
      params = params.concat(hostingaddonsids.map(id => `id=${id}`));
    }

    return doGet(`/api/v2/ca/refunds/total?${params.join('&')}`);
  }

  function checkServices(id, origin) {
    return doGet(`/api/v2/ca/terminates/products/check_services?id=${id}&origin=${origin}`);
  }

  function checkRelation(id) {
    return doGet(`/api/v2/ca/terminates/addon/check_relation?id=${id}&type_addon=domain`);
  }

  function cancelProducts(productsobj, cancelType, addons_ids, reason, subreason) {
    const cancel = {
      products: productsobj,
      cancel_type: cancelType,
      addonid: addons_ids,
      reason,
      sub_reason: subreason,
    };
    return doPost('/api/v2/ca/terminates/products', cancel);
  }

  function accessLog(clientId) {
    return doPost('/api/v2/ca/terminates/trace/log', { userid: clientId });
  }

  function cancelSuccess(clientId) {
    return doPut('/api/v2/ca/terminates/trace/log/quit/confirmation', { userid: clientId });
  }

  function getReasons() {
    return doGet('/api/v2/ca/terminates/reason');
  }

  return {
    getHostings,
    getAddons,
    getDomains,
    totalRefunds,
    checkServices,
    cancelProducts,
    accessLog,
    cancelSuccess,
    getReasons,
  };
}($));
