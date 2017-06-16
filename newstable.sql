CREATE TABLE `newsTable` (
`channel` varchar(64) NOT NULL COMMENT '频道',
`title` varchar(64) NOT NULL COMMENT '标题',
`time` varchar(64) NOT NULL COMMENT '时间',
`src` varchar(64) NOT NULL COMMENT '来源',
`category` varchar(64) NOT NULL COMMENT '类别',
`pic` varchar(64) NOT NULL COMMENT '图片',
`content` text NOT NULL COMMENT '内容',
`url` varchar(64) NOT NULL COMMENT '手机链接',
`weburl` varchar(64) NOT NULL COMMENT 'PC链接',
`newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
PRIMARY KEY (`newsid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='新闻信息表';
