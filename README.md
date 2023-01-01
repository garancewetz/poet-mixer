
``` https://yoansydev.co/du-react-avec-symfony/ ```
``` https://www.youtube.com/watch?v=jPi9HcP7fU8 ```
``` https://openclassrooms.com/fr/courses/5489656-construisez-un-site-web-a-l-aide-du-framework-symfony-5/7171301-installez-symfony-5 ```


# node version
node 14

# run symfony web server
symfony serve -d
symfony open:local

# watch
npm run watch
npm run build

## commands
- symfony console make:controller nameController
- symfony console make:entity NameEntity

### DB
## poet
  - id
  - fullName
  - description
  - image
  - link

## verse
  - id
  - poetId
  - text
  - status (1, 2, 3, 4...)

  # DB
run in terminal mysql -uroot -p to access DB
show databases ; 
use $databaseName ;
show tables ;
describe $tableName ;
SELECT * from poets ; 

# psysh
sc psysh
use App\Entity\Poet
$em = $container->get('doctrine')->getManager();
$poet1 = new Poet;
$poet1->setFullName('Miguel Hernández');
$poet1->setDescription("Miguel Hernández Gilabert (30 octobre 1910 à Orihuela, province d'Alicante - 28 mars 1942 à Alicante) est un poète et dramaturge espagnol.") ;
dump($poet1)
$em->persist($poet1) ;
$em->flush() ;
dump($poet1) ;