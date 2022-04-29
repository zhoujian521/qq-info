import React, { useCallback, useState } from 'react';
import classNames from 'classnames';

import { throttle } from '../../utils/util';
import logo from '../../assets/images/logo.svg';
import './style.scss';

interface QQInfo {
	profile: string;
	nickname: string;
	num: string;
}

const QQHeader = (props: any): JSX.Element => {
	const {} = props;
	const [list, setList] = useState([]);

	return (
		<div className={classNames('header', 'clearfix')}>
			<div className={classNames('header-left', 'float-left')}>
				<img src={logo} className="avatar" alt="profile" />
			</div>
			<div className={classNames('header-right', 'float-left')}>
				<div className="nick-name">叛逆*宝贝</div>
				<div className="qq-num">3847555</div>
			</div>
		</div>
	);
};

export default QQHeader;
