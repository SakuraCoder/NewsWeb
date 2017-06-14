CREATE TABLE `user` (
`username` varchar(64) NOT NULL COMMENT '用户名',
`password` varchar(64) NOT NULL COMMENT '用户密码',
`phone` varchar(64) NOT NULL COMMENT '联系电话',
`email` varchar(64) COMMENT '邮箱',
UNIQUE (`email`),
PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户信息表';