import React, { useCallback } from 'react';
import classNames from 'classnames';

import { throttle } from '../../utils/util';

import './style.scss';

interface Props {}

const QQSearch = (props: Props): JSX.Element => {
	const {} = props;

	const onInputChange = useCallback(
		throttle((e: React.ChangeEvent<HTMLInputElement>) => {
			console.log('====================================');
			console.log(e.target.value);
			console.log('====================================');
		}, 500),
		[],
	);

	return (
		<div className={classNames('search', 'clearfix')}>
			<div className={classNames('search-text', 'float-left')}>QQ</div>
			<input className={classNames('search-input', 'float-right')} onChange={onInputChange} />
			<div className="search-list"></div>
		</div>
	);
};

export default QQSearch;
