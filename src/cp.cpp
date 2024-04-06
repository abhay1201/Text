#include <iostream>
#include <vector>
#include <string>
using namespace std;
int minSegmentLength(int n, string& s) {
    int blackCount = 0;
    for (char cell : s) {
        if (cell == 'B') {
            blackCount++;
        }
    }
    return blackCount;
}

int main() {
    int t;
    cin >> t; 

    while (t--) {
        int n;
        cin >> n; 
        string s;
        cin >> s; 

        int minLength = minSegmentLength(n, s);
        cout << minLength << endl;
    }

    return 0;
}