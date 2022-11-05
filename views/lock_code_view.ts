const lock_code_view = (front_door: string, storage_closet: string, food_cabinet: string) => {
    return [
		{
			"color": "#2ECC71",
			"blocks": [
				{
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": `*Front Door* - _${front_door}_`,
					},
				},
				{
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": `*Storage Closet* - _${storage_closet}_`,
					},
				},
				{
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": `*Food Cabinet* - _${food_cabinet}_`,
					},
				},
			]
		},
	]
};

export default lock_code_view;