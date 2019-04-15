const mssql = require('mssql');
const fs = require('fs')
var __data = {
    user: "sa",
    pass: "(Erciyuan)*2@028",
    data: "manhua",
    server: "172.16.2.139"
}
__config = { // 把全部配置项放一个集合中，减少变量命名冲突的概率	
    domain: "manhuatai.com", //网站域名
    thumbdomain: "mhpic.jjmh.com", //封面图域名
    sitename: "漫画台" //网站名称	
};
var connectionPool;
var Content = new Array; //保存内容
var id_list = new Array; //漫畫ID
var cartoon_list = new Array; //查詢書單狀態
var content_list = new Array; //章節內容
var getConnection = async () => { //连接数据库
    if (!(connectionPool && connectionPool.connected)) {
        connectionPool = await new mssql.connect("mssql://" + __data.user + ":" + __data.pass + "@" + __data.server + "/" + __data.data + "");
        console.log('数据库连接成功')
    }
    return connectionPool
}

var sqlQuery = async (sql) => {
    await getConnection();
    var request = await new mssql.Request();
    let result = await request.query(sql);
    return new Promise((resolve, reject) => {
        if (result) {
            resolve(result)
        }
        // console.log(result)
    })
}
var dataConn = async () => {
    await sqlQuery("select cartoon_id as comic_id,cartoon_name as comic_name from cartoon(nolock) where cartoon_id in (25934,25933,7119) and show_type>0 and (copyright_desc is null or copyright_desc='')").then(async result => {
        if (result) {
            __data = result.recordset;
            __data.forEach(i => {
                c_id = i.comic_id;
                c_name = String(i.comic_name);
                id_list.push(c_id);
                // console.log(id_list)
            });
            //查询主体
            await sqlQuery("select cartoon_status_id,cartoon_newid from cartoon(nolock) where cartoon_id in(" + id_list + ")").then(async result => {
                if (result) {
                    cartoon_list = result.recordset
                }
            })
            if (cartoon_list.length == 0) return true;
            cartoon_list = cartoon_list[0]
            // console.log(cartoon_list)
            //章节cartoon_list
            await sqlQuery("select cartoon_topic_name,cartoon_topic_newid,cartoon_topic_addr_rule,topic_start_var,chapter_domain from cartoon_topic(nolock) where cartoon_id in (" + id_list + ") and topic_type=1 and  topic_copyright ='' order by topic_order_num desc").then(result => {
                content_list = result.recordset
                // console.log(content_list)
            })
            Content.push("<item>\r\n");
            Content.push("<key><![CDATA[" + c_name + "]]></key>\r\n");
            Content.push("<display>\r\n");
            //判斷連載狀態
            if (cartoon_list.cartoon_status_id == 1) {
                //連載中
                var tmp_last_chapter = "";
                if (content_list.length) tmp_last_chapter = content_list[0].cartoon_topic_name.replace("第", "");
                Content.push("<title><![CDATA[《" + c_name + "》漫画_更新至" + tmp_last_chapter + "（连载中）_" + __config.sitename + "]]></title>\r\n");
                Content.push("<m_title><![CDATA[" + c_name + "（更新至" + tmp_last_chapter + "）_" + __config.sitename + "]]></m_title>\r\n");
                Content.push("<url><![CDATA[http://www." + __config.domain + "/" + cartoon_list.cartoon_newid + "/]]></url>\r\n");
                Content.push("<m_url><![CDATA[http://m." + __config.domain + "/" + cartoon_list.cartoon_newid + "/]]></m_url>\r\n");
                Content.push("<status><![CDATA[1]]></status>\r\n");
                var tmp_content_num = content_list.length;
                // 显示图片的项目
                for (var i = 0; i < tmp_content_num; i++) {
                    Content.push("<content>\r\n");
                    // 封面图处理
                    if (content_list[i].chapter_domain) {
                        Content.push("<img><![CDATA[http://mhpic." + content_list[i].chapter_domain + "/comic/" + encodeURIComponent(content_list[i].cartoon_topic_addr_rule.replace("{i}.jpg", "")) + content_list[i].topic_start_var + ".jpg-noresize]]></img>\r\n");
                    } else {
                        Content.push("<img><![CDATA[http://" + __config.thumbdomain + "/comic/" + encodeURIComponent(content_list[i].cartoon_topic_addr_rule.replace("{i}.jpg", "")) + content_list[i].topic_start_var + ".jpg-noresize]]></img>\r\n");
                    }
                    Content.push("<name><![CDATA[" + content_list[i].cartoon_topic_name + "]]></name>\r\n");
                    Content.push("<url><![CDATA[http://www." + __config.domain + "/" + cartoon_list.cartoon_newid + "/" + content_list[i].cartoon_topic_newid + ".html]]></url>\r\n");
                    Content.push("<m_url><![CDATA[http://m." + __config.domain + "/" + cartoon_list.cartoon_newid + "/" + content_list[i].cartoon_topic_newid + ".html]]></m_url>\r\n");
                    Content.push("</content>\r\n");
                }
            } else {
                //已完結
                var tmp_last_chapter = "",
                    tmp_first_chapter = "";
                if (content_list.length) {
                    tmp_last_chapter = content_list[0].cartoon_topic_name.replace("第", "");
                    tmp_first_chapter = content_list[content_list.length - 1].cartoon_topic_name.replace("第", "");
                    var tmp_result = tmp_first_chapter.match(/^(\d+)/);
                    if (tmp_result !== null) tmp_first_chapter = tmp_result[1];
                }
                write_content.push("<title><![CDATA[《" + c_name + "》漫画_" + tmp_first_chapter + "-" + tmp_last_chapter + "全（已完结）_" + __config.sitename + "]]></title>\r\n");
                write_content.push("<m_title><![CDATA[" + c_name + "_" + tmp_first_chapter + "-" + tmp_last_chapter + "全（已完结）_" + __config.sitename + "]]></m_title>\r\n");
                write_content.push("<url><![CDATA[http://www." + __config.domain + "/" + cartoon_list.cartoon_newid + "/]]></url>\r\n");
                write_content.push("<m_url><![CDATA[http://m." + __config.domain + "/" + cartoon_list.cartoon_newid + "/]]></m_url>\r\n");
                write_content.push("<status><![CDATA[0]]></status>\r\n");
                var tmp_content_num = content_list.length;
                // 正序排列
                content_list = content_list.reverse();

                // 显示图片的项目
                for (var i = 0; i < tmp_content_num; i++) {
                    Content.push("<content>\r\n");
                    // 封面图处理
                    if (content_list[i].chapter_domain) {
                        Content.push("<img><![CDATA[http://mhpic." + content_list[i].chapter_domain + "/comic/" + encodeURIComponent(content_list[i].cartoon_topic_addr_rule.replace("{i}.jpg", "")) + content_list[i].topic_start_var + ".jpg-noresize]]></img>\r\n");
                    } else {
                        Content.push("<img><![CDATA[http://" + __config.thumbdomain + "/comic/" + encodeURIComponent(content_list[i].cartoon_topic_addr_rule.replace("{i}.jpg", "")) + content_list[i].topic_start_var + ".jpg-noresize]]></img>\r\n");
                    }
                    Content.push("<name><![CDATA[" + content_list[i].cartoon_topic_name + "]]></name>\r\n");
                    Content.push("<url><![CDATA[http://www." + __config.domain + "/" + comic_info.cartoon_newid + "/" + content_list[i].cartoon_topic_newid + ".html]]></url>\r\n");
                    Content.push("<m_url><![CDATA[http://m." + __config.domain + "/" + comic_info.cartoon_newid + "/" + content_list[i].cartoon_topic_newid + ".html]]></m_url>\r\n");
                    Content.push("</content>\r\n");
                }
            }
            Content.push("<showurl><![CDATA[www." + __config.domain + "]]></showurl>\r\n");
            Content.push("<source><![CDATA[" + __config.sitename + "]]></source>\r\n");
            Content.push("</display>\r\n");
            Content.push("</item>\r\n");
            // console.log(Content)
            fs.mkdir('xml', () => {
                console.log('成功創建xml文件夾')
                return false
            })
            fs.writeFile('./xml/360.xml', Content, 'utf-8', (err) => {
                // console.log(err)
            })
        }
    })
}
dataConn();