var getIds = function () {
    var ids = [];
    $(".datatable :checked").each(function () {
        var id = $(this).val();
        if (id === "all")    return true;
        ids.push(id);
    });
    return ids;
};
var getIdsByClass = function (tableClassId) {
    var ids = [];
    $("." + tableClassId + " :checked").each(function () {
        var id = $(this).val();
        if (id === "all")    return true;
        ids.push(id);
    });
    return ids;
};

function getUrlParam(url,name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = url.slice(url.indexOf("?")).substr(1).match(reg);
    if (r != null)
        return unescape(decodeURIComponent(r[2]));
    return null;
}

function showSidebarMenu(search) {
    // JS本地数据
    var menus = window.__menus_config;
    $('.sidebar-menu').sidebarMenu({data: menus});
    if (search) {
        // $('.sidebar-menu>li').find('a').closest('li').addClass('active'); // 所有节点高亮显示
        $('.sidebar-menu>li').find('a[menu-nav-type="1"]').trigger('click'); // 所有节展开
    }
    __menu_search_doing = 0;

    // 服务端接口返回
    /*
    $.ajax({
        type: "post",
        url: "menu_api.json",
        data: {
            "search": search,
        },
        success: function (result) {
            if (result.return_code != 0) {
                $(".login-box-msg").text(result.return_msg || '获取菜单失败   ');
                new Noty({
                    type: 'error',
                    layout: 'topCenter',
                    text: result.return_msg || '获取菜单失败',
                    timeout: '2000'
                }).show();
            } else {
                $('.sidebar-menu').sidebarMenu({data: result.data});
                if (search) {
                    // $('.sidebar-menu>li').find('a').closest('li').addClass('active'); // 所有节点高亮显示
                    $('.sidebar-menu>li').find('a[menu-nav-type="1"]').trigger('click'); // 所有节展开
                }
                __menu_search_doing = 0;
            }
        }
    });
    */
}


