// flip the boolean
function reverse(bool) {
	if (typeof bool !== 'boolean') return "boolean expected"
	return !bool
}
reverse()