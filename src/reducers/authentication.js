/**
 * Created by miketran on 3/4/17.
 */

import {CHANGE_AUTH} from '../actions/types';

export default function(state = false, action){
	switch (action.type){
		case CHANGE_AUTH:
			return action.payload;

	}
	return state;
}