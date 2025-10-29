// --- 1. PEGA TU TEXTO AQUÍ ---
// Pega todo el texto que copiaste de la terminal
// DENTRO de las comillas invertidas (backticks).
const framesEnTexto = `
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%&&&&&&&&%%%@@@@@@@%%%&&&&&&&&%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&&&&&%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%&&&&%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&*&%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&&&&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&*&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&**&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@%&*&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&*&@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@%&*&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&*&@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@%*&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%**%@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@&*&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&*%@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@&*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*%@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@&*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*%@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@%*&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*&@@@@@@@@@@@@@@@
@@@@@@@@@@&&&+=*&*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*&&&*&&**&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&**&++*&&%@@@@@@@@@@
@@@@@@@@@@+&++**+*&&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*&&&&+*&&&%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&&*+*&&=*&&@@@@@@@@@@
@@@@@@@@@@=*%****%&%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*&&*&%%@@&%@&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%&**+&%=*@@@@@@@@@@
@@@@@@@@@*=@@%***%&%@@%&&%%@@@@@@@@@@@@@@@@@@@@@@@@**-+-=**&&**+*&**@@@@@@@@@@@@@@@@@@@@@@@@%&&%%@@%*%&**&@@&=%@@@@@@@@@
@@@@@@@@*&+@@@@@@%%&&&@@@@%%%%&&%%@@@@@@@@@@@@@@@@%*%--:*++&=*@==&**&@@@@@@@@@@@@@@@@@%&&%&&&@@@%&&&%%@@@@@@&**&@@@@@@@@
@@@@@@@+%@+@@@@@@@@@@@%&&%@@&%@@@%&&%@@@@@@@@@@@@@***-=:=**+&%&=-&&&&@@@@@@@@@@@@@@&&%%@@%%%@@%&%%@@@@@@@@@@&&@**@@@@@@@
@@@@@@+%@@+@@@@@@@@@@@@@@%&%%@@@@@@@*&%&%%%@@@@@@@@&+++-*=+**%---&&&@@@@@@@@@%%&&&*%@@@@@@@%&%@@@@@@@@@@@@@@&&@@**@@@@@@
@@@@@+%@@@+@@@@@@@@@@@@@@@@@%%%%%@@@@%@@@@%&&&&&&&%%&+=+&+-+**==**&@%&&&&&&&&%@@@%@@@@@%%%%%@@@@@@@@@@@@@@@@&&@@@*&@@@@@
@@@@*&@@@@+@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%@@@@%%@@%%&****%&*@%%&&***%%@@@%%@@@@@%%%%%%%%%@@@@@@@@@@@@@@@@@@@@&&@@@@+%@@@@
@@@&*@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@%%%&*&%%@%&@@@%%%@@@&&%&@@@@%*@@@@&%@@@%&&&%%%@@@@@@@@@@@@@@@@@@@@@@@@@%&@@@@@+@@@@
@@@+@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%&&%&%@@@%%@@@@@%@@@@%%&@@@%@%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&@@@@@%*@@@
@@*%@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*&%@@@@@@@@@%@@@@@@@@@&%&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@*%@@
@%+@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@**&@@@@@@@@&%@@@@@@@*&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@+@@
@+%@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&+%@%@@@%&*&%@%@@&&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@*%@
%+@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@**%&&&&&%%&%&***&%%%*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@%+@
*&@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+&@@@@@@%&%@@@%@@@*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@+%
+@@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*%%@@@@@%@@@@@@@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@&*
+@@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@%@@@@@@@@@@%@*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@%+
*@@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@%@@@@%@@@@@@%*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@@=
&@@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*@@%@@@&@@@@%@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@@=
%@@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@@@@@@@@@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@@=
%@@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@@%@@@*%@@%@@%*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*@@@@@@@@@=
&@@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*%%@%@@@%@@@%@%%*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@@=
&@@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@%@@@@@@@@@%@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@@=
*@@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*@@@%%@@@@@@@@%@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@@=
=@@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@%%%%%@@@@@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@%+
+@@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&@@@@@&&&&%%&%@@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@&*
&&@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&@@@@@@%*%%*%@@@%*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@+%
@+@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@+&*%+%@@@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@%*@
@*%@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@%*%%+&+%%@@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@+%@
@@+@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@&*@@@*@%*@%%@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@%+@@
@@*&@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*%%*%@@@&&@@%&@%@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@+%@@
@@@+@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%=*%@@@@@+@@@@%&@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@&*@@@
@@@%+@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%+@@@@@@*=@@@@@%&&*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@%+@@@@
@@@@&*@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@&*&%@@%@@@*&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@+%@@@@
@@@@@*&@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%@@@%%*@*@%@@@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@+%@@@@@
@@@@@@*&@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@%@@@*%&%@@@@&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@*&@@@@@@
@@@@@@@*&@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+%%@@@*&%%@@@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@*&@@@@@@@
@@@@@@@@*&+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*%&@@+%%&@%@@%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%**%@@@@@@@@
@@@@@@@@@&-@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@&%%+@*&@@%@%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&=%@@@@@@@@@
@@@@@@@@@@=+%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*&@%%+%@*%@@%%*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&=&@@@@@@@@@@
@@@@@@@@@@+%*&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*%@@%*@%*@@@@&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*&&&@@@@@@@@@@
@@@@@@@@@@+@@&*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%@%@@*@&%@@%@*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*%@&&@@@@@@@@@@
@@@@@@@@@@+@@@@**@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*%%@@@*%*@@@@@&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*&@@@&&@@@@@@@@@@
@@@@@@@@@@+@@@@@%*&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*%%@@@&**@@@@%%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%**@@@@@&&@@@@@@@@@@
@@@@@@@@@@+@@@@@@@%*&@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&%@@@&&&%@@@%%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%**@@@@@@@&&@@@@@@@@@@
@@@@@@@@@@+@@@@@@@@@%*&%@@@@@@@@@@@@@@@@@@@@@@@@@@+&%@@*&@*%@@%%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*&@@@@@@@@@&&@@@@@@@@@@
@@@@@@@@@@+@@@@@@@@@@@%&*%@@@@@@@@@@@@@@@@@@@@@@@@&*%@@&*@&&@@@%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*&@@@@@@@@@@@&&@@@@@@@@@@
@@@@@@@@@@+@@@@@@@@@@@@@@&**%@@@@@@@@@@@@@@@@@@@@@@*&@@%*@&&@%@%&@@@@@@@@@@@@@@@@@@@@@@@@@@%%&%@@@@@@@@@@@@@&&@@@@@@@@@@
@@@@@@@@@@+@@@@@@@@@@@@@@@@@&**%@@@@@@@@@@@@@@@@@@@@*&@@*@@*%@@%*@@@@@@@@@@@@@@@@@@@@@@@&*&%@@@@@@@@@@@@@@@@&&@@@@@@@@@@
@@@@@@@@@@+@@@@@@@@@@@@@@@@@@@@%&*&%@@@@@@@@@@@@@@@@@*@@%&@&&@@@*@@@@@@@@@@@@@@@@@@@%&&&%@@@@@@@@@@@@@@@@@@@&&@@@@@@@@@@
@@@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@%&&*&%@@@@@@@@@@@@@*%%@*&@*&@%%&%@@@@@@@@@@@@%&&&&%@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@@@
@@@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&&&&&%%@@@@@@+&@@@*%*%%@@@%%&%%%%%%&&&&%%@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@@@
@@@@@@@@@@+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%&&&****=*++*+=-%&**&****++*=*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@@@
===FRAME===
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW##&&&BB&&&&###WW#WWW###&&BBBB&&&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#&&B&&##WWWWWWWWWWWWWWWWWWWWWWWWWWWW##&&B&&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&&B&&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#&BB&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#&BB#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#&BB&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWW#BB&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BB&#WWWWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWW#BB&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BB&WWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWW&BB#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BB#WWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWW&@&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BB#WWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWW&@&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWBB#WWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWW&@&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWBB#WWWWWWWWWWWWWWWW
WWWWWWWWWWWWWW#@&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWBBWWWWWWWWWWWWWWW
WWWWWWWWWW&&&@$@BBB&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&BB&&B&&BBB&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&BBB@$B&&#WWWWWWWWWW
WWWWWWWWWW@&$@B@@@&&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BB&&&@B&&&#&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#&BB@@BB*@BBWWWWWWWWWW
WWWWWWWWWW*@&B@BB&&##&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWW&B&&B&###W&#W&&&WWWWWWWWWWWWWWWWWWWWWWWWWWWW####&#BB@@&#$BWWWWWWWWWW
WWWWWWWWWB*WW#BBB#&#WW#&&&#WWWWWWWWWWWWWWWWWWWWWWWWBB*$=$B@&BBB@B&B@WWWWWWWWWWWWWWWWWWWWWWWW#&&&#WW#B#BBB&WW&*&WWWWWWWWW
WWWWWWWW@&@WWWWWW##&&&WWWW#&&#&&&#WWWWWWWWWWWWWWWW#@&=*-B$$&$@W*$BB@BWWWWWWWWWWWWWWWW##&&&&&&WWW#&B&&#WWWWWW&BBBWWWWWWWW
WWWWWWW@#W@WWWWWWWWWW##&&#WW&&WWW#&&#WWWWWWWWWWWWWBBB*$-*BB@&#&$=B&B&WWWWWWWWWWWWW#&&##WW#&#WW#&##WWWWWWWWWW&BWBBWWWWWWW
WWWWWW@#WW@WWWWWWWWWWWWWW#&##WWWWWW#B&&&&##WWWWWWWWB$$@*@*@BB#*==&&&WWWWWWWWW##&&BB#WWWWWWW#&&#WWWWWWWWWWWWW&BWWBBWWWWWW
WWWWW@#WWW@WWWWWWWWWWWWWWWWW#&&##WWWW#WWW##&&&&&&&##B@*@&$=@@B**@B&##&&&&&&&&#WWW#WWWWW##&&#WWWWWWWWWWWWWWWW&BWWW@&WWWWW
WWWW@&WWWW@WWWWWWWWWWWWWWWWWWWWWW#&&#####WWWW##WW##&B@@B#B@W##&&B@B&#WWW&##WWWW####&&###WWWWWWWWWWWWWWWWWWWW&BWWWW@#WWWW
WWW&@WWWWW$WWWWWWWWWWWWWWWWWWWWWWWWWW###&B&&#W#&WWW#&#WWW&&&&WWWW#BWWWW&#WWW#&&&&##WWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWW$WWWW
WWW$WWWWWW$WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW##&B&&#WWW###WWW#&WWWW##&WWW####&&###WWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWW&@WWW
WW@&WWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWB&&W##WWWWWW#WWWWWWWWW&&&&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWW@&WW
W#@WWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@B&WWWWWWWW&#WWWWWWWB&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWW$WW
W@#WWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&&&@#W#WWW#&B&#W##W&&B&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWW@&W
#@WWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWBB#&&B&&&&&&&BBB&&#&@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWW#@W
B&WWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@&WWWWWW#&#WWW#WWW@#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWWW@#
$WWWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&@##WWWWW#WWWWWWW#BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWWWBB
$WWWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WW#WWWWWWWWWW#WB#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWWW#$
@WWWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&&W#WWWW#WWWWWW#BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWWWW*
&WWWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BWW#WWW&WWWW#W&&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWWWW*
&WWWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWWWW$
&WWWWWWWWW$WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWW#WWWB#WW#WW#@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWWWW$
&WWWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#B##W&WWW#WWW#W##@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWWWW$
&WWWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWW&WWWWWWWWW##W$WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWWWW*
@WWWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BWWW##WWWWWWW##WW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWWWW$
$WWWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&&WWWWW&##&###WWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWWW#$
$WWWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BWWWWW&&&&#&&#WW#BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWWWBB
BBWWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BWWWWWW#B#&B#WWW#BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWWW@#
W@WWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&&WWWWWW@&B#@&WWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWW#@W
W@&WWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&&WWWW#B&#$&@###WWBWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWW@#W
W#@WWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&&WWW&BWW#@W#BW##WBWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWW#@WW
WWB&WWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#@#&B&WWW&&WW&BW#W@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWW@#WW
WWW$WWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&*B#WWWWW$#WWW&BWW@##WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWW&BWWW
WWW#@WWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#$WWWWWW@$WWWWW#B&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWW#@WWWW
WWWWBBWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWW&BB#WW#WWW@BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWW@#WWWW
WWWWW@&WWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&&WWW##B#BW#WWWWBWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWW@&WWWWW
WWWWWW@&WW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@W#WWWB#B#WWWW&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWW@&WWWWWW
WWWWWWW@&W@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#WWWWWWWWW@#&WWWB&&#WWW#BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BW@&WWWWWWW
WWWWWWWWBB@WWWWWWWWWWWWWWWWWWWWWWWWWWW#WWWWWWWWWWW&B#&WW@#&&W#WW#BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&B@&WWWWWWWW
WWWWWWWWWB*WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWB&W&##@WB&W##W&&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&*#WWWWWWWWW
WWWWWWWWWW$@#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWB&W##@&W@#WW##BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&$BWWWWWWWWWW
WWWWWWWWWW@#@&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWB##W#@W#BWWW#B#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@&&BWWWWWWWWWW
WWWWWWWWWW@WW&@#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWB&W#WW@WB#WW#WB#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&@#W&BWWWWWWWWWW
WWWWWWWWWW@WWWWBBWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@##WWWB&BWWW#W&&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#@&WWW&BWWWWWWWWWW
WWWWWWWWWW@WWWWW#B&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@##WWW&BBWWWW##&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BBWWWWW&BWWWWWWWWWW
WWWWWWWWWW@WWWWWWW&B&WWWWWWWWWWWWWWWWWWWWWWWWWWWW&B&WWW&&&#W#W##BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BB#WWWWWW&BWWWWWWWWWW
WWWWWWWWWW@WWWWWWWWW#BB#WWWWWWWWWWWWWWWWWWWWWWWWWW@&#WWB&WB#WW##BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BB#WWWWWWWW&BWWWWWWWWWW
WWWWWWWWWW@WWWWWWWWWWW#BB#WWWWWWWWWWWWWWWWWWWWWWWW&B&WW&BWB&W#W#&WWWWWWWWWWWWWWWWWWWWWWWWWWWWW&B&WWWWWWWWWWW&BWWWWWWWWWW
WWWWWWWWWW@WWWWWWWWWWWWWW&BB#WWWWWWWWWWWWWWWWWWWWWW@BWW#@W&BW#W#&WWWWWWWWWWWWWWWWWWWWWWWWWW##&#WWWWWWWWWWWWW&BWWWWWWWWWW
WWWWWWWWWW@WWWWWWWWWWWWWWWWW&BB#WWWWWWWWWWWWWWWWWWWW@&WW@WW@#WW#BWWWWWWWWWWWWWWWWWWWWWWW&B&#WWWWWWWWWWWWWWWW&BWWWWWWWWWW
WWWWWWWWWW@WWWWWWWWWWWWWWWWWWWW&BB&#WWWWWWWWWWWWWWWWW@WW#BW&&WWWBWWWWWWWWWWWWWWWWWWW#&B&#WWWWWWWWWWWWWWWWWWW&BWWWWWWWWWW
WWWWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWW#&BB&##WWWWWWWWWWWWB&#WB&WB&###B#WWWWWWWWWWWW#&&B&#WWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWWWWW
WWWWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWW#&&B&&##WWWWWW@&WWWB&B##WWW##&#####&&&&&&#WWWWWWWWWWWWWWWWWWWWWWWWWWW&BWWWWWWWWWW
WWWWWWWWWW@#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#&&&BBBBB$@@@@@**&&BBB@@BB$$@$@#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&&WWWWWWWWWW
===FRAME===
##############################################======###############=======##############################################
########################################===#################################====########################################
###################################===############################################===###################################
###############################===####################################################==################################
############################===##########################################################===############################
#########################===################################################################==##########################
#######################==######################################################################==#######################
####################===##########################################################################==#####################
##################==###############################################################################==###################
################==###################################################################################==#################
###############==######################################################################################==###############
##########=#==-=====#===########################=##=###==========#====##############################=====-=#=###########
##########=#-=======##################################==========#=##################################======-===##########
##########-=#====###################################=====########===##################################=====#-=##########
#########=-###===#=#####=##########################==--.-===========##########################=#####=#===####-##########
########=#=##########=#########=###################=#.-.=--#-=#--====##################=###=#####==##########===########
#######=##=############==#########==##############===--.-====##--=#==##############==########################=#==#######
######=###=#########################==#############=--=-=-===#--.##=############===##########################=##==######
#####=####=################################===#===##==-==--===--===###=##===#################################=###==#####
####==####=#########################################====#==####====##########################################=####=#####
###==#####-#############################===#################=#####=####=#####===#############################=#####-####
###-######-#################################==#=#############################################################=######=###
##=#######=####################################==######################=#####################################=######=###
##=#######=#####################################===#################===######################################=#######-##
#=########=#####################################====#######==######=#==######################################=#######=##
#=########=######################################==#===####=##====###=#######################################=########=#
==########=#######################################=########=########=########################################=########=#
-#########=#######################################==################=########################################=########==
-#########=########################################=###############=#########################################=#########-
=#########=########################################==##############=#########################################=#########-
=#########=#########################################=#############==#########################################=#########-
##########=########################################=###############=#########################################=#########-
##########-########################################=#######=#######=########################################==#########-
##########=########################################=###############=#########################################=#########-
=#########=#######################################=################-#########################################=#########-
=#########=#######################################=################=#########################################=#########-
-#########=########################################################=#########################################=#########-
-#########=#######################################=#####=##=#######=#########################################=########==
==########=#######################################=#######=##=#####=#########################################=########=#
#=########=######################################=#######===#=#####=#########################################=########=#
#=########=######################################=######=##-==#####=#########################################=#######=##
##=#######=######################################==####=###=##=####=#########################################=#######=##
##==######=#######################################=##=####==###=###=#########################################=######=###
###-######=#######################################-=######-#####=##=#########################################=#####==###
####=#####=#######################################-######=-######=#=#########################################=#####=####
####==####=#######################################=######==#######==#########################################=####=#####
#####==###=#######################################=######=#=######=##########################################=###=######
######=###=########################################=#####=#=#####=###########################################=##==######
#######==#=########################################=#####==######=###########################################=#=########
########===########################################=####=########=###########################################==#########
#########=-#######################################=#####=#==#####=##########################################=-##########
##########-=######################################==###=##=#####=###########################################-=##########
##########=#==####################################=####=##=####=##########################################==#=##########
##########=##==##################################=#####=#=#####=########################################==###=##########
##########=####==################################=#####=#=#####=#######################################==####=##########
##########=######==##############################=#####===######=####################################==######=##########
##########=########==############################==####===######=##################################==########=##########
##########=##########==###########################==###=##=#####=################################==##########=##########
##########=############==##########################=####=#==####=#############################===############=##########
##########=###############==#######################==###=#==####=############################=###############=##########
##########=#################===#####################=###=##=####=########################==##################=##########
##########=#####################===##################=###=#==###=#####################==#####################=##########
##########=#########################===##############=###==#==###=###############===#########################=##########
##########=##############################===#########==###=#=##############====##############################=##########
##########=####################################======-=====--#========--=-=#################################==##########
===FRAME===
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%&&&&&&&%%@@@@@@@@@@@@@%&&&&&&&&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%&&&&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%&&&&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&&&&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&*&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&*&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*&%@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@%**%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*&@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@&*&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&*%@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@&*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*%@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@&*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*%@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@&*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*%@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@%+&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@**@@@@@@@@@@@@@@
@@@@@@@@@@@@%*&&*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*+*&*+&***&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*+*&*@@@@@@@@@@
@@@@@@@@@@@@&+&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&&*&&%@&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@**+@@@@@@@@@@
@@@@@@@@@@@@*=@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&**&+&%%@@%&%%&*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%=@@@@@@@@@@
@@@@@@@@@@@&=&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*+---+=+&=**=&*+%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@++%@@@@@@@@
@@@@@@@@@@*&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&*--=***&*%&-*&**%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@+%@@@@@@@
@@@@@@@@@*&@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@**=+--=*+*%&=-+&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@+%@@@@@@
@@@@@@@@*&@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*++++*-***+--*%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@@+%@@@@@
@@@@@@@**@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%==*&-+&&*=**&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@@@+%@@@@
@@@@@@%+@@@@&&%**&&%%@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%&&%&%*%@%%%%&&%%%%&&%%@@@@@@@@@@@@@@@@@@@@@@@@@%%&&**&@+@@@@@+@@@@
@@@@@@+@@@@@&+***&%&@%%%%%%%%%%%%%%%%%&%%%%&&**&%&@@@%&@@@@%%&%@@@@&%@@@&@@%&*&&&%%%%%%%%%%%%&%%%%%%%@&%&****=@@@@@&*@@@
@@@@@*%@@@@@&+*+**%&%@%%%@@@@@@@@@@@@%%@@@@@@@%%&&%@@@%@@@@@%%@@@@%%%@@%@%%%@@@@@@@@@%@@%%%%@@@@@%%%@%*&&*+*&+@@@@@@+%@@
@@@@%+@@@@@@&&@%%%%%%%%%&%&&%%%@%%%@%%%%&&%%%%@%%+*&@@@@@@@@%%@@@@@@@@&&&&%%%%&%%%%%%%@%%%%%%&&&&&&%%%%%@%%@@+@@@@@@@+@@
@@@@+%@@@@@@&&@@@@@@@@@@@@@@@@%%%%%%%@%%%@%%%&&&%&+&*%@@@@@@@&%@@@@@@*%*&%%%%%%%%%%%@%%%%%%%%@@@@@@@@@@@@@@@@+@@@@@@@*&@
@@@%+@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&*&&%%%%&%*&&%&%&%*&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@@@@@@@+@
@@@*%@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@%%%%@@%&@@%&%@@%*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@@@@@@@*%
@@@+@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+&@@@@@@%%@@@@@@@&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@@@@@@@&*
@@%*@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*&@%@@@@@@@@@@@@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@@@@@@@@+
@@&&@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*@@@@@@@@@@@@%@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@@@@@@@@+
@@&%@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%@%@@@%%@@@@@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@@@@@@@@+
@@&%@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@@@@@@%@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@@@@@@@@*
@@&%@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*@@@@@@@%@@@@@@&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@@@@@@@@&
@@&%@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*%@%%@@%&@@%@@%*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@@@@@@@@&
@@&%@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@%@%@@@@@@@@%@*&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@@@@*
@@&%@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&@@@%@@@@@@@@%@@@*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@@@@+
@@&&@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@@@@%@@@@@@@@@@@%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@@@@+
@@%+@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*%@@@@@%&%&&%&%@@@@%*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@@@@+
@@@+@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*@@@@@@@@%&%%&%%@@@@@%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@@@&*
@@@*&@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@@@@@**%*&@@@@@@@%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@@@+%
@@@@+@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*%@@@@@@@@%*&&&*&%@@@@@@@%*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@@%+@
@@@@*%@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*@@@@@@@@&*@@@@@*@@%@@@%@@&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@@+%@
@@@@@+@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@@%&&@@@@@@%*@%@@@%%@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@%+@@
@@@@@*&@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%@@@%@%*&@@@@@@@@@%&@@@@%@@%*&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@+@@@
@@@@@@+%@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@%&@&&@@@@@@@@@@@@%&%@@%@@%&*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@*&@@@
@@@@@@%+@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*%@@@%&@@@@@@@@@@@@@@@%*@%@@@&*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@%+@@@@
@@@@@@@%*@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*&@@@@%&@@@@@@@@@@@@@@@@@%&%@@@%&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@%+@@@@@
@@@@@@@@&*@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@%*%%@@&*%@@@@@@@@@@@@@@@@@@@&&@%@@@*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@+@@@@@@
@@@@@@@@@&*@&&@@@@@@@@@@@@@@@@@@@@@@@@@@&&%%@&*&@@@@@@@@@@@@@@@@@@@@@@&%@%%%%*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@+@@@@@@@
@@@@@@@@@@&*&&@@@@@@@@@@@@@@@@@@@@@@@@&*%%@@%*@@@@@@@@@@@@@@@@@@@@@@@@@*&@%%%*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*%+@@@@@@@@
@@@@@@@@@@@%=&@@@@@@@@@@@@@@@@@@@@@@@**@@@@%*@@@@@@@@@@@@@@@@@@@@@@@@@@@*%@@@@&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@=*@@@@@@@@@
@@@@@@@@@@@@&=%@@@@@@@@@@@@@@@@@@@@@**@@@@%+@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&@@%@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@&=@@@@@@@@@@
@@@@@@@@@@@@&**&@@@@@@@@@@@@@@@@@@@%+@@@@%*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@%@@&&@@@@@@@@@@@@@@@@@@@@@@@@%*&*@@@@@@@@@@
@@@@@@@@@@@@&&@%*%@@@@@@@@@@@@@@@@@+&@@@&*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&@@@%@@&%@@@@@@@@@@@@@@@@@@@@@@&*@@+@@@@@@@@@@
@@@@@@@@@@@@&&@@@**@@@@@@@@@@@@@@@&*@@@&*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&%%@%@@*@@@@@@@@@@@@@@@@@@@@%*&@@@+@@@@@@@@@@
@@@@@@@@@@@@&&@@@@%*&@@@@@@@@@@@@@+%@@&*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@%@%&@@@@@@@@@@@@@@@@@%*&@@@@@+@@@@@@@@@@
@@@@@@@@@@@@&&@@@@@@%*&@@@@@@@@@@%*@@*&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*%%@%@&%@@@@@@@@@@@@@@%**@@@@@@@+@@@@@@@@@@
@@@@@@@@@@@@&&@@@@@@@@%*&@@@@@@@@*%@&*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&%@%@*@@@@@@@@@@@@%*&@@@@@@@@@+@@@@@@@@@@
@@@@@@@@@@@@&&@@@@@@@@@@%**%@@@@&&@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&&%@@*%@@@%%%@@&*&@@@@@@@@@@@+@@@@@@@@@@
@@@@@@@@@@@@&&@@@@@@@@@@@@@&****%@@&*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*@@%%%&&**++&%@@@@@@@@@@@@@*@@@@@@@@@@
@@@@@@@@@@@@&&@@@@@@@@@@@@@@@%&*+*&*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*&%@@@%&*&&@@@@@@@@@@@@@@@@*@@@@@@@@@@
@@@@@@@@@@@@&&@@@@@@@@@@@@@@@@@@%&*+%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*%%++*%@@@@@@@@@@@@@@@@@@@+@@@@@@@@@@
@@@@@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@%&&&&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%&**&%@@@@@@@@@@@@@@@@@@@@@@+@@@@@@@@@@
@@@@@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@%%&&&&%%@@@@@@@@@@@@@@@@@@@@@@@@@@@%&&&&&%@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@@@@@
@@@@@@@@@@@@&*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%&&*******&&&&&&&&&*&*****++++%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%+@@@@@@@@@@
@@@%%%%%%%%%&*****************************************++++++=++++++++*****************************************%%%%%%%%%%
===FRAME===
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW##&&&&&&&##WWWWWWWWWWWWW#&&&BB&&&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#&&&&&##WWWWWWWWWWWWWWWWWWWWWWWWWWWWW##&B&&##WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#&BB&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#&BB&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BB&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#&B&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BB#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BB#WWWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWW#BB#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&B&#WWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWW&B&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BB#WWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWBB#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&B&WWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWBB#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&B&WWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWW&@#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&B#WWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWW#@&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BBWWWWWWWWWWWWWW
WWWWWWWWWWWW#@&&@B&B&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&B@BBB@&BB@B&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&B@@&@WWWWWWWWWW
WWWWWWWWWWWW&@BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWB&&&&B@&&&W&&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWBB@WWWWWWWWWW
WWWWWWWWWWWWB$WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BB&@B###W#&##B@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&*WWWWWWWWWW
WWWWWWWWWWWB$&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&B@=**$$@B$@B$BB@#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW$@#WWWWWWWW
WWWWWWWWWWB&&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BB==*B@@&@#B=B&B@#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@W@&WWWWWWW
WWWWWWWWW@&W&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWBB$$*=$B$@#&$=@&&&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WW@&WWWWWW
WWWWWWWWB&WW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWB$@$@B=@@B$=*@&&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWW@#WWWWW
WWWWWWWBBWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&$$B&*@&BB$@@&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWW@#WWWW
WWWWWW&@WWWW&B#BBB&&#WWWWWWWWWWWWWWWWWWWWWWWWWW#&####&&&&&#@#W####&&####&&##WWWWWWWWWWWWWWWWWWWWWWWWW#&&BBB&W@WWWW#$WWWW
WWWWWW$WWWWW&$BB@B#&#####&##&########&&###&B&BB&#&WWW#&WWWW#&&#WWWW&#WWW&WW#&B&&&####&&####&&&&##&####&&&BBBB$WWWWW&BWWW
WWWWW@&WWWWW&$@@BB#B#####WWWWWWWWWWWW##WWWWWWW##&B#WWW#WWWWW##WWW####WW##&###WWWWWWWW#WW####WWWWW#####B&BB@@&$WWWWWW@#WW
WWWW#@WWWWWW&BW########&&&&&&##W#######&&&#######@B&WWWWWWWW##WWWWWWWWB&&&###&&&&#####W#####&&&&&&&#########W@WWWWWWW@WW
WWWW@#WWWWWW&BWWWWWWWWWWWWWWWW#############&&&&&#&@&B#WWWWWW#&#WWWWWWB&@&###&#########&&#####WWWWWWWWWWWWWWWW@WWWWWWWB&W
WWW#@WWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&&B@&&&###B&BB&&B#&#BBWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWW@W
WWW@&WWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWBBW####WW#&WW&&#WW#@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWW@#
WWW$WWWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@&WWWWWW##WWWWWWWB&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWW&@
WW#@WWWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWB&W##WWWWWWWWWWWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWWW$
WW&&WWWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BWWWWWWWWWWWW#W&&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWWW$
WWB#WWWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWB&W#WWW##WWWW##@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWWW@
WW&#WWWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWBWW#WWWWWWWW#WWBWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWWWB
WW&#WWWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BWWWWWWW#WWWWWW&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWWWB
WW&#WWWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&B####WW&&WW#WW#@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWWWB
WW&#WWWWWWWW&&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WW#W#WWWWWWWW&W@&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWWWB
WWB&WWWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BWWW#WWWWWWWW##WWB#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWWW@
WW&BWWWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWW#WW#WWWWWWWW#BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWWW$
WW#@WWWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWB#WWWWW#&&B&#&#WWWW&@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWWW@
WWW$WWWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BWWWWWWWW#&&#&&#WWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWW&B
WWWB&WWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWW@B#@&WWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWW@#
WWWW@WWWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWB#WWWWWWWW#@&&B@&#WWWWWWW#BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWW#@W
WWWW@#WWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#BWWWWWWWW&BWWWW#BW##WWW#WWB#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWW@#W
WWWW#$WWWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWW#B&WWWWWW#BW#WWW##WW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWW#@WW
WWWWWB&WWWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&&WWW#W#B&WWWWWWWWW#BWWWW#W##B&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWW$#WW
WWWWWW@#WWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WW#&W&BWWWWWWWWWWWW#B#WW#WW#&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWB&WWW
WWWWWW#$WWWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWBB#WWW#BWWWWWWWWWWWWWWW&BW#WWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWW&@WWWW
WWWWWWW&@WWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWW#B&WWWW&BWWWWWWWWWWWWWWWWW#B#WWW#B&WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWW#@WWWWW
WWWWWWWW&BWW&BWWWWWWWWWWWWWWWWWWWWWWWWWWW&B##WW&B&WWWWWWWWWWWWWWWWWWW&&W##WWB#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WW#@WWWWWW
WWWWWWWWW&BW&BWWWWWWWWWWWWWWWWWWWWWWWWW#B&###&BB#WWWWWWWWWWWWWWWWWWWWWB#W###&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@W#@#WWWWWW
WWWWWWWWWW&B&&WWWWWWWWWWWWWWWWWWWWWWWW&B##WW#B#WWWWWWWWWWWWWWWWWWWWWWWWB&W###B#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@#@WWWWWWWW
WWWWWWWWWWW#*BWWWWWWWWWWWWWWWWWWWWWWWBBWWWW#BWWWWWWWWWWWWWWWWWWWWWWWWWWW@##WWW&&WWWWWWWWWWWWWWWWWWWWWWWWWWWWW$@WWWWWWWWW
WWWWWWWWWWWW&*#WWWWWWWWWWWWWWWWWWWWWB@WWWW#$WWWWWWWWWWWWWWWWWWWWWWWWWWWW#BWW#WW&&WWWWWWWWWWWWWWWWWWWWWWWWWWWB*WWWWWWWWWW
WWWWWWWWWWWW&BBBWWWWWWWWWWWWWWWWWWW#$#WWW#@#WWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWW#WW&&WWWWWWWWWWWWWWWWWWWWWWWW#@&@WWWWWWWWWW
WWWWWWWWWWWW&BW&@#WWWWWWWWWWWWWWWWW@BWWW&B#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#&WWW#WWB#WWWWWWWWWWWWWWWWWWWWWW&BWW@WWWWWWWWWW
WWWWWWWWWWWW&BWWWBBWWWWWWWWWWWWWWW&BWWW&@#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#B##W#WWBWWWWWWWWWWWWWWWWWWWW#@&WWW@WWWWWWWWWW
WWWWWWWWWWWW&BWWWW#B&WWWWWWWWWWWWW@#WWBBWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWBBWW#W#BWWWWWWWWWWWWWWWWW#BBWWWWW@WWWWWWWWWW
WWWWWWWWWWWW&BWWWWWW#B&WWWWWWWWWW#BWWBBWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWB&#W#WB#WWWWWWWWWWWWWW#BBWWWWWWW@WWWWWWWWWW
WWWWWWWWWWWW&BWWWWWWWW&BBWWWWWWWWB#WBBWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&&#W#WBWWWWWWWWWWWW#BB#WWWWWWWW@WWWWWWWWWW
WWWWWWWWWWWW&BWWWWWWWWWW#BB#WWWWBBWW@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#B&#W#B#WWW#&#WW&B&WWWWWWWWWWW@WWWWWWWWWW
WWWWWWWWWWWW&BWWWWWWWWWWWWW&B@@B#WW&BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&BWW&&#&&BB@$B#WWWWWWWWWWWWW@WWWWWWWWWW
WWWWWWWWWWWW&BWWWWWWWWWWWWWWW#&@@@B@WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWB&#WWW#B@B&WWWWWWWWWWWWWWWW@WWWWWWWWWW
WWWWWWWWWWWW&BWWWWWWWWWWWWWWWWWW#&@@&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWB##$$B#WWWWWWWWWWWWWWWWWWW@WWWWWWWWWW
WWWWWWWWWWWW&&WWWWWWWWWWWWWWWWWWWWWW#&BB&#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#&BB&#WWWWWWWWWWWWWWWWWWWWWW@WWWWWWWWWW
WWWWWWWWWWWW&&WWWWWWWWWWWWWWWWWWWWWWWWWW#&&&&&##WWWWWWWWWWWWWWWWWWWWWWWWWW##&&&&&#WWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWWWWWWWW
WWWWWWWWWWWW&B#WWWWWWWWWWWWWWWWWWWWWWWWWWWWW##&&BBBBBBBBBB&&&B&&BBBB@BB@@@$$&##WWWWWWWWWWWWWWWWWWWWWWWWWWWW##@WWWWWWWWWW
WWW#########&@BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB@@@$$$$$$@@@@@@@@B@@@@@BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB##########
===FRAME===
###############################################=====##################======############################################
#########################################===##################################====######################################
####################################===############################################===##################################
#################################==####################################################===##############################
##############################==###########################################################==###########################
###########################==################################################################===########################
########################===#####################################################################==######################
######################==##########################################################################==####################
####################==##############################################################################==##################
##################==##################################################################################==################
#################==#####################################################################################==##############
#############=#===============================================================================================##########
#############==########################################==#======###########################################===##########
############=-#######################################======#####=##==########################################-##########
###########=-=#######################################==-----==-==-===########################################-=#########
##########==#=######################################===---=====#=-====#######################################=#=########
#########==##=######################################==-----=-=##-.=#=########################################=##=#######
########==##==#######################################=-=-==-===-.-=#=########################################=###=######
#######==###==#########################################--==-====-===#########################################=####=#####
#######=####==#====###################################==###=######==#####=##############################===##=#####-####
######-#####=-====#=#######################=#==##=#################=########==##=#######################=====-#####==###
#####=#######-====#=#############################=####################################################=#=====-######=###
#####=######==###################################===##################===####################==##############=#######=##
####=#######==###################################====########=#######=#==####################################=#######=##
####=########=####################################====#=####=#===#=#=#==#####################################=########=#
###=########==#####################################==########=###=####=######################################=########=#
###-########==######################################=################=#######################################=#########=
###=########==######################################=################=#######################################=#########-
##==########==#######################################=##############=########################################=#########-
##=##########=#######################################=##############=########################################=#########=
##=##########=#######################################=##############=########################################=#########=
##=#########==#######################################=##############=########################################=#########=
##=#########==#######################################=#######=######=########################################=#########=
##=##########=######################################=###############==#######################################=#########=
##=##########=######################################=################=#######################################=#########=
###=#########=#####################################=##################=######################################=#########-
###=#########=####################################=#######=#==########=######################################=#########=
###-#########=###################################=############=########=#####################################=########==
###==#######==##################################=##########==#=#########=####################################=########=#
####=#######==#################################=##########=#====#########=###################################=########=#
####=#######==#################################=#########=#####=#########=###################################=#######=##
#####-######==################################=########=########=#########=##################################=#######=##
#####==#####==###############################=#######=###########=########=##################################=######-###
######=#####==###############################=#####==#############=#######==#################################=#####==###
#######-####==##############################==#####=################=#####==#################################=#####=####
########=###==#############################=######=##################=#####=#################################=####=#####
########==##==############################=####==#####################=#####=################################=###=######
#########==#==##########################==####==######################=######=###############################=##=#######
##########====########################==#####=#########################==####=###############################=#=########
############-=#######################==#####=###########################=#####=##############################-=#########
############=-######################==#####-#############################=######=###########################=-##########
#############===####################-#####=##############################=#######=#########################=#=##########
############==##=##################==###==################################=######=#######################==##=##########
############==###==################=###==##################################=######=#####################=####=##########
############==#####==#############=###==####################################==#####=##################==#####=##########
############==#######==###########=##==######################################=#####=################==#######=##########
############==#########==########=##==########################################==####=#############==#########=##########
#############=###########==#####==##=###########################################=####=#########===###########=##########
#############=#############=====###==#############################################=#####=====-=##############=##########
#############=################======##############################################=######===#################=##########
#############=###################===###############################################=##--=####################=##########
#############=#######################===##########################################===########################=##########
############==############################===################################===#############################=##########
#############=#################################================#==========--#################################=##########
#############===========================================------================================================##########
`;

