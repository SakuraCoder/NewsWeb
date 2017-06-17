CREATE TABLE `userinterest` (
`username` int NOT NULL COMMENT '用户名',
`isset`    int NOT NULL COMMENT '是否设置',
`finance` int NOT NULL COMMENT '财经',
`sports` int NOT NULL COMMENT '体育',
`ent` int NOT NULL COMMENT '娱乐',
`mil` int NOT NULL COMMENT '军事',
`edu` int NOT NULL COMMENT '教育',
`tech` int NOT NULL COMMENT '科技',
`nba` int NOT NULL COMMENT 'NBA',
`stock` int NOT NULL COMMENT '股票',
`health` int NOT NULL COMMENT '健康',
`ast` int NOT NULL COMMENT '星座',
`lady` int NOT NULL COMMENT '女性',
PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户兴趣新闻表';