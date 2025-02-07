# Thinking through some endpointy things

Initial State of Database:

```json
[
	{ "id": 1, "youtube_id": "yt1", "timestamp": "2025-02-02", "title": "test title" },
	{ "id": 2, "youtube_id": "yt2", "timestamp": "2025-02-03", "title": "a better title" },
	{ "id": 3, "youtube_id": "yt3", "timestamp": "2025-02-04", "title": "the best title" },
	{ "id": 4, "youtube_id": "yt4", "timestamp": "2025-02-05", "title": "the turtliest title" }
]
```

Endpoint Request:
`http://myapi.local/videos`

Endpoint Response:

```json
{
	"total_results": 4,
	"results_per_page": 2,
	"current_page": 0,
	"results": [
		{ "id": 1, "youtube_id": "yt1", "timestamp": "2025-02-02", "title": "test title" },
		{ "id": 2, "youtube_id": "yt2", "timestamp": "2025-02-03", "title": "a better title" }
	]
}
```

Endpoint Request:
`http://myapi.local/videos?page=1`

Endpoint Response:

```json
{
	"total_results": 4,
	"results_per_page": 2,
	"current_page": 1,
	"results": [
		{ "id": 3, "youtube_id": "yt3", "timestamp": "2025-02-04", "title": "the best title" },
		{ "id": 4, "youtube_id": "yt4", "timestamp": "2025-02-05", "title": "the turtliest title" }
	]
}
```