// --- 2. Lógica de Animación ---

// Separa el texto pegado en frames individuales
const frames = framesEnTexto.split('===FRAME===');
let frameActual = 0;
const elementoAnimacion = document.getElementById("arte-ascii");

// Símbolos para el fondo dinámico (la parte de "William")
const simbolosFondo = "#*+.- ";
function generarFondo(largo) {
    let fondo = "";
    for (let i = 0; i < largo; i++) {
        fondo += simbolosFondo[Math.floor(Math.random() * simbolosFondo.length)];
    }
    return fondo;
}

// Mezcla el arte ASCII con el fondo
function mezclarFrame(frameTexto) {
    // Divide el frame en líneas individuales
    const lineas = frameTexto.split('\n');
    let frameFinal = "";

    for (const linea of lineas) {
        let lineaMixta = "";
        const fondo = generarFondo(linea.length);
        for (let j = 0; j < linea.length; j++) {
            const char = linea[j];
            // Si es un espacio (fondo de la imagen), reemplaza con el fondo dinámico
            if (char === ' ') {
                lineaMixta += fondo[j];
            } else {
                lineaMixta += char;
            }
        }
        frameFinal += lineaMixta + '\n';
    }
    return frameFinal;
}

// Bucle de animación
function animar() {
    // 1. Obtén el frame base (el texto pegado)
    const frameBase = frames[frameActual];
    // 2. Mézclalo con el fondo dinámico
    const frameMixto = mezclarFrame(frameBase);
    // 3. Actualiza el texto en la página (esto es fluido, sin parpadeo)
    elementoAnimacion.textContent = frameMixto;
    
    // 4. Avanza al siguiente frame
    frameActual = (frameActual + 1) % frames.length;

    // 5. Espera 400ms (como tu time.sleep(0.4)) y repite
    setTimeout(animar, 100); 
}

// Iniciar la animación
animar();