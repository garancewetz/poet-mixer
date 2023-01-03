<?php

namespace App\Controller;

use App\Entity\Poet;
use App\Repository\PoetRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PoetsController extends AbstractController
{
    /**
     * @Route("/", name="app_home")
     */
    public function index(PoetRepository $poetRepository): Response
    {
        $poets = $poetRepository->findBy([], ['fullName' => 'ASC']);
        // dump($poets);
        return $this->render('poets/index.html.twig', compact('poets'));
    }
    /**
     * @Route("/poets/create", name="app_poets_create")
     */
    public function create(): Response
    {
       $form = $this->createFormBuilder()
            ->add('fullName')
            ->add('description')
            ->getForm();
        ;
        dd($form);
        return $this->render('poets/create.html.twig',
            ['myForm' => $form->createView()]
        );
    }

    /**
    * @Route("/poets/{id<[0-9]+>}", name="app_poets_show")
    */
    public function show(Poet $poet): Response
    {
        return $this->render('poets/show.html.twig', compact('poet'));
    }
}
