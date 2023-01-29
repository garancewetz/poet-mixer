<?php

namespace App\Controller;

use App\Entity\Poet;
use App\Repository\PoetRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\{TextType,ButtonType,TextareaType,SubmitType};

class PoetsController extends AbstractController
{
    /**
     * @Route("/", name="app_home", methods="GET")
     * 
     */
    public function index(PoetRepository $poetRepository): Response
    {
        $poets = $poetRepository->findBy([], ['fullName' => 'ASC']);
        // dump($poets);
        return $this->render('poets/index.html.twig', compact('poets'));
    }
    /**
     * @Route("/poets/create", name="app_poets_create", methods="GET|POST")
     */
    public function create(Request $request, EntityManagerInterface $em): Response
    {
        $poet = new Poet;
        $form = $this->createFormBuilder($poet)
                ->add('fullName', TextType::class)
                ->add('description', TextareaType::class)
                ->getForm();
            ;

        // get form's data
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($poet);
            $em->flush();

            return $this->redirectToRoute('app_home');
        };

        // dd($form);
        return $this->render('poets/create.html.twig',
            ['addPoetForm' => $form->createView()]
        );
    }

    /**
    * @Route("/poets/{id<[0-9]+>}", name="app_poets_show", methods="GET")
    */
    public function show(Poet $poet): Response
    {
        return $this->render('poets/show.html.twig', compact('poet'));
    }
}
