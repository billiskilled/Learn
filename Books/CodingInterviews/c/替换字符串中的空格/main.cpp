class Solution {
public:
	void replaceSpace(char *str,int length) {
		int spaceSum = 0;
		while (*str != '\0') {
			if (*str == ' ') {
				spaceSum++;
			}
			str++;
		}
	}
};