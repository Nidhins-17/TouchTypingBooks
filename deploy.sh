URL=https://Nidhins-17.github.io/TouchTypingBooks/
BRANCH=feature/mainpage

ng build --base-href $URL --deploy-url $URL
git add .

commitMessage=$1
if [[ "$commitMessage" == "" ]]
then
    commitMessage="Built at $(date)"
fi

git commit -m "$commitMessage"
git push origin $BRANCH