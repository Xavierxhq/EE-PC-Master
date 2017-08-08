export default {

	//全局mutations
	CLEAR: 'CLEAR',
	UPDATE_HEADER_SELECTED: 'UPDATE_HEADER_SELECTED',
	UPDATE_LOADING: 'UPDATE_LOADING',
	UPDATE_USER_USER: 'UPDATE_USER_USER',
	UPDATE_ME_MESTATE: 'UPDATE_ME_MESTATE',
	UPDATE_USER_NAME_AND_INTRO: 'UPDATE_USER_NAME_AND_INTRO',
	UPDATE_USER_BASE: 'UPDATE_USER_BASE',
	UPDATE_USER_EXTRA: 'UPDATE_USER_EXTRA',
	UPDATE_USER_LAST: 'UPDATE_USER_LAST',
  UPDATE_USER_HEADIMG: 'UPDATE_USER_HEADIMG',
	RELEASE_LOGIN: 'RELEASE_LOGIN',

	//course模块
	ADD_COURSE_LEARNING: 'ADD_COURSE_LEARNING',
	ADD_COURSE_LEARNED: 'ADD_COURSE_LEARNED',
	UPDATE_COURSE_ISDONE: 'UPDATE_COURSE_ISDONE',
	CLEAR_COURSE_COURSES: 'CLEAR_COURSE_COURSES',

	//note模块
	ADD_NOTE_NOTES: 'ADD_NOTE_NOTES',
	UPDATE_NOTE_NOTE: 'UPDATE_NOTE_NOTE',
	UPDATE_NOTE_NOTES: 'UPDATE_NOTE_NOTES',
	CLEAR_NOTE_NOTES: 'CLEAR_NOTE_NOTES',
	UPDATE_NOTE_DRAFT: 'UPDATE_NOTE_DRAFT',
	UPDATE_ADD_NOTE: 'UPDATE_ADD_NOTE',
	ADD_NOTE_SELECTED: 'ADD_NOTE_SELECTED',
	DELETE_NOTE_SELECTED: 'DELETE_NOTE_SELECTED',
	NOTE_SELECT_NONE: 'NOTE_SELECT_NONE',
	NOTE_SELECT_ALL: 'NOTE_SELECT_ALL',
	DELETE_NOTE_NOTE: 'DELETE_NOTE_NOTE',

	//plan模块
	UPDATE_PLAN: 'UPDATE_PLAN',
	UPDATE_PLAN_DRAFT: 'UPDATE_PLAN_DRAFT',
	CLEAR_PLAN_PLAN: 'CLEAR_PLAN_PLAN',

	//friend模块
	ADD_FRIEND_FRIENDS: 'ADD_FRIEND_FRIENDS',
	UPDATE_ADD_FRIEND: 'UPDATE_ADD_FRIEND',
	CLEAR_FRIEND_FRIENDS: 'CLEAR_FRIEND_FRIENDS',
	UPDATE_FRIEND_FRIEND: 'UPDATE_FRIEND_FRIEND',
	DELETE_FRIEND_FRIEND: 'DELETE_FRIEND_FRIEND',

	//homework模块
	ADD_HOMEWORK_UNDONE: 'ADD_HOMEWORK_UNDONE',
	ADD_HOMEWORK_DONE: 'ADD_HOMEWORK_DONE',
	UPDATE_HOMEWORK_ISDONE: 'UPDATE_HOMEWORK_ISDONE',
	UPDATE_HOMEWORK_HOMEWORK: 'UPDATE_HOMEWORK_HOMEWORK',
	UPDATE_HOMEWORK_HOMEWORKS: 'UPDATE_HOMEWORK_HOMEWORKS',
	CLEAR_HOMEWORK_HOMEWORKS: 'CLEAR_HOMEWORK_HOMEWORKS',
	ADD_HOMEWORK_SELECTED: 'ADD_HOMEWORK_SELECTED',
	DELETE_HOMEWORK_SELECTED: 'DELETE_HOMEWORK_SELECTED',
	HOMEWORK_SELECT_NONE: 'HOMEWORK_SELECT_NONE',
	HOMEWORK_SELECT_ALL: 'HOMEWORK_SELECT_ALL',
	DELETE_HOMEWORK_HOMEWORK: 'DELETE_HOMEWORK_HOMEWORK',
	UPDATE_HOMEWORK_UNDONECALLED: 'UPDATE_HOMEWORK_UNDONECALLED',
	UPDATE_HOMEWORK_DONECALLED: 'UPDATE_HOMEWORK_DONECALLED',

	//chat模块
	ADD_CHAT_CHATS: 'ADD_CHAT_CHATS',
	ADD_CHAT_CHAT: 'ADD_CHAT_CHAT',
	UPDATE_CHAT_CHATFRIEND: 'UPDATE_CHAT_CHATFRIEND',
	UPDATE_CHAT_FAILED: 'UPDATE_CHAT_FAILED',
	CLEAR_CHAT_CHATS: 'CLEAR_CHAT_CHATS',
	SAVE_TO_INDEXEDDB: 'SAVE_TO_INDEXEDDB',
	INIT_CHAT_UNOPEN: 'INIT_CHAT_UNOPEN',
	UPDATE_CHAT_UNOPEN: 'UPDATE_CHAT_UNOPEN',
	SAVE_TO_INDEXEDDB_AND_SAVEONLY: 'SAVE_TO_INDEXEDDB_AND_SAVEONLY',

	//forum模块
  ADD_FORUM_SAY: 'ADD_FORUM_SAY',
  ADD_FORUM_NEWS: 'ADD_FORUM_NEWS',
  ADD_FORUM_NEWSDETAIL: 'ADD_FORUM_NEWSDETAIL',
	SET_FAVORITE_LIST: 'SET_FAVORITE_LIST',
	UPDATE_FORUM_STATE: 'UPDATE_FORUM_STATE',

  //teacher模块
	UPDATE_TEACHER_TEACHERMARK: 'UPDATE_TEACHER_TEACHERMARK',
  ADD_TEACHER_CHINA: 'ADD_TEACHER_CHINA',

  //cbroom模块
	ADD_CBROOM_MICROLECTURE: 'ADD_CBROOM_MICROLECTURE',
	ADD_CBROOM_CURRICULUM: 'ADD_CBROOM_CURRICULUM',
	UPDATE_CBROOM_ISDONE: 'UPDATE_CBROOM_ISDONE',
	CLEAR_CBROOM_CBROOM: 'CLEAR_CBROOM_CBROOM',
	UPDATE_CBROOM_MICROLECTURE: 'UPDATE_CBROOM_MICROLECTURE',
}